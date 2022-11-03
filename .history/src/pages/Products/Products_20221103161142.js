import classNames from 'classnames/bind';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import ProductItem from './ProductItem';
import styles from './Products.module.scss';

const cx = classNames.bind(styles);
const sortList = [
    { id: 0, name: 'Bán chạy nhất' },
    { id: 1, name: 'Trả góp 0%' },
    { id: 2, name: 'Giá thấp' },
    { id: 3, name: 'Giá cao' },
    { id: 4, name: 'Ưu đãi online' },
];
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
            <div className={cx('head-box')}>
                <div className={cx('sort-box')}>
                    <p className={cx('sort-title')}>Ưu tiên xem:</p>
                    <div className={cx('sort-list')}>
                        <p className={cx('sort-list-item', 'sort-active')}>Bán chạy nhất</p>
                        <p className={cx('sort-list-item')}>Bán chạy nhất</p>
                    </div>
                </div>
                <ProductItem />
            </div>
        </div>
    );
}

export default Products;
