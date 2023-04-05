import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import styles from './HomeBannerSale.module.scss';

const cx = classNames.bind(styles);

function HomeBannerSale() {
    return (
        <Link to="/laptop">
            <div className={cx('wrapper')}>
                <Image
                    className={cx('sale-picture')}
                    src="https://images.fpt.shop/unsafe/fit-in/1200x100/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/1/638028958889330018_H7_1200x100.png"
                />
            </div>
        </Link>
    );
}

export default HomeBannerSale;
