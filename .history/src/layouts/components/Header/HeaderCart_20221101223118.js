import classNames from 'classnames/bind';
import { BsCart4 } from 'react-icons/bs';
import styles from './HeaderCart.module.scss';

const cx = classNames.bind(styles);

function HeaderCart() {
    return (
        <div className={cx('header__cart')}>
            <BsCart4 className={cx('header__cart-icon')} />
        </div>
    );
}

export default HeaderCart;
