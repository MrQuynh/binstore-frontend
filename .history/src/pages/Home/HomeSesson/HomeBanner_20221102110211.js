import classNames from 'classnames/bind';
import styles from './HomeBanner.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import Image from '~/components/Image';
import { useRef, useState } from 'react';

import { Pagination } from 'swiper';
const cx = classNames.bind(styles);
const image =
    'https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/1/638029198311559659_F-H1_800x300.png';

const listSlider = [
    { image: image, title: ['Iphone 14 Giảm', '50%'] },
    { image: image, title: ['Iphone 1 Giảm', '10%'] },
    { image: image, title: ['Iphone 2 Giảm', '20%'] },
    { image: image, title: ['Iphone 3 Giảm', '30%'] },
    { image: image, title: ['Iphone 4 Giảm', '40%'] },
];

function HomeBanner() {
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            console.log(index);

            return `<span class="${className}">
                <div class="body-item">
                <div class="text">${listSlider[+index].title[0]}</div>
                <div class="text">${listSlider[+index].title[1]}</div>
                </div>
            </span>`;
        },
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('box-left')}>
                <div className={cx('swiper-top')}>
                    <Swiper pagination={pagination} modules={[Pagination]} className="mySwiper">
                        {listSlider.map((item, index) => (
                            <SwiperSlide className={cx('swiper-top-item')} key={index}>
                                <Image src={item.image} />
                            </SwiperSlide>
                        ))}
                        {/* <div ref={prevRef} />
                        <div ref={nextRef} /> */}
                    </Swiper>
                </div>
            </div>
            <div className={cx('box-right')}>
                <Swiper
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
                    <SwiperSlide>slide 1</SwiperSlide>
                    <SwiperSlide>slide 2</SwiperSlide>
                    <div ref={navigationPrevRef} />
                    <div ref={navigationNextRef} />
                </Swiper>
            </div>
        </div>
    );
}

export default HomeBanner;
