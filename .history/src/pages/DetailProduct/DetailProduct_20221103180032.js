import classNames from 'classnames/bind';
import Banner from '~/layouts/components/Banner';
import styles from './DetailProduct.module.scss';
const cx = classNames.bind(styles);

function DetailProduct() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <Banner />
            </div>
        </div>
    );
}

export default DetailProduct;
