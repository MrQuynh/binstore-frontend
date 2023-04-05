import classNames from 'classnames/bind';
import Image from '~/components/Image';
import styles from './HomeDiscount.module.scss';
import AwesomeSwiper from 'react-awesome-swiper';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function HomeDiscount() {
    const config = {
        loop: true,
        slidesPerView: 3,
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
                <div className={cx('title')}>
                    <FormattedMessage id="home.discount" />
                </div>
                <AwesomeSwiper ref={swiperRef} config={config} className="your-classname">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <Link to="#">
                                <Image
                                    className={cx('image')}
                                    src="https://images.fpt.shop/unsafe/fit-in/384x180/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/7/20/637939260761612196_F_384x180-4.png"
                                />
                            </Link>
                        </div>

                        <div className="swiper-slide">
                            <Link to="#">
                                <Image
                                    className={cx('image')}
                                    src="https://images.fpt.shop/unsafe/fit-in/384x180/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/10/31/638028567274104149_F_H3_384x180-2.png"
                                />
                            </Link>
                        </div>
                        <div className="swiper-slide">
                            <Link to="#">
                                <Image
                                    className={cx('image')}
                                    src="https://images.fpt.shop/unsafe/fit-in/384x180/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/9/30/638001773957012890_F_384x180%20copy%204.jpg"
                                />
                            </Link>
                        </div>
                        <div className="swiper-slide">
                            <Link to="#">
                                <Image
                                    className={cx('image')}
                                    src="https://images.fpt.shop/unsafe/fit-in/384x180/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/10/31/638028562938690922_F_384x180.jpg"
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </AwesomeSwiper>
            </div>
        </div>
    );
}

export default HomeDiscount;
