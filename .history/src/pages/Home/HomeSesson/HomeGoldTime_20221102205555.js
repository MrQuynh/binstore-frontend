import classNames from 'classnames/bind';
import { GrCaretNext } from 'react-icons/gr';
import Image from '~/components/Image';
import styles from './HomeGoldTime.module.scss';
import AwesomeSwiper from 'react-awesome-swiper';
import { useRef } from 'react';

const cx = classNames.bind(styles);

function HomeGoldTime() {
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
    const swiperRef = useRef();
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('flash')}>
                    <h2>Giờ vàng giá Sốc</h2>
                    <span>
                        Xem thể lệ <GrCaretNext className={cx('flash-icon')} />
                    </span>
                </div>
                <div className={cx('flash-date')}>
                    <div className={cx('flash-date-item')}>
                        <div className={cx('flash-sale-date')}>
                            31/10
                            <p>14:00 - 16:00</p>
                        </div>
                        <div className={cx('flash-sale-date-text')}>Đã kết thúc</div>
                    </div>
                    <div className={cx('flash-date-item')}>
                        <div className={cx('flash-sale-date')}>
                            31/10
                            <p>14:00 - 16:00</p>
                        </div>
                        <div className={cx('flash-sale-date-text')}>Đã kết thúc</div>
                    </div>
                    <div className={cx('flash-date-item', 'flash-date-active')}>
                        <div className={cx('flash-sale-date')}>
                            31/10
                            <p>14:00 - 16:00</p>
                        </div>
                        <div className={cx('flash-sale-date-text')}>Đã kết thúc</div>
                    </div>
                    <div className={cx('flash-date-item')}>
                        <div className={cx('flash-sale-date')}>
                            31/10
                            <p>14:00 - 16:00</p>
                        </div>
                        <div className={cx('flash-sale-date-text')}>Đã kết thúc</div>
                    </div>
                </div>
                <div className={cx('flash-product')}>
                    <AwesomeSwiper ref={swiperRef} config={config} className="your-classname">
                        <div className="swiper-wrapper">
                            <div className={cx('product', 'swiper-slide')}>
                                <div className={cx('product-image')}>
                                    <div className={cx('title-sale-product')}>Giờ vàng - giảm sốc</div>
                                    <div className={cx('p-image-body')}>
                                        <Image
                                            className={cx('p-image')}
                                            src="https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2019/12/28/637131195786706449_0091L02.jpg"
                                        />
                                    </div>
                                    <div className={cx('product-sale')}>Giảm 90%</div>
                                </div>
                                <div className={cx('product-info')}>
                                    <h3 className={cx('product-info-title')}>Đồng hồ SK - 11K00</h3>
                                    <div className={cx('product-info-price')}>
                                        89.000 VND <span>890.000 VND</span>
                                    </div>
                                    <div className={cx('product-info-btn')}>Đã kết thúc</div>
                                </div>
                            </div>
                            {/* // <div className="swiper-slide"> */}
                        </div>
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                    </AwesomeSwiper>
                </div>
            </div>
        </div>
    );
}

export default HomeGoldTime;