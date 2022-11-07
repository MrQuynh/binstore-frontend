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
import { Link } from 'react-router-dom';

import 'tippy.js/dist/tippy.css';

import images from '~/assets/images';

import Image from '~/components/Image';

import styles from './Header.module.scss';
import Search from '../Search';

import { FormattedMessage } from 'react-intl';
import HeaderNav from './HeaderNav';
import HeaderCart from './HeaderCart';
import ModalBuy from '~/components/ModalEdit/ModalBuy';
import { useEffect, useState } from 'react';
import ModalOverlay from '~/components/ModalOverlay';
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(styles);

function Header() {
    const currentUrl = window.location.href.split('/')[3];
    useEffect(() => {
        let cartList1 = JSON.parse(localStorage.getItem('CART_LISTS')).reverse();

        setCartList(cartList1);
    }, [currentUrl]);
    const [cartList, setCartList] = useState('');
    const [isModalBuy, setIsModalBuy] = useState(false);
    const [isModalLogin, setIsModalLogin] = useState(false);

    return (
        <header className={cx('wrapper')}>
            {isModalBuy && <ModalBuy setIsModal={setIsModalBuy} />}
            {isModalLogin && <ModalOverlay />}
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

                <div className={cx('actions')} onClick={() => setIsModalBuy(true)}>
                    {cartList && cartList.length > 0 ? <p className={cx('actions-noti')}>{cartList.length}</p> : ''}

                    <HeaderCart />
                    {/* <Tippy delay={[0, 50]} content={<FormattedMessage id="search.upLoad" />} placement="bottom">
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
                        </Tippy> */}
                </div>
            </div>
        </header>
    );
}

export default Header;
