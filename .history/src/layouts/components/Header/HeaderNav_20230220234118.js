import { faEarthAsia, faSignOut, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { memo, useState } from 'react';
import { AiFillInstagram, AiOutlineMessage } from 'react-icons/ai';
import { BiHelpCircle } from 'react-icons/bi';
import { BsBell, BsFacebook } from 'react-icons/bs';

import { FormattedMessage } from 'react-intl';
import Image from '~/components/Image';
import ModalOverlay from '~/components/ModalOverlay';
import Menu from '~/components/Popper/Menu';
import styles from './HeaderNav.module.scss';
const cx = classNames.bind(styles);

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
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
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
        title: 'Đăng xuất',

        separate: true,
    },
];

function HeaderNav() {
    const [isModalLogin, setIsModalLogin] = useState(false);
    const handleMessage = () => {};
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
                    <spa className={cx('header-noti')}>1</spa>
                </li>
                {/* AiOutlineMessage */}
                <li className={cx('header__navbar-item', 'help')} onClick={handleMessage}>
                    <p className={cx('header__navbar-item-link')}>
                        <AiOutlineMessage className={cx('header__navbar-icon')} />
                        Tin nhắn
                    </p>
                    <spa className={cx('header-noti')}>3</spa>
                </li>
                <li className={cx('header__navbar-item', 'help')}>
                    <a href="/" className={cx('header__navbar-item-link')}>
                        <BiHelpCircle className={cx('header__navbar-icon')} />
                        Trợ giúp
                    </a>
                </li>
                {!JSON.parse(localStorage.getItem('IS_LOGIN')) ? (
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
                                src={
                                    JSON.parse(localStorage.getItem('USER_LOG_IN')) &&
                                    JSON.parse(localStorage.getItem('USER_LOG_IN'))?.image
                                }
                                className={cx('user-avatar')}
                            />
                        </Menu>
                        <span className={cx('user-name')}>
                            {JSON.parse(localStorage.getItem('USER_LOG_IN')) &&
                                'Hi, ' + JSON.parse(localStorage.getItem('USER_LOG_IN')).nickName}
                        </span>
                    </>
                )}
            </ul>
        </nav>
    );
}

export default memo(HeaderNav);
