import classNames from 'classnames/bind';
import styles from './ModalOverlay.module.scss';
import { AiFillInstagram, AiOutlineClose, AiOutlineUser } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { IoMdArrowBack } from 'react-icons/io';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { useState, memo, useEffect, useRef } from 'react';

import SignUp from './LoginWith/SignUp';
import Email from './LoginWith/Email';

import jwt_decode from 'jwt-decode';
import Portal from '../Portal/Portal';
import { loginGoogleService } from '../../services/userService';
import { toast } from 'react-toastify';

import { LoginSocialFacebook } from 'reactjs-social-login';
import { FacebookLoginButton } from 'react-social-login-buttons';

const cx = classNames.bind(styles);

const Login = ({ setLogin }) => {
    const [register, setRegister] = useState(true);
    const [loginEmail, setLoginEmail] = useState('');
    const [homeHiden, setHomeHiden] = useState(false);

    // handleBack
    const handleBack = () => {
        setLoginEmail('');
        setHomeHiden(false);
    };
    // switch login

    const handleEmail = () => {
        setLoginEmail('email');
        setHomeHiden(true);
    };

    // title login
    let titleLogin = 'Đăng Nhập';
    if (!register) {
        titleLogin = 'Đăng kí';
    }
    if (loginEmail === 'qrcode') {
        titleLogin = 'QR code';
    } else if (loginEmail === 'email') {
        titleLogin = 'Số điện thoại/Email';
    }
    // login with google
    const handleCallBackResponse = (response) => {
        const userObject = jwt_decode(response.credential);
        if (userObject) {
            const dataSend = {
                email: userObject.email,
                nickName: userObject.family_name + ' ' + userObject.given_name,
                avatar: userObject.picture,
            };
            loginGoogleService(dataSend).then((res) => {
                // save data user to local storage
                if (res && res.errCode == 0) {
                    localStorage.setItem('USER_LOG_IN', JSON.stringify(res.data));
                    localStorage.setItem('TOKEN', JSON.stringify(res.token));
                    localStorage.setItem('IS_LOGIN', JSON.stringify(true));
                    setLogin(false);
                    toast.success('Login successful!');
                    setTimeout(() => {
                        window.location.reload();
                    }, 2000);
                }
            });
        }
    };
    const btnRef = useRef();
    useEffect(() => {
        // global google
        window.google.accounts.id.initialize({
            client_id: process.env.REACT_APP_LOGIN_GOOGLE,
            callback: handleCallBackResponse,
        });
        window.google.accounts.id.renderButton(btnRef.current, {
            theme: 'outline',
            size: 'large',
            width: btnRef.current.clientWidth,
            height: btnRef.current.clientHeight,
        });
    }, []);
    // log in with fb

    const handleLoginFb = (res) => {
        if (res && res.data) {
            const user = res.data;
            const dataSend = {
                email: user.email,
                nickName: user.name,
                avatar: user?.picture?.data.url,
            };
        }
    };
    return (
        <div className={cx('login')}>
            {homeHiden && register ? <IoMdArrowBack className={cx('back-icon')} onClick={handleBack} /> : <></>}
            <AiOutlineClose className={cx('close-icon', 'close')} onClick={() => setLogin(false)} />
            <div className={cx('login-body')}>
                <div className={cx('title')}>{titleLogin}</div>
                {register ? (
                    <div className={cx('content')}>
                        {loginEmail === 'email' && <Email setLogIn={setLogin} />}

                        <div className={cx(homeHiden && 'home-hiden')}>
                            <Link to="#">
                                <div className={cx('channel-item')} onClick={handleEmail}>
                                    <AiOutlineUser className={cx('chanel-icon')} />
                                    <p className={cx('chanel-text')}>Số điện thoại/Email</p>
                                </div>
                            </Link>
                            {/* facebook */}
                            <Link to="#">
                                <div className={cx('channel-item')}>
                                    {/* <BsFacebook className={cx('chanel-icon', 'facebook-icon')} />
                                    <p className={cx('chanel-text')}>Tiếp tục với Facebook</p> */}
                                    <LoginSocialFacebook
                                        appId="796796224642480"
                                        onResolve={handleLoginFb}
                                        onReject={(error) => {
                                            console.log(error);
                                        }}
                                    >
                                        <FacebookLoginButton />
                                    </LoginSocialFacebook>
                                </div>
                            </Link>
                            <Link to="#">
                                <div ref={btnRef} id="login_google" className={cx('channel-item')}>
                                    <FcGoogle className={cx('chanel-icon')} />
                                    <p className={cx('chanel-text')}>Tiếp tục với Google</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                ) : (
                    <SignUp setLogin={setLogin} />
                )}
            </div>
            <div className={cx('switch')}>
                <p>{register ? 'Bạn không có tài khoản?' : 'Bạn đã có tài khoản?'}</p>
                {register ? (
                    <div
                        className={cx('switch-signup')}
                        onClick={() => {
                            setRegister(false);
                        }}
                    >
                        Đăng kí
                    </div>
                ) : (
                    <div
                        className={cx('switch-signup')}
                        onClick={() => {
                            setRegister(true);
                            setHomeHiden(false);
                            setLoginEmail('');
                        }}
                    >
                        Đăng nhập
                    </div>
                )}
            </div>
        </div>
    );
};

function ModalOverlay({ setLogin }) {
    return (
        <Portal>
            <div className={cx('wrapper')} onClick={() => setLogin(false)}>
                <div className={cx('body')} onClick={(e) => e.stopPropagation()}>
                    <Login setLogin={setLogin} />
                </div>
            </div>
        </Portal>
    );
}

export default memo(ModalOverlay);
