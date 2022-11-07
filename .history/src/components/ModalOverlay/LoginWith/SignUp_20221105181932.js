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
        nameMess: 'Please enter your name',
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
                {/* <div>
                    <div className={cx('div-form', 'border', message.nicknameMess && 'invalid')}>
                        <input
                            name="nicknameMess"
                            value={nickname}
                            onChange={handleOnChangeNickname}
                            onBlur={handleOnBlur}
                            className={cx('input')}
                            type="text"
                            placeholder="Enter your Nickname"
                        />
                    </div>
                    <p className={cx('form-message')}>{message.nicknameMess}</p>
                </div> */}
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
                {/* <div className={cx('div-label')}>When's your birthday?</div>
                <div className={cx('div-form')}>
                    <div className={cx('box')} onClick={handleOnMonth}>
                        <div className={cx('box-text')}>{thang || 'Month'}</div>
                        <AiFillCaretDown className={cx('down-icon')} />
                        {chooseThang && (
                            <div className={cx('tippy-box', 'box-active')}>
                                {months.map((month, index) => (
                                    <p key={index} className={cx('tippy-month')} onClick={() => setThang(month)}>
                                        {month}
                                    </p>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className={cx('box')} onClick={handleOnDate}>
                        <div>{ngay || 'Day'}</div>
                        <AiFillCaretDown className={cx('down-icon')} />
                        {chooseNgay && (
                            <div className={cx('tippy-box', 'box-active')}>
                                {days.map((month, index) => (
                                    <p key={index} className={cx('tippy-month')} onClick={() => setNgay(month)}>
                                        {month}
                                    </p>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className={cx('box', 'year')} onClick={handleOnYear}>
                        <div>{nam || 'Nam'}</div>
                        <AiFillCaretDown className={cx('down-icon')} />
                        {chooseNam && (
                            <div className={cx('tippy-box', 'box-active')}>
                                {year.map((month, index) => (
                                    <p key={index} className={cx('tippy-month')} onClick={() => setNam(month)}>
                                        {month}
                                    </p>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <div className={cx('div-label', 'birthday')}>Your birthday won't be shown publicly.</div>
                <div className={cx('div-label')}>
                    Phone{' '}
                    <Link to="#" className={cx('div-label', 'email')}>
                        Sign up with email
                    </Link>
                </div>
                <div className={cx('div-form', 'border')}>
                    <div className={cx('box', 'phone')}>
                        <div className={cx('area')}>
                            <div>VN +84</div>
                            <AiFillCaretDown className={cx('down-icon')} />
                        </div>
                        <input className={cx('input')} type="text" placeholder="Phone number" />
                    </div>
                </div>

                <div className={cx('div-form', 'border')}>
                    <input className={cx('input')} type="text" placeholder="Enter 6-digit code" />
                    <button className={cx('code-btn')}>Send code</button>
                </div>*/}
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
