import classNames from 'classnames/bind';
import styles from './HomeBanner.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import Image from '~/components/Image';
import { useRef, useState } from 'react';
import 'swiper/css';
// import 'swiper/css/bundle';
import 'swiper/css/pagination';

import 'swiper/css/autoplay';
import { Pagination, Navigation, Thumbs } from 'swiper';
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
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
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
    const swiperRef = useRef();
    return (
        <div className={cx('wrapper')}>
            <div className={cx('box-left')}>
                <div className={cx('swiper-top')}>
                    {/* <Swiper modules={[Thumbs]} thumbs={{ swiper: thumbsSwiper }}>
                        {listSlider.map((item, index) => (
                            <SwiperSlide className={cx('swiper-top-item')} key={index}>
                                <Image src={item.image} />
                            </SwiperSlide>
                        ))}
                    </Swiper> */}
                    <AwesomeSwiper ref={swiperRef} config={config} className="your-classname">
                        <div className="swiper-wrapper">
                            {listSlider.map((item, index) => (
                                <div className="swiper-wrapper">
                                    <Image src={item.image} />
                                </div>
                            ))}
                        </div>
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                        <div className="swiper-pagination"></div>
                    </AwesomeSwiper>

                    {/* <Swiper modules={[Thumbs]} onSwiper={setThumbsSwiper}>
                        {listSlider.map((item, index) => (
                            <SwiperSlide className={cx('swiper-top-item')} key={index}>
                                <div class="body-item">
                                    <div class="text">{item.title[0]}</div>
                                    <div class="text">{item.title[1]}</div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper> */}
                </div>
                <div></div>
            </div>
            <div className={cx('box-right')}>
                {/* <AwesomeSwiper ref={swiperRef} config={config} className="your-classname">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">slider1</div>
                        <div className="swiper-slide">slider2</div>
                        <div className="swiper-slide">slider3</div>
                    </div>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                    <div className="swiper-pagination"></div>
                </AwesomeSwiper> */}
                {/* <Swiper modules={[Thumbs]} thumbs={{ swiper: thumbsSwiper }}>
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                </Swiper>
                <Swiper modules={[Thumbs]} onSwiper={setThumbsSwiper}>
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                </Swiper> */}
            </div>
        </div>
    );
}

export default HomeBanner;
