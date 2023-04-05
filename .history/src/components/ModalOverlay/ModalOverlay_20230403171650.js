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

import Portal from '~/components/Portal';
import jwt_decode from 'jwt-decode';

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
        console.log('user info: ', userObject);
    };
    const btnRef = useRef();
    useEffect(() => {
        // global google
        window.google.accounts.id.initialize({
            client_id: '274030998956-76b7mbmntuh9m4tvevjbkirsueuuqjti.apps.googleusercontent.com',
            callback: handleCallBackResponse,
        });
        handleLoginGoogle;
        window.google.accounts.id.renderButton(btnRef.current, {
            theme: 'outline',
            size: 'large',
            width: btnRef.current.clientWidth,
            text: 'continue_with',
        });
    }, []);

    const handleLoginGoogle = () => {};
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
                            <Link to="#">
                                <div className={cx('channel-item')}>
                                    <BsFacebook className={cx('chanel-icon', 'facebook-icon')} />
                                    <p className={cx('chanel-text')}>Tiếp tục với Facebook</p>
                                </div>
                            </Link>
                            <Link to="#">
                                <div
                                    ref={btnRef}
                                    id="login_google"
                                    className={cx('channel-item')}
                                    onClick={handleLoginGoogle}
                                >
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