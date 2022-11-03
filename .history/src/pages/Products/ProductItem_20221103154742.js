import classNames from 'classnames/bind';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import styles from './ProductItem.module.scss';

const cx = classNames.bind(styles);
function ProductItem() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>content</div>
        </div>
    );
}

export default ProductItem;
