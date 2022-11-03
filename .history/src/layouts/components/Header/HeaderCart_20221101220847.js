import classNames from 'classnames/bind';
import { BsCart4 } from 'react-icons/bs';
import styles from './HeaderCart.module.scss';

const cx = classNames.bind(styles);

function HeaderCart() {
    return (
        <div className={cx('header__cart')}>
            <div className={cx('header__cart-wrap')}>
                {/* <i className={cx('header__cart-icon', 'fa-solid fa-cart-shopping')}></i> */}
                <BsCart4 className={cx('header__cart-icon')} />
                <span className={cx('header__cart-noti')}>3</span>

                {/* <!-- no cart :: header__cart-list--no-cart --> */}
                <div className={cx('header__cart-list')}>
                    <img src="./assets/img/a1.PNG" alt="" className={cx('header__cart-no-cart-img')} />
                    <span className={cx('header__cart-list--no-cart-smg')}>Chưa có sản phẩm</span>

                    <p className={cx('header__cart-heading')}>Sản phẩm đã thêm</p>
                    <ul className={cx('header__cart-list-item')}>
                        {/* <!-- cart item --> */}
                        <li className={cx('header__cart-item')}>
                            <img src="./assets/img/a1.PNG" alt="" className={cx('header__cart-img')} />
                            <div className={cx('header__cart-item-info')}>
                                <div className={cx('header__cart-item-head')}>
                                    <h5 className={cx('header__cart-item-name')}>
                                        Giay sneaker 45TK Giay sneaker 45TK Giay sneaker 45TK Giay sneaker 45TK Giay
                                        sneaker 45TK Giay sneaker 45TK Giay sneaker 45TK
                                    </h5>
                                    <div className={cx('header__cart-item-price-wrap')}>
                                        <span className={cx('header__cart-item-price')}>2.000.000$</span>
                                        <span className={cx('header__cart-item-multiple')}>x</span>
                                        <span className={cx('header__cart-item-qnt')}>2</span>
                                    </div>
                                </div>
                                <div className={cx('header__cart-item-body')}>
                                    <span className={cx('header__cart-item-description')}>
                                        San pham cao cap nhap khau
                                    </span>
                                    <span className={cx('header__cart-item-remmove')}>Xóa</span>
                                </div>
                            </div>
                        </li>
                        <li className={cx('header__cart-item')}>
                            <img src="./assets/img/a1.PNG" alt="" className={cx('header__cart-img')} />
                            <div className={cx('header__cart-item-info')}>
                                <div className={cx('header__cart-item-head')}>
                                    <h5 className={cx('header__cart-item-name')}>Giay sneaker 45TK</h5>
                                    <div className={cx('header__cart-item-price-wrap')}>
                                        <span className={cx('header__cart-item-price')}>2.000.000$</span>
                                        <span className={cx('header__cart-item-multiple')}>x</span>
                                        <span className={cx('header__cart-item-qnt')}>2</span>
                                    </div>
                                </div>
                                <div className={cx('header__cart-item-body')}>
                                    <span className={cx('header__cart-item-description')}>
                                        San pham cao cap nhap khau
                                    </span>
                                    <span className={cx('header__cart-item-remmove')}>Xóa</span>
                                </div>
                            </div>
                        </li>
                        <li className={cx('header__cart-item')}>
                            <img src="./assets/img/a1.PNG" alt="" className={cx('header__cart-img')} />
                            <div className={cx('header__cart-item-info')}>
                                <div className={cx('header__cart-item-head')}>
                                    <h5 className={cx('header__cart-item-name')}>Giay sneaker 45TK</h5>
                                    <div className={cx('header__cart-item-price-wrap')}>
                                        <span className={cx('header__cart-item-price')}>2.000.000$</span>
                                        <span className={cx('header__cart-item-multiple')}>x</span>
                                        <span className={cx('header__cart-item-qnt')}>2</span>
                                    </div>
                                </div>
                                <div className={cx('header__cart-item-body')}>
                                    <span className={cx('header__cart-item-description')}>
                                        San pham cao cap nhap khau
                                    </span>
                                    <span className={cx('header__cart-item-remmove')}>xóa</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <a href="/" className={cx('header__cart-view-cart', 'btn btn--primary')}>
                        Xem giỏ hàng
                    </a>
                </div>
            </div>
        </div>
    );
}

export default HeaderCart;
