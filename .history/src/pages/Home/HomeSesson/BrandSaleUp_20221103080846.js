import classNames from 'classnames/bind';
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
                        <Image src="https://images.fpt.shop/unsafe/fit-in/214x212/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/10/28/638025477842393859_HTML-IMG.png" />
                        <div className={cx('brand-btn-body')}>
                            <div className={cx('brand-btn')}>APPLE</div>
                            <div className={cx('brand-sale')}>Giảm đến 25%</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BrandSaleUp;
