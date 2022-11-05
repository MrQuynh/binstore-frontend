import classNames from 'classnames/bind';
import { AiFillCar, AiFillStar } from 'react-icons/ai';
import { BiCurrentLocation, BiMobileAlt } from 'react-icons/bi';
import { BsCpu } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import Footer from '../Home/Footer/Footer';

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
                            <Link to="/phone">
                                <li className={cx('direct-active')}>/ Điện thoại</li>
                            </Link>
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
                                        <div className={cx('more-info-detail')}>Xem chi tiết thông tin thông số</div>
                                    </div>
                                    <div className={cx('product-driver')}>
                                        <AiFillCar className={cx('product-driver-icon')} />
                                        <span>Hàng chính hãng - bảo hành 12 tháng</span>
                                        <AiFillCar className={cx('product-driver-icon')} />
                                        <span>Giao hàng toàn quốc.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('body-right')}>
                        <div className={cx('price-body')}>
                            <div className={cx('price-left')}>
                                19.999.000đ <span>22.999.000đ</span>
                            </div>
                            <div className={cx('price-right')}>
                                <p>Trả góp chỉ từ</p>
                                <p>
                                    <strong> 1.506.00đ</strong>/tháng
                                </p>
                            </div>
                        </div>
                        <div className={cx('option-body')}>
                            <div className={cx('option-item', 'radio-active')}>
                                <div className={cx('price-radio')}>
                                    <input type="radio" checked="checked" />
                                    <label>128GB</label>
                                </div>
                                <span>19.999.000đ</span>
                            </div>
                            <div className={cx('option-item')}>
                                <div className={cx('price-radio')}>
                                    <input type="radio" />
                                    <label>128GB</label>
                                </div>
                                <span>19.999.000đ</span>
                            </div>
                            <div className={cx('option-item')}>
                                <div className={cx('price-radio')}>
                                    <input type="radio" />
                                    <label>128GB</label>
                                </div>
                                <span>19.999.000đ</span>
                            </div>
                        </div>
                        <div className={cx('box-promo')}>
                            <div className={cx('box-promo-item')}>
                                <p>Chọn 1 trong 2 khuyến mãi sau</p>
                            </div>
                            <div className={cx('box-promo-item')}>
                                <div className={cx('promo-radio')}>
                                    <input type="radio" checked="checked" />
                                    <label>Giảm ngay 3.000.000đ áp dụng đến 03/11 </label>
                                </div>
                                <div className={cx('promo-radio')}>
                                    <input type="radio" />
                                    <label>Trả góp 0% </label>
                                </div>
                            </div>
                            <div className={cx('box-promo-item')}>
                                <p className={cx('box-promo-item-uu-dai')}>Ưu đãi thêm</p>
                                <div className={cx('box-promo-item-body')}>
                                    <div className={cx('promo-radio')}>
                                        <input type="radio" checked="checked" />
                                        <label>Tặng PMH 500.000đ mua Apple Pencil 2 </label>
                                    </div>
                                    <div className={cx('promo-radio')}>
                                        <input type="radio" checked="checked" />
                                        <label>
                                            Thu cũ đổi mới trợ giá ngay 15% đến 3 triệu (SmartExchange){' '}
                                            <span className={cx('see-detail')}>Xem chi tiết</span>
                                        </label>
                                    </div>
                                    <div className={cx('promo-radio')}>
                                        <input type="radio" checked="checked" />
                                        <label>
                                            Tặng PMH 100.000đ mua Microsoft 365 Personal/Family{' '}
                                            <span className={cx('see-detail')}>Xem chi tiết</span>{' '}
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('btn')}>
                            <div className={cx('btn-buy-now')}>
                                <div className={cx('btn-buy-now-big')}>MUA NGAY</div>
                                <div>Giao hàng miễn phí hoặc nhận tại shop</div>
                            </div>
                            <div className={cx('btn-gop')}>
                                <div className={cx('btn-buy-now', 'btn-gop-item')}>
                                    <div className={cx('btn-buy-now-big')}>TRẢ GÓP</div>
                                    <div>Duyệt nhanh qua điện thoại</div>
                                </div>
                                <div className={cx('btn-buy-now', 'btn-gop-item')}>
                                    <div className={cx('btn-buy-now-big')}>TRẢ GÓP QUA THẺ</div>
                                    <div>Visa, Master Card, JCB, AMEX</div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('connect')}>
                            <div className={cx('connect-left')}>
                                Gọi <span>09123</span> để được tư vấn mua hàng (Miễn phí)
                            </div>
                            <div className={cx('connect-right')}>
                                <BiCurrentLocation className={cx('connect-icon')} />
                                Tìm shop có hàng gần nhất
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default DetailProduct;
