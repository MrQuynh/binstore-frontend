import classNames from 'classnames/bind';
import styles from './HomeBanner.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper';
import 'swiper/css';
import Image from '~/components/Image';
import { useRef, useState } from 'react';
import images from '~/assets/images';
import { Pagination } from 'swiper';
const cx = classNames.bind(styles);
const image =
    'https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/1/638029198311559659_F-H1_800x300.png';

const listSlider = [
    { image: image, title: ['Iphone 14 Giảm', '50%'] },
    { image: image, title: ['Iphone 14 Giảm', '50%'] },
    { image: image, title: ['Iphone 14 Giảm', '50%'] },
    { image: image, title: ['Iphone 14 Giảm', '50%'] },
    { image: image, title: ['Iphone 14 Giảm', '50%'] },
];

function HomeBanner() {
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('box-left')}>
                <div className={cx('swiper-top')}>
                    <Swiper
                        className={cx('swiper-top-body')}
                        navigation={{
                            // Both prevEl & nextEl are null at render so this does not work
                            prevEl: navigationPrevRef.current,
                            nextEl: navigationNextRef.current,
                        }}
                        onSwiper={(swiper) => {
                            // Delay execution for the refs to be defined
                            setTimeout(() => {
                                // Override prevEl & nextEl now that refs are defined
                                swiper.params.navigation.prevEl = navigationPrevRef.current;
                                swiper.params.navigation.nextEl = navigationNextRef.current;

                                // Re-init navigation
                                swiper.navigation.destroy();
                                swiper.navigation.init();
                                swiper.navigation.update();
                            });
                        }}
                    >
                        {listSlider.map((item, index) => (
                            <SwiperSlide className={cx('swiper-top-item')}>
                                <Image src={item.image} />
                            </SwiperSlide>
                        ))}
                        <div ref={navigationPrevRef} />
                        <div ref={navigationNextRef} />
                    </Swiper>
                </div>
                <div>
                    <Swiper
                        // onSwiper={(a) => console.log(a)}
                        loop={true}
                        spaceBetween={10}
                        slidesPerView={4}
                        modules={[Navigation, Thumbs]}
                        onSlideChange={(e) => console.log(e)}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        {listSlider.map((item, index) => (
                            <SwiperSlide className={cx('text-content')} key={index}>
                                <div className={cx('text')}>{item.title[0]}</div>
                                <div className={cx('text')}>{item.title[1]}</div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <div className={cx('box-right')}>right</div>
        </div>
    );
}

export default HomeBanner;
