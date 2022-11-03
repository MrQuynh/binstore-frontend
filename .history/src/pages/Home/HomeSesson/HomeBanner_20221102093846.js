import classNames from 'classnames/bind';
import styles from './HomeBanner.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper';
import 'swiper/css';
import Image from '~/components/Image';
import { useState } from 'react';
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
    var menu = ['Slide 1', 'Slide 2', 'Slide 3'];
    var mySwiper = new Swiper('.swiper-container', {
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + menu[index] + '</span>';
            },
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    return (
        <div className={cx('wrapper')}>
            <div className={cx('box-left')}>
                <div className={cx('swiper-top')}>
                    <div className="swiper-container">
                        {/* <!-- Additional required wrapper --> */}
                        <div className="swiper-wrapper">
                            {/* <!-- Slides --> */}
                            <div className="swiper-slide">Slide 1</div>
                            <div className="swiper-slide">Slide 2</div>
                            <div className="swiper-slide">Slide 3</div>
                        </div>
                        {/* <!-- If we need pagination --> */}
                        <div className="swiper-pagination"></div>

                        {/* <!-- If we need navigation buttons --> */}
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                    </div>
                    {/* <Swiper className={cx('swiper-top-body')} pagination={true} modules={[Pagination]}>
                        {listSlider.map((item, index) => (
                            <SwiperSlide className={cx('swiper-top-item')}>
                                <Image src={item.image} />
                            </SwiperSlide>
                        ))}
                    </Swiper> */}
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
