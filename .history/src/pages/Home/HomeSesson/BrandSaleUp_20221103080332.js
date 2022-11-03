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
                    <Image src="https://images.fpt.shop/unsafe/fit-in/1168x195/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/1/638028796106590979_F-H5_1200x200.png" />
                </div>
            </div>
        </div>
    );
}

export default BrandSaleUp;
