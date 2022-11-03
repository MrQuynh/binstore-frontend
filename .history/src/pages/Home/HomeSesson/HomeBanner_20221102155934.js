import classNames from 'classnames/bind';
import styles from './HomeBanner.module.scss';

import Image from '~/components/Image';
import { useRef, useState } from 'react';

import AwesomeSwiper from 'react-awesome-swiper';

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
const config = {
    loop: true,
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },
    // Disable preloading of all images
    preloadImages: false,
    // Enable lazy loading
    lazy: true,
    speed: 500,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        bulletElement: 'li',
        hideOnClick: true,
        clickable: true,
    },
    on: {
        slideChange: function () {
            console.log(this.activeIndex);
        },
    },
};

function HomeBanner() {
    const config = {
        loop: true,
        autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
        },
        // Disable preloading of all images
        preloadImages: false,
        // Enable lazy loading
        lazy: true,
        speed: 500,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            bulletElement: 'li',
            hideOnClick: true,
            clickable: true,
        },
        on: {
            slideChange: function () {},
        },
    };
    const config1 = {
        loop: true,
        slidesPerView: 4,
        autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
        },
        // Disable preloading of all images
        preloadImages: false,
        // Enable lazy loading
        lazy: true,
        speed: 500,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            bulletElement: 'li',
            hideOnClick: true,
            clickable: true,
        },
        on: {
            slideChange: function (e) {},
        },
    };
    const swiperRef = useRef();

    return (
        <div className={cx('wrapper')}>
            <div className={cx('box-left')}>
                <div className={cx('swiper-top')}>
                    <AwesomeSwiper ref={swiperRef} config={config} className="your-classname">
                        <div className="swiper-wrapper">
                            {listSlider.map((item, index) => (
                                <div className="swiper-slide">
                                    <Image src={item.image} />
                                </div>
                            ))}
                        </div>
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                    </AwesomeSwiper>
                    <AwesomeSwiper ref={swiperRef} config={config1} className="your-classname">
                        <div className="swiper-wrapper">
                            {listSlider.map((item, index) => (
                                <div className="swiper-slide">
                                    <div className={cx('body-item')}>
                                        <div class="text">{item.title[0]}</div>
                                        <div class="text">{item.title[1]}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </AwesomeSwiper>
                </div>
                <div></div>
            </div>
            <div className={cx('box-right')}>
                <Image
                    className={cx('image-right')}
                    src="https://images.fpt.shop/unsafe/fit-in/385x100/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/1/638028644329194212_F_H2_385x100.jpg"
                />
                <Image
                    className={cx('image-right')}
                    src="https://images.fpt.shop/unsafe/fit-in/385x100/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/1/638029092788906826_H2_.png"
                />
                <div className={cx('special-right')}>
                    <p>Thông tin nổi bật</p>
                    <span>Xem tất cả</span>
                </div>
                <div className={cx('list-special')}>
                    <div className={cx('item-special')}>
                        <Image src="https://images.fpt.shop/unsafe/fit-in/70x40/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/images/2015/TamTTM10/1(2).png" />
                        <p>Siêu hội Xiaomi mê ly đến 40%</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeBanner;
