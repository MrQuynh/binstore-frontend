import styles from './Banner.module.scss';
import classNames from 'classnames/bind';
import AwesomeSwiper from 'react-awesome-swiper';
import { useRef } from 'react';
import Image from '~/components/Image';

const cx = classNames.bind(styles);
function Banner() {
    const config = {
        loop: true,
        slidesPerView: 1,
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
    const swiperRef = useRef();
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('direct')}>
                    <ol>
                        <li className={cx('direct-active')}>Trang chủ</li>
                        <li>/ Điện thoại</li>
                        <li>/ Apple(Iphone)</li>
                    </ol>
                </div>
                <div className={cx('slider')}>
                    <AwesomeSwiper ref={swiperRef} config={config} className="your-classname">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <Image
                                    className="image"
                                    src="https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/1/638029092790757117_F-C1_1200x300.png"
                                />
                            </div>
                            <div className="swiper-slide">
                                <Image
                                    className="image"
                                    src="https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/1/638028592784134700_F-C1_1200x300.png"
                                />
                            </div>
                            <div className="swiper-slide">
                                <Image
                                    className="image"
                                    src="https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/1/638028581537178609_F-C1_1200x300.png"
                                />
                            </div>
                        </div>
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                    </AwesomeSwiper>
                </div>
            </div>
        </div>
    );
}

export default Banner;
