import classNames from 'classnames/bind';
import { BsCart4 } from 'react-icons/bs';
import styles from './HeaderCart.module.scss';

const cx = classNames.bind(styles);

function HeaderCart() {
    return (
        <div className={cx('header__cart')}>
            <div className={cx('header__cart-wrap')}>
                <BsCart4 className={cx('header__cart-icon')} />
            </div>
        </div>
    );
}

export default HeaderCart;
