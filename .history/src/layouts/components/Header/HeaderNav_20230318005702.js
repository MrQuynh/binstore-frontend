import { faEarthAsia, faSignOut, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { memo, useState } from 'react';
import { AiFillInstagram, AiOutlineMessage } from 'react-icons/ai';
import { BiHelpCircle } from 'react-icons/bi';
import { BsBell, BsFacebook } from 'react-icons/bs';
import { GrUserAdmin } from 'react-icons/gr';

import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import ModalOverlay from '~/components/ModalOverlay';
import Menu from '~/components/Popper/Menu';
import { useStore } from '~/hooks';
import { actions } from '~/store';
import styles from './HeaderNav.module.scss';
const cx = classNames.bind(styles);

const imageLinkqr =
    'https://vi.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/basic_market/generator/dist/generator/assets/images/websiteQRCode_noFrame.png';
const appstor = 'https://cf.shopee.vn/file/ad01628e90ddf248076685f73497c163';
const google = 'https://cf.shopee.vn/file/ae7dced05f7243d0f3171f786e123def';
const MENU_ITEMS = [
    {
        id: 2,
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: <FormattedMessage id="home.language" />,
        children: {
            title: 'Ngôn ngữ',
            data: [
                {
                    id: 21,
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    id: 22,
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
        id: 0,
        icon: <FontAwesomeIcon icon={faUser} />,
        title: <FormattedMessage id="home.myAccount" />,
        to: '/user/account/profile',
    },

    ...MENU_ITEMS,
    {
        id: 3,
        icon: <GrUserAdmin icon={faUser} />,
        title: <FormattedMessage id="home.manageAdmin" />,
        to: '/admin',
    },
    {
        id: 4,
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: <FormattedMessage id="home.logout" />,

        separate: true,
    },
];

function HeaderNav() {
    const [isModalLogin, setIsModalLogin] = useState(false);
    const [state, dispatch] = useStore();
    const handleMessage = () => {
        dispatch(actions.setMessageRedux(true));
        dispatch(actions.countMessageRedux(0));
    };
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                break;
            default:
        }
    };
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
                    <FormattedMessage id="home.download" />
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
                    <span className={cx('header__navbar-title--no-pointer')}>
                        <FormattedMessage id="home.follow" />
                    </span>
                    <a href="https://www.facebook.com/quynh232000/" className={cx('header__navbar-icon-link')}>
                        <BsFacebook className={cx('header__navbar-icon', 'facebook-icon')} />
                    </a>
                    <a href="/" className={cx('header__navbar-icon-link')}>
                        <AiFillInstagram className={cx('header__navbar-icon')} />
                    </a>
                </li>
            </ul>
            <ul className={cx('header__navbar-list')}>
                {JSON.parse(localStorage.getItem('IS_LOGIN')) === true && (
                    <li className={cx('header__navbar-item', 'header__navbar-item--has-notify')}>
                        <Link to="/user/account/profile">
                            <p
                                className={cx('header__navbar-item-link')}
                                onClick={() => dispatch(actions.activeUserRedux(1))}
                            >
                                <BsBell className={cx('header__navbar-icon')} />
                                <FormattedMessage id="home.notification" />
                            </p>
                        </Link>
                        <span className={cx('header-noti')}>1</span>
                    </li>
                )}
                {/* AiOutlineMessage */}
                {JSON.parse(localStorage.getItem('IS_LOGIN')) === true && (
                    <li className={cx('header__navbar-item', 'help')} onClick={handleMessage}>
                        <p className={cx('header__navbar-item-link')}>
                            <AiOutlineMessage className={cx('header__navbar-icon')} />
                            <FormattedMessage id="home.message" />
                        </p>
                        {state.countMessageRedux == 0 || state.setMessage === true ? (
                            ''
                        ) : (
                            <span className={cx('header-noti')}>{state.countMessageRedux}</span>
                        )}
                    </li>
                )}
                <li className={cx('header__navbar-item', 'help')}>
                    <a href="/" className={cx('header__navbar-item-link')}>
                        <BiHelpCircle className={cx('header__navbar-icon')} />
                        <FormattedMessage id="home.help" />
                    </a>
                </li>
                {!JSON.parse(localStorage.getItem('IS_LOGIN')) ? (
                    <li
                        className={cx('header__navbar-item', 'header__navbar-item--strong ')}
                        onClick={() => setIsModalLogin(true)}
                    >
                        <FormattedMessage id="home.signup" />
                    </li>
                ) : (
                    <>
                        <Menu items={userMenu} onChange={handleMenuChange}>
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
