import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import images from '~/assets/images';
import Button from '~/components/Button';
import { InboxIcon, MessageIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Menu from '~/components/Popper/Menu';
import styles from './Header.module.scss';
import Search from '../Search';
import { BsCloudUpload, BsFillMoonStarsFill, BsSun } from 'react-icons/bs';
import ModalOverlay from '~/components/ModalOverlay';
import { useEffect, useMemo, useState } from 'react';
import { useStore } from '~/hooks';
import { FormattedMessage } from 'react-intl';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: <FormattedMessage id="search.language" />,
        children: {
            title: 'Language',
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
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: <FormattedMessage id="search.feedback" />,
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: <FormattedMessage id="search.keyboard" />,
    },
];
const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/quynhhh',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: <FormattedMessage id="search.getCoins" />,
        to: '/coin',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: <FormattedMessage id="search.settings" />,
        to: '/settings',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log out',
        // to: '/',
        separate: true,
    },
];

const isLogin = localStorage.getItem('USER_LOG_IN');
const userLogIn = null;
const status = false;
const item = isLogin ? userMenu : MENU_ITEMS;
const rootStyles = document.documentElement.style;
const linkLogo = 'https://sf-tb-sg.ibytedtos.com/obj/ttfe-malisg/tiktok-logo.png';
const linkImage1 =
    'https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web/tiktok/web/node/_next/static/images/logo-7328701c910ebbccb5670085d243fc12.svg';
const linkImage2 =
    'https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web/tiktok/web/node/_next/static/images/logotext-9b4d14640f93065ec36dab71c806e135.svg';

function Header() {
    const [currentUser, setCurrentUser] = useState({ userLogIn, status });
    const [login, setLogin] = useState(false);

    const [state] = useStore();
    useEffect(() => {
        if (state.userLogIn?.userLogIn !== null) {
            setCurrentUser(state.userLogIn);
        }
    }, [state]);

    // handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                break;
            default:
        }
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to="/" className={cx('logo-link')}>
                    <Image className={cx('logo-image', 'image')} src={images.logo1} alt="TikTok" />
                </Link>

                {/* search */}

                <div className={cx('search')}>
                    <Search />
                </div>

                <div className={cx('actions')}>
                    <>
                        <Tippy delay={[0, 50]} content={<FormattedMessage id="search.upLoad" />} placement="bottom">
                            <Link to="/upload">
                                <button className={cx('action-btn')}>
                                    <BsCloudUpload />
                                </button>
                            </Link>
                        </Tippy>
                        <Tippy delay={[0, 50]} content={<FormattedMessage id="search.message" />} placement="bottom">
                            <Link to="/messages">
                                <button className={cx('action-btn')}>
                                    <MessageIcon className={cx('message-icon')} />
                                </button>
                            </Link>
                        </Tippy>
                        <Tippy delay={[0, 50]} content={<FormattedMessage id="search.box" />} placement="bottom">
                            <button className={cx('action-btn')}>
                                <InboxIcon />
                                <span className={cx('badge')}>10</span>
                            </button>
                        </Tippy>
                    </>

                    <Menu items={item} onChange={handleMenuChange}>
                        <Image
                            src="https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-6/279841216_1091212664941555_4727043539452060717_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=tQKXwgMdAz8AX_WQ2SW&tn=4FbcTDk_s_uM-n-m&_nc_ht=scontent.fdad3-4.fna&oh=00_AfDkLDaslCFeuwtCwtvB0dIUu5M9xMbnXPZoFk19UJ9Elg&oe=6365BA09"
                            className={cx('user-avatar')}
                        />
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
