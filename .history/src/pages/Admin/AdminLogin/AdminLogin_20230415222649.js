import classNames from 'classnames/bind';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Button from '~/components/Button';
import Image from '~/components/Image';
import Loading from '~/components/Loading/Loading';
import { loginService } from '~/services/userService';
import styles from './AdminLogin.module.scss';

const cx = classNames.bind(styles);

function AdminLogin() {
    const msg = {
        nameMess: 'Please enter your email',
        passMess: 'Please enter your password',
    };
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');
    const [errMessage, setErrMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const [message, setMessage] = useState({ nameMess: '', passMess: '' });

    const handleOnChangeName = (e) => {
        setName(e.target.value);
        setMessage({ ...message, [e.target.name]: '' });
    };

    const handleOnChangePass = (e) => {
        setPass(e.target.value);
        setMessage({ ...message, [e.target.name]: '' });
    };

    const handleOnBlur = (e) => {
        const value = e.target.value;
        if (value === '') {
            setMessage({ ...message, [e.target.name]: msg[e.target.name] });
        } else {
            setMessage({ ...message, [e.target.name]: '' });
            if (e.target.name === 'passMess') {
                e.target.value?.length < 6
                    ? setMessage({ ...message, [e.target.name]: 'Your pass needs to have more than 6 characters' })
                    : setMessage({ ...message, [e.target.name]: '' });
            }
        }
    };
    const submitLogIn = () => {
        const dataSend = { email: name, password: pass };
        setIsLoading(true);
        console.log(process.env.REACT_APP_LINK);
        if (!message.passMess) {
            loginService(dataSend).then((res) => {
                setIsLoading(false);
                if (res && res.errCode === 0) {
                    localStorage.setItem('USER_LOG_IN', JSON.stringify(res.data));
                    localStorage.setItem('TOKEN', JSON.stringify(res.token));
                    localStorage.setItem('IS_LOGIN', JSON.stringify(true));
                    setErrMessage('You are not admin!');
                    setTimeout(() => {
                        window.location.reload();
                    }, 3000);
                    // toast.success('Login successful!');
                    window.location.replace(`${process.env.REACT_APP_LINK}/admin`);
                } else {
                    setErrMessage('Your email or password is not correct. Plz try again!');
                }
            });
        }
        //
    };
    return (
        <div className={cx('wrapper')}>
            {isLoading && <Loading />}
            <Link to="/">
                <AiOutlineClose className={cx('icon')} />
            </Link>
            <div className={cx('left')}>
                <div className={cx('left-body')}>
                    <div className={cx('left-logo')}>
                        <Image
                            className={cx('left-logo-image')}
                            src="https://www.svgrepo.com/show/217771/shopping-logo.svg"
                        />
                        <p>BINSHOP</p>
                    </div>
                    <div className={cx('left-title')}>Đăng nhập vào BinShop</div>

                    <div className={cx('left-group')}>
                        <div className={cx('div-label')}>Email:</div>

                        <input
                            value={name}
                            name="nameMess"
                            onChange={handleOnChangeName}
                            onBlur={handleOnBlur}
                            className={cx('input', message.nameMess && 'invalid')}
                            type="text"
                            placeholder="Enter your email"
                        />

                        <p className={cx('form-message')}>{message.nameMess}</p>
                    </div>

                    <div className={cx('left-group')}>
                        <div className={cx('div-label')}>Mật khẩu:</div>

                        <input
                            name="passMess"
                            value={pass}
                            onChange={handleOnChangePass}
                            onBlur={handleOnBlur}
                            className={cx('input', message.passMess && 'invalid')}
                            type="password"
                            placeholder="Enter your password"
                        />

                        <p className={cx('form-message')}>{message.passMess}</p>
                    </div>
                    <div>
                        <div className={cx('errMessage')}>{errMessage}</div>
                    </div>
                    <div className={cx('left-btn')}>
                        <Button type="button" primary large className={cx('submit-btn')} onClick={submitLogIn}>
                            Đăng nhập
                        </Button>
                    </div>
                    <div className={cx('left-forget')}>
                        <Link to="#">
                            <div className={cx('forgot')}>Quên mật khẩu!</div>
                        </Link>
                    </div>
                    <div className={cx('left-privacy')}>
                        Việc bạn tiếp tục sử dụng trang web này đồng nghĩa bạn đồng ý với{' '}
                        <span>Điều khoản sử dụng</span> của chúng tôi.
                    </div>
                </div>
            </div>
            <div className={cx('right')}>
                <Image
                    className={cx('right-image')}
                    src="https://cdn.pixabay.com/photo/2017/03/24/07/28/twitter-2170426_640.png"
                />
            </div>
        </div>
    );
}

export default AdminLogin;
