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
import { BiMoney, BiNotepad } from 'react-icons/bi';
import { AiFillAlipayCircle } from 'react-icons/ai';
import { useStore } from '~/hooks';
import { actions } from '~/store';

const cx = classNames.bind(styles);
const newsList = [
    {
        id: 0,
        title: 'Tin mới',
        link: '/news',
    },
    {
        id: 1,
        title: 'Khuyến mãi',
        link: '/tin-khuyen-mai',
    },
    {
        id: 2,
        title: 'Điện máy - Gia dụng',
        link: '/dien-may',
    },
    {
        id: 3,
        title: 'Thủ thuật',
        link: '/thu-thuat',
    },
    {
        id: 4,
        title: 'For Games',
        link: '/for-games',
    },
    {
        id: 5,
        title: 'Video hot',
        link: '/video-hot',
    },
    {
        id: 6,
        title: 'Đánh giá - Tư vấn',
        link: '/danh-gia',
    },
    {
        id: 7,
        title: 'App & Game',
        link: '/giai-tri',
    },
    {
        id: 8,
        title: 'Sự kiện',
        link: '/su-kien',
    },
];
function Header() {
    const [isModalBuy, setIsModalBuy] = useState(false);
    const [state, dispatch] = useStore();
    const handleActiveNews = (item) => {
        dispatch(actions.setNewsRedux(item.id));
    };
    const handleLogo = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
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
                    <Link to="/" className={cx('logo-link')} onClick={handleLogo}>
                        <Image
                            className={cx('logo-image', 'image')}
                            src="https://www.svgrepo.com/show/217771/shopping-logo.svg"
                            alt="TikTok"
                        />
                    </Link>
                    <div className={cx('actions', 'cart-responsive')} onClick={() => setIsModalBuy(true)}>
                        {JSON.parse(localStorage.getItem('CART_LISTS')) &&
                        JSON.parse(localStorage.getItem('CART_LISTS'))?.length > 0 ? (
                            <p className={cx('actions-noti')}>
                                {JSON.parse(localStorage.getItem('CART_LISTS'))?.length}
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

                <div onClick={() => dispatch(actions.setNewsRedux(0))}>
                    <div className={cx('header_news')}>
                        <Link to="/tin-tuc/news">
                            <div className={cx('header_news-icon-body')}>
                                <BiNotepad className={cx('header_news-icon')} />
                            </div>
                        </Link>
                        <div className={cx('header_news-wrapper')}>
                            <div className={cx('header_news-title')}>Thông tin hay</div>
                            <div className={cx('header_news-body')}>
                                {newsList.map((item, index) => (
                                    <Link
                                        to={`/tin-tuc${item.link}`}
                                        key={index}
                                        onClick={() => handleActiveNews(item)}
                                    >
                                        <div className={cx('header_news-item')}>{item.title}</div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {/* MdPayment */}
                <Link to="/dich-vu">
                    <div className={cx('header_news')}>
                        <div className={cx('header_news-icon-body')}>
                            <BiMoney className={cx('header_news-icon')} />
                        </div>

                        <div className={cx('header_news-wrapper')}>
                            <div className={cx('header_news-title')}>Thanh toán & Tiện ích</div>
                        </div>
                    </div>
                </Link>

                <div className={cx('actions')} onClick={() => setIsModalBuy(true)}>
                    {JSON.parse(localStorage.getItem('CART_LISTS')) &&
                    JSON.parse(localStorage.getItem('CART_LISTS'))?.length > 0 ? (
                        <p className={cx('actions-noti')}>{JSON.parse(localStorage.getItem('CART_LISTS'))?.length}</p>
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
