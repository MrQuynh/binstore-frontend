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

import HeaderNav from './HeaderNav';
import HeaderCart from './HeaderCart';
import ModalBuy from '~/components/ModalEdit/ModalBuy';
import { memo, useState } from 'react';

const cx = classNames.bind(styles);

function Header() {
    const [isModalBuy, setIsModalBuy] = useState(false);

    return (
        <header className={cx('wrapper')}>
            {isModalBuy && <ModalBuy setIsModal={setIsModalBuy} />}

            <div className={cx('navigate')}>
                <div className={cx('nav-content')}>
                    <HeaderNav />
                </div>
            </div>
            <div className={cx('inner')}>
                <div className={cx('logo-cart')}>
                    <Link to="/" className={cx('logo-link')}>
                        <Image
                            className={cx('logo-image', 'image')}
                            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Donline%2Bshop%2Blogo&psig=AOvVaw12TTuwF_zbrcQcxVGW-3DX&ust=1668092139297000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCKDY_M-tofsCFQAAAAAdAAAAABAN"
                            alt="TikTok"
                        />
                    </Link>
                    <div className={cx('actions', 'cart-responsive')} onClick={() => setIsModalBuy(true)}>
                        {JSON.parse(localStorage.getItem('CART_LISTS')) &&
                        JSON.parse(localStorage.getItem('CART_LISTS')).length > 0 ? (
                            <p className={cx('actions-noti')}>
                                {JSON.parse(localStorage.getItem('CART_LISTS')).length}
                            </p>
                        ) : (
                            ''
                        )}

                        <HeaderCart />
                    </div>
                </div>

                {/* search */}

                <div className={cx('search')}>
                    <Search />
                </div>

                <div className={cx('actions')} onClick={() => setIsModalBuy(true)}>
                    {JSON.parse(localStorage.getItem('CART_LISTS')) &&
                    JSON.parse(localStorage.getItem('CART_LISTS')).length > 0 ? (
                        <p className={cx('actions-noti')}>{JSON.parse(localStorage.getItem('CART_LISTS')).length}</p>
                    ) : (
                        ''
                    )}

                    <HeaderCart />
                </div>
            </div>
        </header>
    );
}

export default memo(Header);
