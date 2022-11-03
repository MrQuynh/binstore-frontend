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
import { Pagination, Navigation, Controller } from 'swiper';
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
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const pagination = {
        // type: 'fraction',
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
    const [firstSwiper, setFirstSwiper] = useState(null);
    const [secondSwiper, setSecondSwiper] = useState(null);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('box-left')}>
                <div className={cx('swiper-top')}>
                    <Swiper pagination={pagination} modules={[Pagination, Navigation]} className="mySwiper">
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
                <Swiper modules={[Controller]} onSwiper={setFirstSwiper} controller={{ control: secondSwiper }}>
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                </Swiper>
                <Swiper
                    modules={[Controller]}
                    onSwiper={(e) => console.log('hello', e.activeIndex)}
                    controller={{ control: 2 }}
                >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default HomeBanner;
