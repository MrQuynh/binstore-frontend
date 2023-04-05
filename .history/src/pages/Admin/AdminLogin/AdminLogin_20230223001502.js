import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import Image from '~/components/Image';
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
                e.target.value.length < 6
                    ? setMessage({ ...message, [e.target.name]: 'Your pass needs to have more than 6 characters' })
                    : setMessage({ ...message, [e.target.name]: '' });
            }
        }
    };
    const submitLogIn = () => {};
    return (
        <div className={cx('wrapper')}>
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

                    <div>
                        <div>Email:</div>
                        <div className={cx('div-form', 'border', message.nameMess && 'invalid')}>
                            <input
                                value={name}
                                name="nameMess"
                                onChange={handleOnChangeName}
                                onBlur={handleOnBlur}
                                className={cx('input')}
                                type="text"
                                placeholder="Enter your email"
                            />
                        </div>
                        <p className={cx('form-message')}>{message.nameMess}</p>
                    </div>

                    <div>
                        <div className={cx('div-label')}>Password</div>
                        <div className={cx('div-form', 'border', message.passMess && 'invalid')}>
                            <input
                                name="passMess"
                                value={pass}
                                onChange={handleOnChangePass}
                                onBlur={handleOnBlur}
                                className={cx('input')}
                                type="password"
                                placeholder="Enter your password"
                            />
                        </div>
                        <p className={cx('form-message')}>{message.passMess}</p>
                    </div>
                    <div>
                        <div className={cx('errMessage')}>{errMessage}</div>
                        <Link to="#">
                            <div className={cx('form-message', 'forgot')}>Forgot your password!</div>
                        </Link>
                    </div>

                    <Button type="button" primary large className={cx('submit-btn')} onClick={submitLogIn}>
                        Đăng nhập
                    </Button>
                </div>
            </div>
            <div className={cx('right')}></div>
        </div>
    );
}

export default AdminLogin;
