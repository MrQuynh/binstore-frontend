import classNames from 'classnames/bind';
import { AiFillInstagram } from 'react-icons/ai';
import { BiHelpCircle } from 'react-icons/bi';
import { BsBell, BsFacebook, BsGlobe } from 'react-icons/bs';
import { GrLanguage } from 'react-icons/gr';
import Image from '~/components/Image';
import styles from './HeaderNav.module.scss';
const cx = classNames.bind(styles);
const imageLink =
    'https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/312921958_8515616341811668_4891859027292602917_n.png?_nc_cat=1&ccb=1-7&_nc_sid=730e14&_nc_ohc=wxWU3WqDgwYAX-WgZ1i&_nc_oc=AQmsjtWh5OXu2TQHVixFzuFBKNcz1qGB8T3rTR8BuqPJ5GqxV4InjzzPmA_GT7vOdug&tn=4FbcTDk_s_uM-n-m&_nc_ht=scontent.fdad3-1.fna&oh=00_AfACRTXftkp84Xe6Hn56ZTRzOTRo1J9ay2l9KgSIOg_cvg&oe=636587E3';
const imageLinkqr =
    'https://vi.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/basic_market/generator/dist/generator/assets/images/websiteQRCode_noFrame.png';
const appstor = 'https://cf.shopee.vn/file/ad01628e90ddf248076685f73497c163';
const google = 'https://cf.shopee.vn/file/ae7dced05f7243d0f3171f786e123def';
function HeaderNav() {
    return (
        <nav className={cx('header__navbar')}>
            <ul className={cx('header__navbar-list')}>
                <li
                    className={cx(
                        'header__navbar-item',
                        'header__navbar-item--has-qr',
                        'header__navbar-item--separate',
                    )}
                >
                    Tải ứng dụng
                    {/* <!-- header qr code --> */}
                    <div className={cx('header__qr')}>
                        <img src={imageLinkqr} alt="QR Code" className={cx('header__qr-img')} />
                        <div className={cx('header__qr-apps')}>
                            <a href="/" className={cx('header__qr-link')}>
                                <img src={appstor} alt="Google Play" className={cx('header__qr-download-img')} />
                            </a>
                            <a href="/" className={cx('header__qr-link')}>
                                <img src={google} alt="App Store" className={cx('header__qr-download-img')} />
                            </a>
                        </div>
                    </div>
                </li>
                <div className={cx('separate')}></div>
                <li className={cx('header__navbar-item')}>
                    <span className={cx('header__navbar-title--no-pointer')}>Kết nối</span>
                    <a href="https://www.facebook.com/quynh232000/" className={cx('header__navbar-icon-link')}>
                        <BsFacebook className={cx('header__navbar-icon', 'facebook-icon')} />
                    </a>
                    <a href="/" className={cx('header__navbar-icon-link')}>
                        <AiFillInstagram className={cx('header__navbar-icon')} />
                    </a>
                </li>
            </ul>
            <ul className={cx('header__navbar-list')}>
                <li className={cx('header__navbar-item', 'header__navbar-item--has-notify')}>
                    <a href="/" className={cx('header__navbar-item-link')}>
                        <BsBell />
                        Thông báo
                    </a>
                </li>
                <li className={cx('header__navbar-item')}>
                    <a href="/" className={cx('header__navbar-item-link')}>
                        <BiHelpCircle className={cx('header__navbar-icon')} />
                        Trợ giúp
                    </a>
                </li>
                <li className={cx('header__navbar-item')}>
                    <a href="/" className={cx('header__navbar-item-link')}>
                        <BsGlobe className={cx('header__navbar-icon', 'icon-language')} />
                        Tiếng việt
                    </a>
                </li>
                <li className={cx('header__navbar-item', 'header__navbar-item--strong ')}>Đăng kí</li>
                <div className={cx('separate')}></div>
                <li className={cx('header__navbar-item', 'header__navbar-item--strong')}>Đăng nhập</li>
            </ul>
        </nav>
    );
}

export default HeaderNav;
