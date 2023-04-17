import classNames from 'classnames/bind';
import styles from './Home.module.scss';

import { BiSkipNextCircle } from 'react-icons/bi';
import { memo, useEffect, useRef, useState } from 'react';
import HomeBanner from './HomeSesson/HomeBanner';
import HomeCategory from './HomeSesson/HomeCategory';
import HomeGoldTime from './HomeSesson/HomeGoldTime';
import HomeBannerSale from './HomeSesson/HomeBannerSale';
import Suggestion from './HomeSesson/Suggestion';
import HomeDiscount from './HomeSesson/HomeDiscount';
import HomeService from './HomeSesson/HomeService';
import HomeBXH from './HomeSesson/HomeBXH';
import Footer from './Footer/Footer';
import BrandSaleUp from './HomeSesson/BrandSaleUp';
import { getAllProductsService } from '~/services/adminService';
import { useStore } from '~/hooks';
import { actions } from '~/store';

const cx = classNames.bind(styles);

function Home() {
    const [active, setActive] = useState(false);
    const bodyRef = useRef();

    window.onscroll = () => {
        if (window.scrollY > 150) {
            setActive(true);
        } else setActive(false);
    };

    const backToTop = () => {
        bodyRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    };
    // get data
    const [listProducts, setListProducts] = useState('');
    useEffect(() => {
        getAllProductsService(1).then((data) => {
            if (data && data.errCode === 0) {
                setListProducts(data.data);
            }
        });
    }, []);

    return (
        <>
            <div className={cx('body')} id="content" ref={bodyRef}>
                <div className={cx('container')}>
                    <HomeBanner />
                    <HomeCategory />
                    <HomeGoldTime />
                    <BrandSaleUp />
                    <HomeBannerSale />
                    <Suggestion data={listProducts} />
                    <HomeDiscount />
                    <HomeService />
                    <HomeBXH />
                </div>
                <Footer />
                <BiSkipNextCircle className={cx('back-to-top', active && 'active')} onClick={backToTop} />
            </div>
        </>
    );
}

export default memo(Home);
