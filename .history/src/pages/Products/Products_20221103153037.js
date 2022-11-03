import classNames from 'classnames/bind';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import styles from './Products.module.scss';

const cx = classNames.bind(styles);
function Products() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('head-box')}>
                <h2 className={cx('card-header')}>
                    Điện thoại <p>(24 sản phẩm)</p>
                </h2>
                <div className={cx('list-tag')}>
                    <p>Lọc theo:</p>
                    <ul>
                        <li className={cx('item-tag')}>
                            Samsung <AiOutlineCloseCircle />
                        </li>
                        <li className={cx('item-tag')}>
                            Xóa tất cả <AiOutlineCloseCircle />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Products;
