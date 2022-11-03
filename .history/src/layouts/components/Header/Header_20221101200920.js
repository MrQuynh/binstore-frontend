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
import HeaderNav from './HeaderNav';
import HeaderCart from './HeaderCart';

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

function Header() {
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
            <div className={cx('navigate')}>
                <div className={cx('nav-content')}>
                    <HeaderNav />
                </div>
            </div>
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
                        <HeaderCart />
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

                    <Menu items={userMenu} onChange={handleMenuChange}>
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
