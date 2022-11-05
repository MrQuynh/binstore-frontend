import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Banner from '~/layouts/components/Banner';
import styles from './DetailProduct.module.scss';
const cx = classNames.bind(styles);

function DetailProduct() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div>
                    <div className={cx('direct')}>
                        <ol>
                            <Link to="/">
                                <li className={cx('direct-active')}>Trang chủ</li>
                            </Link>
                            <li>/ Điện thoại</li>
                            <li>/ Apple(Iphone)</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailProduct;
