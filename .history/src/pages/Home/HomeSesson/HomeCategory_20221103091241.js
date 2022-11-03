import classNames from 'classnames/bind';
import Image from '~/components/Image';
import styles from './HomeCategory.module.scss';

const cx = classNames.bind(styles);

function HomeCategory() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('item')}>
                    <div className={cx('body-image')}>
                        <Image
                            className={cx('image')}
                            src="https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2022/iconcate/icon-mobile.png"
                        />
                    </div>
                    <div className={cx('title')}>Điện thoại</div>
                </div>
                <div className={cx('item')}>
                    <div className={cx('body-image')}>
                        <Image
                            className={cx('image')}
                            src="https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2022/iconcate/icon-mobile.png"
                        />
                    </div>
                    <div className={cx('title')}>Điện thoại</div>
                </div>
                <div className={cx('item')}>
                    <div className={cx('body-image')}>
                        <Image
                            className={cx('image')}
                            src="https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2022/iconcate/icon-laptop.png"
                        />
                    </div>
                    <div className={cx('title')}>Laptop</div>
                </div>
                <div className={cx('item')}>
                    <div className={cx('body-image')}>
                        <Image
                            className={cx('image')}
                            src="https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2022/iconcate/icon-pc.png"
                        />
                    </div>
                    <div className={cx('title')}>PC- Lắp ráp</div>
                </div>
                <div className={cx('item')}>
                    <div className={cx('body-image')}>
                        <Image
                            className={cx('image')}
                            src="https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2022/iconcate/icon-tablet.png"
                        />
                    </div>
                    <div className={cx('title')}>Máy tính bảng</div>
                </div>
                <div className={cx('item')}>
                    <div className={cx('body-image')}>
                        <Image
                            className={cx('image')}
                            src="https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2022/iconcate/icon-smart.png"
                        />
                    </div>
                    <div className={cx('title')}>Thiết bị thông minh</div>
                </div>
                <div className={cx('item')}>
                    <div className={cx('body-image')}>
                        <Image
                            className={cx('image')}
                            src="https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2022/iconcate/icon-houseware.png"
                        />
                    </div>
                    <div className={cx('title')}>Gia dụng</div>
                </div>
                <div className={cx('item')}>
                    <div className={cx('body-image')}>
                        <Image
                            className={cx('image')}
                            src="https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2022/iconcate/icon-apple.png"
                        />
                    </div>
                    <div className={cx('title')}>Apple</div>
                </div>
                <div className={cx('item')}>
                    <div className={cx('body-image')}>
                        <Image
                            className={cx('image')}
                            src="https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2015/Other/icon-samsung.png"
                        />
                    </div>
                    <div className={cx('title')}>Samsung</div>
                </div>
                <div className={cx('item')}>
                    <div className={cx('body-image')}>
                        <Image
                            className={cx('image')}
                            src="https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2022/iconcate/icon-smartwatch.png"
                        />
                    </div>
                    <div className={cx('title')}>Đồng hồ </div>
                </div>
            </div>
        </div>
    );
}

export default HomeCategory;
