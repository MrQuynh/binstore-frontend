import classNames from 'classnames/bind';
import { GrCaretNext } from 'react-icons/gr';
import Image from '~/components/Image';
import styles from './HomeGoldTime.module.scss';
import AwesomeSwiper from 'react-awesome-swiper';
import { useRef } from 'react';

const cx = classNames.bind(styles);
const d = new Date();
function HomeGoldTime() {
    const widthScreen = window.innerWidth;
    console.log(widthScreen);
    const config = {
        slidesPerView: +widthScreen < +840 ? 3 : 4,
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
        speed: 800,

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
                            {`${d.getDate() - 2}/${d.getMonth() + 1}`}
                            <p>14:00 - 16:00</p>
                        </div>
                        <div className={cx('flash-sale-date-text')}>Đã kết thúc</div>
                    </div>
                    <div className={cx('flash-date-item')}>
                        <div className={cx('flash-sale-date')}>
                            {`${d.getDate() - 1}/${d.getMonth() + 1}`}
                            <p>14:00 - 16:00</p>
                        </div>
                        <div className={cx('flash-sale-date-text')}>Đã kết thúc</div>
                    </div>
                    <div className={cx('flash-date-item', 'flash-date-active')}>
                        <div className={cx('flash-sale-date')}>
                            {`${d.getDate()}/${d.getMonth() + 1}`}
                            <p>14:00 - 16:00</p>
                        </div>
                        <div className={cx('flash-sale-date-text')}>
                            {+14 < +d.getHours() && +d.getHours() < +17 ? 'Đang diễn ra' : 'Đã kết thúc'}
                        </div>
                    </div>
                    <div className={cx('flash-date-item')}>
                        <div className={cx('flash-sale-date')}>
                            {`${d.getDate() + 1}/${d.getMonth() + 1}`}
                            <p>14:00 - 16:00</p>
                        </div>
                        <div className={cx('flash-sale-date-text')}>Sắp diễn ra</div>
                    </div>
                </div>
                <div className={cx('flash-product')}>
                    <AwesomeSwiper ref={swiperRef} config={config}>
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className={cx('product')}>
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
                                        <h3 className={cx('product-info-title')}>
                                            Đồng hồ SK - 11K00 Đồng hồ SK - 11K00
                                        </h3>
                                        <div className={cx('product-info-price')}>
                                            89.000 VND <span>890.000 VND</span>
                                        </div>
                                        <div className={cx('product-info-btn')}>Đã kết thúc</div>
                                    </div>
                                </div>
                            </div>

                            <div className="swiper-slide">
                                <div className={cx('product', 'swiper-slide')}>
                                    <div className={cx('product-image')}>
                                        <div className={cx('title-sale-product')}>Giờ vàng - giảm sốc</div>
                                        <div className={cx('p-image-body')}>
                                            <Image
                                                className={cx('p-image')}
                                                src="https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/10/21/637704493796071849_may-xay-sinh-to-toshiba-mx-60th-1.jpg"
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
                            </div>
                            <div className="swiper-slide">
                                <div className={cx('product', 'swiper-slide')}>
                                    <div className={cx('product-image')}>
                                        <div className={cx('title-sale-product')}>Giờ vàng - giảm sốc</div>
                                        <div className={cx('p-image-body')}>
                                            <Image
                                                className={cx('p-image')}
                                                src="https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/10/18/638016845057771681_binh-dun-sieu-toc-thuy-tinh-hafele-17-lit-t-602c-53543732-5.jpg"
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
                            </div>
                            <div className="swiper-slide">
                                <div className={cx('product', 'swiper-slide')}>
                                    <div className={cx('product-image')}>
                                        <div className={cx('title-sale-product')}>Giờ vàng - giảm sốc</div>
                                        <div className={cx('p-image-body')}>
                                            <Image
                                                className={cx('p-image')}
                                                src="https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/10/24/638022084424311528_aukey.jpg"
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
                            </div>
                        </div>
                        {/* <div className="swiper-button-prev"></div> */}
                        {/* <div className="swiper-button-next"></div> */}
                    </AwesomeSwiper>
                </div>
            </div>
        </div>
    );
}

export default HomeGoldTime;
