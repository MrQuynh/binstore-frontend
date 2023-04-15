import classNames from 'classnames/bind';
import styles from './News.module.scss';
import Footer from '../Home/Footer/Footer';
import { useEffect, useState } from 'react';
import NewsLeft from './NewsLeft';
import NewsRight from './NewsRight';
import { useStore } from '~/hooks';
import { Link } from 'react-router-dom';

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
function News() {
    const urlCurrent = window.location.pathname;
    const [state, dispatch] = useStore();
    const [navActive, setNavActive] = useState(state.setNewsRedux);
    const [title, setTitle] = useState('Tin mới');
    useEffect(() => {
        window.scrollTo(0, 0);
        newsList.map((item) => {
            if (item.link === `/${urlCurrent.split('/')[2]}`) {
                setNavActive(item.id);
                setTitle(item.title);
            }
        });
    }, [urlCurrent]);
    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('body')}>
                    <div className={cx('title')}>{title}</div>
                    <div className={cx('nav')}>
                        <div className={cx('nav-body')}>
                            {newsList.map((item, index) => (
                                <Link to={`/tin-tuc${item.link}`} key={index}>
                                    <div
                                        className={cx('nav-item', index === navActive && 'nav-item-active')}
                                        onClick={() => {
                                            setNavActive(item.id);
                                            setTitle(item.title);
                                        }}
                                    >
                                        {item.title}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className={cx('contain')}>
                        <NewsLeft />
                        {/* <div className={cx('left')}>
                        </div> */}
                        <NewsRight />
                        {/* <div className={cx('right')}>
                        </div> */}
                    </div>
                </div>
            </div>
            ;
            <Footer />
        </>
    );
}

export default News;
