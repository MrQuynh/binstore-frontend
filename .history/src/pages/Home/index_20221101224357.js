import classNames from 'classnames/bind';
import styles from './Home.module.scss';

import { BiSkipNextCircle } from 'react-icons/bi';
import { memo, useRef, useState } from 'react';
import HomeBanner from './HomeSesson/HomeBanner';

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
            <div>
                <HomeBanner />
            </div>
            {/* <BiSkipNextCircle className={cx('back-to-top', active && 'active')} onClick={backToTop} /> */}
        </div>
    );
}

export default memo(Home);
