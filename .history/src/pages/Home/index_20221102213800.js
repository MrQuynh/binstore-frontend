import classNames from 'classnames/bind';
import styles from './Home.module.scss';

import { BiSkipNextCircle } from 'react-icons/bi';
import { memo, useRef, useState } from 'react';
import HomeBanner from './HomeSesson/HomeBanner';
import HomeCategory from './HomeSesson/HomeCategory';
import HomeGoldTime from './HomeSesson/HomeGoldTime';
import HomeBannerSale from './HomeSesson/HomeBannerSale';

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

    return (
        <div className={cx('body')} id="content" ref={bodyRef}>
            <div className={cx('container')}>
                <HomeBanner />
                <HomeCategory />
                <HomeGoldTime />
                <HomeBannerSale />
            </div>
            {/* <BiSkipNextCircle className={cx('back-to-top', active && 'active')} onClick={backToTop} /> */}
        </div>
    );
}

export default memo(Home);
