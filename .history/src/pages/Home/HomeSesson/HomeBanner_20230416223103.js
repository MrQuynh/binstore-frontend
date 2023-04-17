import classNames from 'classnames/bind';
import styles from './HomeBanner.module.scss';

import Image from '~/components/Image';
import { useRef } from 'react';

import AwesomeSwiper from 'react-awesome-swiper';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCube } from 'swiper';
import 'swiper/swiper-bundle.min.css';

const cx = classNames.bind(styles);
const image =
    'https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/1/638029198311559659_F-H1_800x300.png';

const listSlider = [
    { image: image, title: ['Iphone 14 Giảm', '50%'] },
    { image: image, title: ['Xiaomi 13 Giảm', '10%'] },
    { image: image, title: ['Nokia ABS Giảm', '20%'] },
    { image: image, title: ['Iphone 13 Giảm', '30%'] },
    { image: image, title: ['Samsung Giảm', '40%'] },
];

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
        preloadImages: false,
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
                    {/* <AwesomeSwiper ref={swiperRef} config={config} className="your-classname">
                        <div className="swiper-wrapper">
                            {listSlider?.map((item, index) => (
                                <div to="/phone/Vivo-V25e-8GB---128GB?id=17" key={index}>
                                    <div className="swiper-slide">
                                        <Image src={item.image} />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                    </AwesomeSwiper> */}
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={3}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        {/* <div className="swiper-wrapper"> */}
                        {listSlider?.map((item, index) => (
                            <SwiperSlide>
                                <div to="/phone/Vivo-V25e-8GB---128GB?id=17" key={index}>
                                    <div className="swiper-slide">
                                        <Image src={item.image} />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                        {/* </div> */}
                        {/* <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div> */}
                        {/* <SwiperSlide>Slide 1</SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide> */}
                        {/* ... */}
                    </Swiper>

                    {/* <AwesomeSwiper ref={swiperRef} config={config1} className="your-classname">
                        <div className="swiper-wrapper">
                            {listSlider.map((item, index) => (
                                // <Link to="/phone/Vivo-V25e-8GB---128GB?id=17">
                                <div className="swiper-slide" key={index}>
                                    <div className={cx('body-item')}>
                                        <div className="text">{item.title[0]}</div>
                                        <div className="text">{item.title[1]}</div>
                                    </div>
                                </div>
                                // </Link>
                            ))}
                        </div>
                    </AwesomeSwiper> */}
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
                    <p>
                        <FormattedMessage id="home.special" />
                    </p>
                    <Link to="/tin-tuc/tin-khuyen-mai">
                        <span>
                            <FormattedMessage id="home.seeAll" />
                        </span>
                    </Link>
                </div>
                <div className={cx('list-special')}>
                    <Link to="/tin-tuc/tin-khuyen-mai">
                        <div className={cx('item-special')}>
                            <Image
                                className={cx('image-item')}
                                src="https://images.fpt.shop/unsafe/fit-in/70x40/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/images/2015/TamTTM10/1(2).png"
                            />
                            <p>Siêu hội Xiaomi mê ly đến 40%</p>
                        </div>
                    </Link>
                    <Link to="/tin-tuc/tin-khuyen-mai">
                        <div className={cx('item-special')}>
                            <Image
                                className={cx('image-item')}
                                src="https://images.fpt.shop/unsafe/fit-in/70x40/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/images/2015/PhuongMT5/OPPO%20A95.png"
                            />
                            <p>OPPO A95 giá sốc chỉ 5.990.000Đ</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default HomeBanner;
