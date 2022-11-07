import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faGear,
    faKeyboard,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { BiHelpCircle } from 'react-icons/bi';
import { BsBell, BsFacebook, BsGlobe } from 'react-icons/bs';
import { GrLanguage } from 'react-icons/gr';
import { FormattedMessage } from 'react-intl';
import Image from '~/components/Image';
import ModalOverlay from '~/components/ModalOverlay';
import Menu from '~/components/Popper/Menu';
import styles from './HeaderNav.module.scss';
const cx = classNames.bind(styles);
const imageLink =
    'https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/312921958_8515616341811668_4891859027292602917_n.png?_nc_cat=1&ccb=1-7&_nc_sid=730e14&_nc_ohc=wxWU3WqDgwYAX-WgZ1i&_nc_oc=AQmsjtWh5OXu2TQHVixFzuFBKNcz1qGB8T3rTR8BuqPJ5GqxV4InjzzPmA_GT7vOdug&tn=4FbcTDk_s_uM-n-m&_nc_ht=scontent.fdad3-1.fna&oh=00_AfACRTXftkp84Xe6Hn56ZTRzOTRo1J9ay2l9KgSIOg_cvg&oe=636587E3';
const imageLinkqr =
    'https://vi.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/basic_market/generator/dist/generator/assets/images/websiteQRCode_noFrame.png';
const appstor = 'https://cf.shopee.vn/file/ad01628e90ddf248076685f73497c163';
const google = 'https://cf.shopee.vn/file/ae7dced05f7243d0f3171f786e123def';
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: <FormattedMessage id="search.language" />,
        children: {
            title: 'Ngôn ngữ',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                    // to: '/',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                    // to: '/',
                },
            ],
        },
    },
];
const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'Tài khoản của tôi',
        to: '/user/account/profile',
    },

    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log out',
        // to: '/',
        separate: true,
    },
];

// const isLogin = checkIsLogin;
function HeaderNav() {
    const [isModalLogin, setIsModalLogin] = useState(false);
    const checkIsLogin = JSON.parse(localStorage.getItem('IS_LOGIN'));
    const [isLogin, setIsLogin] = useState(false);
    console.log(checkIsLogin);
    if (checkIsLogin) {
        setIsLogin(true);
    }
    return (
        <nav className={cx('header__navbar')}>
            {isModalLogin && <ModalOverlay setLogin={setIsModalLogin} />}
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
                        <BsBell className={cx('header__navbar-icon')} />
                        Thông báo
                    </a>
                </li>
                <li className={cx('header__navbar-item')}>
                    <a href="/" className={cx('header__navbar-item-link')}>
                        <BiHelpCircle className={cx('header__navbar-icon')} />
                        Trợ giúp
                    </a>
                </li>
                {!isLogin ? (
                    <li
                        className={cx('header__navbar-item', 'header__navbar-item--strong ')}
                        onClick={() => setIsModalLogin(true)}
                    >
                        Đăng kí
                    </li>
                ) : (
                    <>
                        <Menu items={userMenu}>
                            <Image
                                src="https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-6/279841216_1091212664941555_4727043539452060717_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=tQKXwgMdAz8AX_WQ2SW&tn=4FbcTDk_s_uM-n-m&_nc_ht=scontent.fdad3-4.fna&oh=00_AfDkLDaslCFeuwtCwtvB0dIUu5M9xMbnXPZoFk19UJ9Elg&oe=6365BA09"
                                className={cx('user-avatar')}
                            />
                        </Menu>
                        <span className={cx('user-name')}>Mr.Quynh</span>
                    </>
                )}
            </ul>
        </nav>
    );
}

export default HeaderNav;
