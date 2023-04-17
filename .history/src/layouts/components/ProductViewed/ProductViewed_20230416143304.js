import styles from './ProductViewed.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function ProductViewed() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>product viewed</div>
        </div>
    );
}

export default ProductViewed;
