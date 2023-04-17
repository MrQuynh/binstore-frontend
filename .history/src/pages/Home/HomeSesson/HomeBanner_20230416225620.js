import classNames from 'classnames/bind';
import styles from './HomeBanner.module.scss';

import Image from '~/components/Image';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCube, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/css';

const cx = classNames.bind(styles);
const image =
    'https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/1/638029198311559659_F-H1_800x300.png';
const image2 =
    'https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/3/31/638158971439901826_F-H1_800x300.png';
const image3 =
    'https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/4/11/638168320729660302_F-H1_800x300.png';
const image4 =
    'https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/4/8/638165128219834891_F-H1_800x300.png';

const listSlider = [
    { image: image, title: ['Iphone 14 Giảm', '50%'] },
    { image: image2, title: ['Xiaomi 13 Giảm', '10%'] },
    { image: image3, title: ['Nokia ABS Giảm', '20%'] },
    { image: image4, title: ['Iphone 13 Giảm', '30%'] },
    { image: image, title: ['Samsung Giảm', '40%'] },
];

function HomeBanner() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('box-left')}>
                <div className={cx('swiper-top')}>
                    <Swiper
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        loop
                        modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube, Autoplay]}
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        // effect={'cube'}
                        // cubeEffect={{
                        //     shadow: true,
                        //     slideShadows: true,
                        //     shadowOffset: 20,
                        //     shadowScale: 0.94,
                        // }}
                    >
                        {/* <div className="swiper-wrapper"> */}
                        {listSlider?.map((item, index) => (
                            <SwiperSlide>
                                <Link to="/phone/Vivo-V25e-8GB---128GB?id=17" key={index}>
                                    <div>
                                        <Image src={item.image} />
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                        {/* </div> */}
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                    </Swiper>
                    <Swiper
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube, Autoplay]}
                        spaceBetween={50}
                        slidesPerView={4}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <div className="swiper-wrapper">
                            {listSlider?.map((item, index) => (
                                <SwiperSlide>
                                    <Link to="/phone/Vivo-V25e-8GB---128GB?id=17" className="swiper-slide" key={index}>
                                        <div className={cx('body-item')}>
                                            <div className="text">{item.title[0]}</div>
                                            <div className="text">{item.title[1]}</div>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </div>
                    </Swiper>
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
