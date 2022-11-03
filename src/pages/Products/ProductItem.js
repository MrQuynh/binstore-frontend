import classNames from 'classnames/bind';

import { BiMobileAlt } from 'react-icons/bi';
import { BsCpu } from 'react-icons/bs';
import Image from '~/components/Image';
import styles from './ProductItem.module.scss';

const cx = classNames.bind(styles);
function ProductItem() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('product')}>
                <div className={cx('product-image')}>
                    <div className={cx('title-sale-product')}>Săn sale - giảm giá</div>
                    <div className={cx('p-image-body')}>
                        <Image
                            className={cx('p-image')}
                            src="https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/1/638028878218412584_samsung-galaxy-s22-bora-purple-dd-docquyen-bh.jpg"
                        />
                    </div>
                    <div className={cx('product-sale')}>Giảm 1.200.000</div>
                    <div className={cx('product-pay')}>Trả góp 0%</div>
                </div>
                <div className={cx('product-info')}>
                    <h3 className={cx('product-info-title')}>Đồng hồ SK - 11K00 Đồng hồ SK - 11K00</h3>
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
    );
}

export default ProductItem;
