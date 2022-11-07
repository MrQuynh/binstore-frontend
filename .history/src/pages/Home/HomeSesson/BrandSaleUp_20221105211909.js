import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import styles from './BrandSaleUp.module.scss';

const cx = classNames.bind(styles);

function BrandSaleUp() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('title')}>SIÊU HỘI MUA SẮM - SALE HẾT KẾT NĂM</div>
                <div className={cx('banner')}>
                    <Image
                        className={cx('banner-image')}
                        src="https://images.fpt.shop/unsafe/fit-in/1168x195/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/1/638028796106590979_F-H5_1200x200.png"
                    />
                </div>
                <div className={cx('list-brand')}>
                    <div className={cx('brand-item')}>
                        <Link to="/phone">
                            <Image src="https://images.fpt.shop/unsafe/fit-in/214x212/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/10/28/638025477842393859_HTML-IMG.png" />
                            <div className={cx('brand-btn-body')}>
                                <div className={cx('brand-sale')}>
                                    <div className={cx('brand-btn')}>APPLE</div>Giảm đến 25%
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className={cx('brand-item')}>
                        <Link to="laptop">
                            <Image src="https://images.fpt.shop/unsafe/fit-in/214x212/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/10/6/638006647423918444_HTML-IMG-3.png" />
                            <div className={cx('brand-btn-body')}>
                                <div className={cx('brand-sale')}>
                                    <div className={cx('brand-btn')}>LAPTOP</div>Giảm đến 10%
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className={cx('brand-item')}>
                        <Link to="/phone">
                            <Image src="https://images.fpt.shop/unsafe/fit-in/214x212/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/10/6/638006611719173825_HTML-IMG-2.png" />
                            <div className={cx('brand-btn-body')}>
                                <div className={cx('brand-sale')}>
                                    <div className={cx('brand-btn')}>ĐIỆN THOẠI</div>Giảm đến 25%
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className={cx('brand-item')}>
                        <Link to="phone">
                            <Image src="https://images.fpt.shop/unsafe/fit-in/214x212/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/10/6/638006650603301823_HTML-IMG-5.png" />
                            <div className={cx('brand-btn-body')}>
                                <div className={cx('brand-sale')}>
                                    <div className={cx('brand-btn')}>PHỤ KIỆN</div>Giảm đến 30%
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className={cx('brand-item')}>
                        <Link to="/phone">
                            <Image src="https://images.fpt.shop/unsafe/fit-in/214x212/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/10/6/638006648509231290_HTML-IMG-4.png" />
                            <div className={cx('brand-btn-body')}>
                                <div className={cx('brand-sale')}>
                                    <div className={cx('brand-btn')}>ĐÒ GIA DỤNG</div>Giảm đến 20%
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BrandSaleUp;
