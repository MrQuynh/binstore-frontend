import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AdminLogin.module.scss';

const cx = classNames.bind(styles);

function AdminLogin() {
    return (
        <>
            <div>
                <title>Đăng nhập vào Satellite - Ứng dụng nhắn tin</title>
                <meta
                    name="description"
                    content="Ứng dụng nhắn tin với giao diện được thiết kế theo phong cách tối giản"
                />
                <link rel="canonical" href="/login" />
            </div>
            <div>
                <div className={cx('form_with-password')}>
                    <p className={cx('form_description')}>Hoặc đăng nhập với email và mật khẩu của bạn:</p>
                    <div className={cx('form_input-wrapper')}>
                        {/* Email */}
                        <input className={cx('form_input')} type="text" placeholder="Email của bạn" />

                        {/* Password */}
                        <div className={cx('form_password-input-wrap')}>
                            <input className={cx('form_input')} type="password" placeholder="Mật khẩu" />

                            <span className={cx('show-password-btn')}>
                                <FontAwesomeIcon />
                            </span>
                        </div>

                        <p className={cx('error-message')}></p>
                    </div>
                </div>

                {/* Controls */}
                <div className={cx('form_controls')}>
                    <button className={cx('form_controls-btn', ' btn', 'primary')}>Đăng nhập</button>
                    <button className={cx('form_controls-btn', ' btn', 'border')}>Đăng ký</button>
                </div>

                {/* Forgot password */}
                <div className={cx('forgot-password')}>
                    <button
                        onClick={() => {
                            navigate('/forgot-password');
                        }}
                        className={cx('forgot-password-btn')}
                    >
                        Quên mật khẩu?
                    </button>
                </div>

                {/* Terms */}
                <p className={cx('form_terms')}>
                    Việc bạn tiếp tục sử dụng trang web này đồng nghĩa bạn đồng ý với{' '}
                    <span className={cx('text-highlight')}>Điều khoản sử dụng</span> của chúng tôi.
                </p>
            </div>
        </>
    );
}

export default AdminLogin;
