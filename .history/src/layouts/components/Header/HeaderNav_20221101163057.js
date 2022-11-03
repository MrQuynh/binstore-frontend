import classNames from 'classnames/bind';
import Image from '~/components/Image';
import styles from './HeaderNav.module.scss';
const cx = classNames.bind(styles);
const imageLink =
    'https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/312921958_8515616341811668_4891859027292602917_n.png?_nc_cat=1&ccb=1-7&_nc_sid=730e14&_nc_ohc=wxWU3WqDgwYAX-WgZ1i&_nc_oc=AQmsjtWh5OXu2TQHVixFzuFBKNcz1qGB8T3rTR8BuqPJ5GqxV4InjzzPmA_GT7vOdug&tn=4FbcTDk_s_uM-n-m&_nc_ht=scontent.fdad3-1.fna&oh=00_AfACRTXftkp84Xe6Hn56ZTRzOTRo1J9ay2l9KgSIOg_cvg&oe=636587E3';
function HeaderNav() {
    return (
        <nav className={cx('header__navbar')}>
            <ul className={cx('header__navbar-list')}>
                <li
                    className={cx(
                        'header__navbar-item',
                        ' header__navbar-item--has-qr',
                        ' header__navbar-item--separate',
                    )}
                >
                    Tải ứng dụng
                    {/* <!-- header qr code --> */}
                    <div className={cx('header__qr')}>
                        <img src={imageLink} alt="QR Code" className={cx('header__qr-img')} />
                        <div className={cx('header__qr-apps')}>
                            <a href="/" className={cx('header__qr-link')}>
                                <img src={imageLink} alt="Google Play" className={cx('header__qr-download-img')} />
                            </a>
                            <a href="/" className={cx('header__qr-link')}>
                                <img src={imageLink} alt="App Store" className={cx('header__qr-download-img')} />
                            </a>
                        </div>
                    </div>
                </li>
                <div className={cx('separate')}></div>
                <li className={cx('header__navbar-item')}>
                    <span className={cx('header__navbar-title--no-pointer')}>Kết nối</span>
                    <a href="https://www.facebook.com/quynh232000/" className={cx('header__navbar-icon-link')}>
                        <i className={cx('header__navbar-icon fa-brands fa-facebook')}></i>
                    </a>
                    <a href="/" className={cx('header__navbar-icon-link')}>
                        <i className={cx('header__navbar-icon fa-brands fa-instagram')}></i>
                    </a>
                </li>
            </ul>
            <ul className={cx('header__navbar-list')}>
                <li className={cx('header__navbar-item header__navbar-item--has-notify')}>
                    <a href="/" className={cx('header__navbar-item-link')}>
                        <i className={cx('header__navbar-icon far fa-bell')}></i> Thông báo
                    </a>
                    {/* <!-- header notification --> */}
                    <div className={cx('header__notify')}>
                        <header className={cx('header__notify-header')}>
                            <h3>Thông báo mới nhận</h3>
                        </header>
                        <ul className={cx('header__notify-list')}>
                            <li className={cx('header__notify-item header__notify-item--viewed')}>
                                <a href="/" className={cx('header__notify-link')}>
                                    <img
                                        src="https://scontent.fsgn5-11.fna.fbcdn.net/v/t1.6435-9/150456307_802303120498017_210691129257139545_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=i7HMte2wtpwAX94pPUI&_nc_ht=scontent.fsgn5-11.fna&oh=00_AT8n5ba8I5BkEvU26pKR58nXfPF0PMG8LyXLg9s376us_A&oe=626DB87C"
                                        alt=""
                                        className={cx('header__notify-img')}
                                    />
                                    <div className={cx('header__notify-info')}>
                                        <span className={cx('header__notify-name')}>Mỹ phẩm Ohui chính hãng</span>
                                        <span className={cx('header__notify-discription')}>
                                            Mô tả mỹ phẩm ohui chính hãng
                                        </span>
                                    </div>
                                </a>
                            </li>
                            <li className={cx('header__notify-item')}>
                                <a href="/" className={cx('header__notify-link')}>
                                    <Image
                                        src="https://scontent.fsgn5-11.fna.fbcdn.net/v/t1.6435-9/150456307_802303120498017_210691129257139545_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=i7HMte2wtpwAX94pPUI&_nc_ht=scontent.fsgn5-11.fna&oh=00_AT8n5ba8I5BkEvU26pKR58nXfPF0PMG8LyXLg9s376us_A&oe=626DB87C"
                                        alt=""
                                        className={cx('header__notify-img')}
                                    />
                                    <div className={cx('header__notify-info')}>
                                        <span className={cx('header__notify-name')}>Mỹ phẩm Ohui chính hãng</span>
                                        <span className={cx('header__notify-discription')}>
                                            Mô tả mỹ phẩm ohui chính hãng
                                        </span>
                                    </div>
                                </a>
                            </li>
                            <li className={cx('header__notify-item header__notify-item--viewed')}>
                                <a href="/" className={cx('header__notify-link')}>
                                    <img
                                        src="https://scontent.fsgn5-11.fna.fbcdn.net/v/t1.6435-9/150456307_802303120498017_210691129257139545_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=i7HMte2wtpwAX94pPUI&_nc_ht=scontent.fsgn5-11.fna&oh=00_AT8n5ba8I5BkEvU26pKR58nXfPF0PMG8LyXLg9s376us_A&oe=626DB87C"
                                        alt=""
                                        className={cx('header__notify-img')}
                                    />
                                    <div className={cx('header__notify-info')}>
                                        <span className={cx('header__notify-name')}>Mỹ phẩm Ohui chính hãng</span>
                                        <span className={cx('header__notify-discription')}>
                                            Mô tả mỹ phẩm ohui chính hãng
                                        </span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <footer className={cx('header__notify-footer')}>
                            <a href="/" className={cx('header__notify-footer-btn')}>
                                Xem tất cả
                            </a>
                        </footer>
                    </div>
                </li>
                <li className={cx('header__navbar-item')}>
                    <a href="/" className={cx('header__navbar-item-link')}>
                        <i className={cx('header__navbar-icon far fa-circle-question')}></i> Trợ giúp
                    </a>
                </li>
                {/* <!-- <li className={cx("header__navbar-item header__navbar-item--strong ")}>Đăng kí</li>
                        <div className={cx("separate")}></div>
                        <li className={cx("header__navbar-item header__navbar-item--strong")}>Đăng nhập</li> --> */}
                <li className={cx('header__navbar-item ', ' header__navbar-user')}>
                    <Image
                        src="https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/277175683_487071783151213_3569723600506585216_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=TZyELTPlvqQAX9mLhcj&_nc_ht=scontent.fdad3-5.fna&oh=00_AT-93sQJB0oKXd2-2Erp17HiIk-55VfY3dMbCm5EHQ5ryw&oe=624FB891"
                        alt=""
                        className={cx('header__navbar-user-img')}
                    />
                    <span className={cx('header__navbar-user-name')}>JuJo Bin</span>

                    <ul className={cx('header__navbar-user-menu')}>
                        <li className={cx('header__navbar-user-menu-item')}>
                            <a href="/">Tài khoản của tôi</a>
                        </li>
                        <li className={cx('header__navbar-user-menu-item')}>
                            <a href="/">Địa chỉ của tôi</a>
                        </li>
                        <li className={cx('header__navbar-user-menu-item')}>
                            <a href="/">Đơn mua</a>{' '}
                        </li>
                        <li className={cx('header__navbar-user-menu-item', 'header__navbar-user-menu-item-saparate')}>
                            <a href="/">Đăng xuất</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
}

export default HeaderNav;
