import styles from './SignUp.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
// import { AiFillCaretDown } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import * as userService from '~/services/userService';

import { FormattedMessage } from 'react-intl';

const cx = classNames.bind(styles);

const SignUp = () => {
    const msg = {
        nameMess: 'Please enter your email',
        // nicknameMess: 'Please enter your nickname',
        passMess: 'Enter a new password',
        confirmMess: 'Confirm your password',
    };

    const [name, setName] = useState('');
    // const [nickname, setNickname] = useState('');
    const [pass, setPass] = useState('');
    const [confirm, setConfirm] = useState('');

    const [message, setMessage] = useState({ nameMess: '', nicknameMess: '', passMess: '', confirmMess: '' });

    const handleOnChangeName = (e) => {
        setName(e.target.value);
        setMessage({ ...message, [e.target.name]: '' });
    };

    const handleOnChangePass = (e) => {
        setPass(e.target.value);
        setMessage({ ...message, [e.target.name]: '' });
    };
    const handleOnChangeConfirm = (e) => {
        setConfirm(e.target.value);
        setMessage({ ...message, [e.target.name]: '' });
    };
    const handleOnBlur = (e) => {
        //
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
            if (e.target.name === 'confirmMess') {
                e.target.value === pass
                    ? setMessage({ ...message, [e.target.name]: '' })
                    : setMessage({ ...message, [e.target.name]: 'Your password is not correct!' });
            }
        }
    };

    const [errMessage, setErrMessage] = useState('');

    const dataSend = { type: 'email', email: name, password: pass };
    const onSubmit = () => {
        console.log(name, pass);
        userService.postRegister(dataSend).then((data) => {
            if (!data?.data) {
                userService.postLogin(dataSend).then((bigData) => {
                    if (!bigData?.data?.data) {
                        localStorage.setItem('USER_LOG_IN', JSON.stringify(bigData.data));
                        localStorage.setItem('TOKEN', JSON.stringify(bigData.meta.token));
                        window.location.reload();
                    } else {
                        setErrMessage('Your email or password is not correct. Plz try again!');
                    }
                });
            } else {
                setErrMessage('Your email is exited already. Please try again!');
            }
        });
    };
    //

    return (
        <div className={cx('signup-body')}>
            <form className={cx('form')}>
                <div className={cx('div-label')}>
                    <FormattedMessage id="login.create" />
                </div>
                <div>
                    {/* , 'invalid' */}
                    <div className={cx('div-form', 'border', message.nameMess && 'invalid')}>
                        <input
                            value={name}
                            name="nameMess"
                            min="6"
                            onChange={handleOnChangeName}
                            onBlur={handleOnBlur}
                            className={cx('input')}
                            type="text"
                            placeholder="Enter your Email"
                        />
                    </div>
                    <p className={cx('form-message')}>{message.nameMess}</p>
                </div>

                <div>
                    <div className={cx('div-form', 'border', message.passMess && 'invalid')}>
                        <input
                            name="passMess"
                            value={pass}
                            onChange={handleOnChangePass}
                            onBlur={handleOnBlur}
                            className={cx('input')}
                            type="password"
                            placeholder="Enter new password"
                        />
                    </div>
                    <p className={cx('form-message')}>{message.passMess}</p>
                </div>
                <div>
                    <div className={cx('div-form', 'border', message.confirmMess && 'invalid')}>
                        <input
                            name="confirmMess"
                            value={confirm}
                            onChange={handleOnChangeConfirm}
                            onBlur={handleOnBlur}
                            className={cx('input')}
                            type="password"
                            placeholder="Password confirm"
                        />
                    </div>
                    <p className={cx('form-message')}>{message.confirmMess}</p>
                </div>

                <div className={cx('errMessage')}>{errMessage}</div>
                <button type="button" className={cx('submit-btn')} onClick={onSubmit}>
                    <FormattedMessage id="login.signUp" />
                </button>
            </form>

            <div className={cx('signup-footer')}>
                By continuing, you agree to TikTok
                <span>
                    <Link to="#">Terms of Service</Link>
                </span>
                and confirm that you have read TikTok
                <span>
                    <Link to="#">Privacy Policy</Link>
                </span>
                .
            </div>
        </div>
    );
};

export default SignUp;
