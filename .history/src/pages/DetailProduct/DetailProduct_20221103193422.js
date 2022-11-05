import classNames from 'classnames/bind';
import { AiFillStar } from 'react-icons/ai';
import { BiMobileAlt } from 'react-icons/bi';
import { BsCpu } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import Banner from '~/layouts/components/Banner';
import styles from './DetailProduct.module.scss';
const cx = classNames.bind(styles);

function DetailProduct() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('header-detail')}>
                    <div className={cx('direct')}>
                        <ol>
                            <Link to="/">
                                <li className={cx('direct-active')}>Trang chủ</li>
                            </Link>
                            <li>/ Điện thoại</li>
                            <li>/ Apple(Iphone)</li>
                        </ol>
                    </div>
                    <div className={cx('header-info')}>
                        <h2 className={cx('header-info-name')}>iPad Pro 11 2021 M1 Wi-Fi 128GB </h2>
                        <div className={cx('header-info-right')}>
                            <AiFillStar className={cx('header-info-icon')} />
                            <AiFillStar className={cx('header-info-icon')} />
                            <AiFillStar className={cx('header-info-icon')} />
                            <AiFillStar className={cx('header-info-icon')} />
                            <AiFillStar className={cx('header-info-icon')} />

                            <p className={cx('header-info-vote')}>123 đánh giá</p>
                            <p>345 Hỏi & Đáp</p>
                        </div>
                    </div>
                </div>
                <div className={cx('body')}>
                    <div className={cx('body-left')}>
                        <div>
                            <div className={cx('product')}>
                                <div className={cx('product-image')}>
                                    <div className={cx('title-sale-product')}>Săn sale - giảm giá</div>
                                    <div className={cx('p-image-body')}>
                                        <Image
                                            className={cx('p-image')}
                                            src="https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/1/638028878218412584_samsung-galaxy-s22-bora-purple-dd-docquyen-bh.jpg"
                                        />
                                    </div>
                                    <div className={cx('image-footer')}>
                                        <div className={cx('image-footer-btn')}>
                                            GIẢM <p>3.000.000Đ</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('product-info')}>
                                    <div className={cx('product-info-price')}>
                                        89.000 VND <span>890.000 VND</span>
                                    </div>
                                    <div className={cx('more-info')}>
                                        <div className={cx('more-info-item')}>
                                            <span>
                                                <BsCpu className={cx('more-info-icon')} />
                                                Snapdragon 8
                                            </span>
                                            <p>
                                                <BiMobileAlt className={cx('more-info-icon')} />
                                                6.1 inch
                                            </p>
                                        </div>
                                        <div className={cx('more-info-item')}>
                                            <span>
                                                <BsCpu className={cx('more-info-icon')} />8 GB
                                            </span>
                                            <p>
                                                <BsCpu className={cx('more-info-icon')} />
                                                120 GB
                                            </p>
                                        </div>
                                    </div>
                                    <div className={cx('more-info-sale-up')}>Giảm 300,000đ thanh toán online</div>
                                </div>
                                <div className={cx('product-info-btn')}>MUA NGAY</div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('body-right')}>right</div>
                </div>
            </div>
        </div>
    );
}

export default DetailProduct;
