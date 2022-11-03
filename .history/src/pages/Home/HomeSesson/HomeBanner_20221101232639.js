import classNames from 'classnames/bind';
import styles from './HomeBanner.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
const cx = classNames.bind(styles);

function HomeBanner() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('box-left')}>
                <div className={cx('swiper-top')}>
                    <Swiper
                        className={cx('swiper-top-body')}
                        spaceBetween={50}
                        slidesPerView={3}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide className={cx('swiper-top-item')}>Slide 1</SwiperSlide>
                        <SwiperSlide className={cx('swiper-top-item')}>Slide 2</SwiperSlide>
                        <SwiperSlide className={cx('swiper-top-item')}>Slide 3</SwiperSlide>
                    </Swiper>
                </div>
                <div></div>
            </div>
            <div className={cx('box-right')}>right</div>
        </div>
    );
}

export default HomeBanner;
