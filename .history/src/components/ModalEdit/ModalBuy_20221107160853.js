import classNames from 'classnames/bind';
import { memo, useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Portal from '~/components/Portal';
import styles from './ModalBuy.module.scss';

import Image from '../Image';
import { BsFillTrashFill } from 'react-icons/bs';
import Button from '../Button';
import { Link } from 'react-router-dom';
import { bookingService } from '~/services/userService';
import Loading from '../Loading/Loading';

const cx = classNames.bind(styles);

function ModalBuy({ setIsModal }) {
    const [cartList, setCartList] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [change, setChange] = useState();
    const [name, setName] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();
    const [address, setAddress] = useState();
    const [checkInvalid, setCheckIvalid] = useState(false);

    const handleChangeName = (e) => {
        setName(e.target.value);

        setCheckIvalid(false);
    };
    const handleChangePhone = (e) => {
        setPhone(e.target.value);
        setCheckIvalid(false);
    };
    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
        setCheckIvalid(false);
    };
    const handleChangeAddress = (e) => {
        setAddress(e.target.value);
        setCheckIvalid(false);
    };

    const handleSubmit = () => {
        if (!name || !email || !phone || !address) {
            setCheckIvalid(true);
        } else {
            let listProducts = [];
            cartList.map((item) => {
                listProducts.push(item.id);
            });

            const dataSend = {
                email,
                address,
                name,
                phone,
                status: 'S1',
                listProducts: listProducts.toString(),
            };

            bookingService(dataSend)
                .then((res) => {
                    if (!res) {
                        setIsLoading(true);
                    } else {
                        setIsLoading(false);
                    }
                })
                .catch((error) => console.log(error));
        }
    };

    useEffect(() => {
        let cartList1 = JSON.parse(localStorage.getItem('CART_LISTS'));
        cartList1 = cartList1 && cartList1.length > 0 ? cartList1?.reverse() : cartList1;
        setCartList(cartList1);
    }, [change]);

    const handleDelete = (index) => {
        let newList = cartList;
        if (index > -1) {
            newList.splice(index, 1);
        }
        setChange(Math.random());
        setCartList(newList);
        localStorage.setItem('CART_LISTS', JSON.stringify(newList));
    };

    return (
        <Portal>
            <div className={cx('wrapper')}>
                {isLoading && <Loading />}
                <div className={cx('container')}>
                    <div className={cx('header')}>
                        <div>Có {cartList ? cartList.length : 0} sản phẩm trong giỏ hàng</div>
                        <div className={cx('icon-close')} onClick={() => setIsModal(false)}>
                            <AiOutlineClose className={cx('icon-close-item')} />
                        </div>
                    </div>
                    <div className={cx('body')}>
                        <div className={cx('list-product')}>
                            {cartList && cartList.length > 0 ? (
                                cartList.map((item, index) => (
                                    <div className={cx('item')} key={index}>
                                        <div className={cx('item-image')}>
                                            <Image className={cx('image-product')} src={item.image} />
                                        </div>
                                        <div className={cx('info-product')}>
                                            <Link to={`/${item.group}/${item.name.split(' ').join('-')}?id=${item.id}`}>
                                                <div className={cx('name-product')}>{item.name}</div>
                                            </Link>
                                            <ul className={cx('detail-product')}>
                                                <li>
                                                    Giảm 50% eSim MobiFone Big Data 1T khi mua kèm {item.name} giá chỉ
                                                    150.000đ
                                                </li>

                                                <li>Tặng gói iCloud 50GB miễn phí 3 tháng</li>
                                                <li>Giảm đến 20% củ sạc nhanh 25W</li>
                                            </ul>
                                        </div>
                                        <div className={cx('info-right-product')}>
                                            <p>{item.priceDown}đ</p>
                                            <span onClick={() => handleDelete(index)}>
                                                <BsFillTrashFill className={cx('icon-trash')} />
                                                Xóa
                                            </span>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className={cx('no-product')}>Bạn chưa có sản phẩm nào</div>
                            )}
                        </div>
                        <div className={cx('sale-code')}>
                            <div className={cx('sale-left')}>
                                <div className={cx('label-sale')}>Mã giảm giá</div>
                                <div className={cx('sale-code-input')}>
                                    <input type="text" placeholder="Nhập mã giảm giá" />
                                    <Button className={cx('sale-btn')}>Áp dụng</Button>
                                </div>
                            </div>
                            <div className={cx('sale-right')}>
                                <div className={cx('price-total')}>
                                    <p>Tổng tiền:</p>
                                    <span>
                                        {cartList && cartList.length > 0
                                            ? '' +
                                              cartList.reduce((a, b) => +b.priceDown.split('.').join('') + a, 0) /
                                                  1000000 +
                                              '0.000'
                                            : '0'}
                                        đ
                                    </span>
                                </div>
                                <div className={cx('price-total')}>
                                    <p>Giảm:</p>
                                    <span>{cartList && cartList.length > 0 ? '-970.000đ' : '0đ'}</span>
                                </div>
                                <div className={cx('pay-total')}>
                                    <p>Cần thanh toán:</p>
                                    <span>
                                        {cartList && cartList.length > 0
                                            ? '' +
                                              cartList.reduce(
                                                  (a, b) => +b.priceDown.split('.').join('') + a - 970000,
                                                  0,
                                              ) /
                                                  1000000 +
                                              '0.000'
                                            : '0'}
                                        đ
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className={cx('info-user')}>
                            <div className={cx('info-user-title')}>Thông tin khách hàng</div>
                            <div className={cx('info-user-form')}>
                                <div className={cx('info-user-top')}>
                                    <input
                                        value={name}
                                        onChange={handleChangeName}
                                        className={cx('info-user-input')}
                                        type="text"
                                        placeholder="Nhập họ và tên"
                                    />
                                    <input
                                        value={phone}
                                        onChange={handleChangePhone}
                                        className={cx('info-user-input')}
                                        type="text"
                                        placeholder="Nhập số điện thoại"
                                    />
                                </div>
                                <div className={cx('info-user-top')}>
                                    <input
                                        value={email}
                                        onChange={handleChangeEmail}
                                        className={cx('info-user-input')}
                                        type="text"
                                        placeholder="Nhập email"
                                    />
                                </div>
                                <input
                                    value={address}
                                    onChange={handleChangeAddress}
                                    className={cx('info-user-input')}
                                    type="text"
                                    placeholder="Nhập địa chỉ"
                                />
                            </div>
                            {checkInvalid && (
                                <div className={cx('check-invalid')}>*Nhập đầy đủ thông tin rồi mua nhé!</div>
                            )}
                        </div>
                        <div className={cx('footer')}>
                            {cartList && cartList.length > 0 && (
                                <>
                                    <div className={cx('footer-btn')}>
                                        <Button className={cx('btn-finish')} onClick={handleSubmit}>
                                            HOÀN TẤT ĐẶT HÀNG
                                        </Button>
                                    </div>
                                </>
                            )}
                            <div className={cx('footer-end')}>
                                Bằng cách đặt hàng, bạn đồng ý với <span>Điều khoản sử dụng</span> của Bin Shop
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Portal>
    );
}

export default memo(ModalBuy);
