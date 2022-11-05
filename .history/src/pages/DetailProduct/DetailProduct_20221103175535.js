import classNames from 'classnames/bind';
import styles from './DetailProduct.module.scss';
const cx = classNames.bind(styles);

function DetailProduct() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>content</div>
        </div>
    );
}

export default DetailProduct;
