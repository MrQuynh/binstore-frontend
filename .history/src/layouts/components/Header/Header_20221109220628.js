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
                            src="https://scontent.xx.fbcdn.net/v/t1.15752-9/312494556_1162450954707245_848274316746732500_n.jpg?stp=dst-jpg_p206x206&_nc_cat=100&ccb=1-7&_nc_sid=aee45a&_nc_ohc=luv22BP2z0MAX8odsfy&_nc_oc=AQlhaAuHFYXF4RCJMlTJfdinry6S1POgFH2UucGaOn4OKq762znlYSRTz7HfxnCz0FoVteMklTevSqmiMvrMghYp&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRwk0u6dLp6XArUZpnwe4kpVRWWxIZI0GOePUJ-dkgi0g&oe=63933F05"
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
