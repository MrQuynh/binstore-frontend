import classNames from 'classnames/bind';
import Image from '~/components/Image';
import styles from './HomeBannerSale.module.scss';

const cx = classNames.bind(styles);

function HomeBannerSale() {
    return (
        <div className={cx('wrapper')}>
            <Image />
        </div>
    );
}

export default HomeBannerSale;
