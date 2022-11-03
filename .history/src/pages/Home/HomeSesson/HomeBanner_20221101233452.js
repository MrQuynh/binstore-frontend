import classNames from 'classnames/bind';
import styles from './HomeBanner.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from '~/components/Image';
const cx = classNames.bind(styles);
const image =
    'https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/1/638029198311559659_F-H1_800x300.png';
function HomeBanner() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('box-left')}>
                <div className={cx('swiper-top')}>
                    <Swiper
                        className={cx('swiper-top-body')}
                        spaceBetween={50}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide className={cx('swiper-top-item')}>
                            <Image src={image} />
                        </SwiperSlide>
                        <SwiperSlide className={cx('swiper-top-item')}>
                            <Image src={image} />
                        </SwiperSlide>
                        <SwiperSlide className={cx('swiper-top-item')}>
                            <Image src={image} />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={4}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide className={cx('text-content')}>
                            <div className={cx('text')}>Iphone 14 Giảm</div>
                            <div className={cx('text')}>đến 20%</div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className={cx('box-right')}>right</div>
        </div>
    );
}

export default HomeBanner;
