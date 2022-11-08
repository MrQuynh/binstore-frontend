import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import styles from './HomeCategory.module.scss';

const cx = classNames.bind(styles);

function HomeCategory() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('item')}>
                    <Link className={cx('link')} to="/phone">
                        <div className={cx('body-image')}>
                            <Image
                                className={cx('image')}
                                src="https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2022/iconcate/icon-mobile.png"
                            />
                        </div>
                        <div className={cx('title')}>Điện thoại</div>
                    </Link>
                </div>
                <div className={cx('item')}>
                    <Link className={cx('link')} to="/tv">
                        <div className={cx('body-image')}>
                            <Image
                                className={cx('image')}
                                src="https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2022/iconcate/icon-screen.png"
                            />
                        </div>
                        <div className={cx('title')}>Tivi</div>
                    </Link>
                </div>
                <div className={cx('item')}>
                    <Link className={cx('link')} to="/laptop ">
                        <div className={cx('body-image')}>
                            <Image
                                className={cx('image')}
                                src="https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2022/iconcate/icon-laptop.png"
                            />
                        </div>
                        <div className={cx('title')}>Laptop</div>
                    </Link>
                </div>
                <div className={cx('item')}>
                    <Link className={cx('link')} to="/pc">
                        <div className={cx('body-image')}>
                            <Image
                                className={cx('image')}
                                src="https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2022/iconcate/icon-pc.png"
                            />
                        </div>
                        <div className={cx('title')}>PC- Lắp ráp</div>
                    </Link>
                </div>
                <div className={cx('item')}>
                    <Link className={cx('link')} to="tablet">
                        <div className={cx('body-image')}>
                            <Image
                                className={cx('image')}
                                src="https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2022/iconcate/icon-tablet.png"
                            />
                        </div>
                        <div className={cx('title')}>Máy tính bảng</div>
                    </Link>
                </div>
                <div className={cx('item')}>
                    <Link className={cx('link')} to="/camera">
                        <div className={cx('body-image')}>
                            <Image
                                className={cx('image')}
                                src="https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2022/iconcate/icon-smart.png"
                            />
                        </div>
                        <div className={cx('title')}>Camera</div>
                    </Link>
                </div>
                <div className={cx('item')}>
                    <Link className={cx('link')} to="/house-ware">
                        <div className={cx('body-image')}>
                            <Image
                                className={cx('image')}
                                src="https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2022/iconcate/icon-houseware.png"
                            />
                        </div>
                        <div className={cx('title')}>Gia dụng</div>
                    </Link>
                </div>
                <div className={cx('item')}>
                    <Link className={cx('link')} to="phone">
                        <div className={cx('body-image')}>
                            <Image
                                className={cx('image')}
                                src="https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2022/iconcate/icon-apple.png"
                            />
                        </div>
                        <div className={cx('title')}>Apple</div>
                    </Link>
                </div>
                <div className={cx('item')}>
                    <Link className={cx('link')} to="phone">
                        <div className={cx('body-image')}>
                            <Image
                                className={cx('image')}
                                src="https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2015/Other/icon-samsung.png"
                            />
                        </div>
                        <div className={cx('title')}>Samsung</div>
                    </Link>
                </div>
                <div className={cx('item')}>
                    <Link className={cx('link')} to="apple-watch">
                        <div className={cx('body-image')}>
                            <Image
                                className={cx('image')}
                                src="https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2022/iconcate/icon-smartwatch.png"
                            />
                        </div>
                        <div className={cx('title')}>Đồng hồ </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default HomeCategory;
