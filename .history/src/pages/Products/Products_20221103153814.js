import classNames from 'classnames/bind';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import styles from './Products.module.scss';

const cx = classNames.bind(styles);
function Products() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('head-box')}>
                <div className={cx('card-header')}>
                    Điện thoại <p>(24 sản phẩm)</p>
                </div>
                <div className={cx('list-tag')}>
                    <p>Lọc theo:</p>
                    <ul>
                        <li className={cx('item-tag')}>
                            Samsung <AiOutlineCloseCircle className={cx('icon-tag')} />
                        </li>
                        <li className={cx('item-tag')}>
                            Xóa tất cả <AiOutlineCloseCircle className={cx('icon-tag')} />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Products;
