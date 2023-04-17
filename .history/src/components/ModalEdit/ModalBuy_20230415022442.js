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
import { toast } from 'react-toastify';
import FormatPrice from '../FormatPrice/FormatPrice';

const cx = classNames.bind(styles);
function ModalBuy({ setIsModal }) {
    let useInfo = JSON.parse(localStorage.getItem('USER_LOG_IN'));
    const [cartList, setCartList] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [change, setChange] = useState();
    const [name, setName] = useState(useInfo ? useInfo.nickName : '');
    const [phone, setPhone] = useState(useInfo ? useInfo.phoneNumber : '');
    const [email, setEmail] = useState(useInfo ? useInfo.email : '');
    const [address, setAddress] = useState(useInfo ? useInfo.address : '');
    const [checkInvalid, setCheckIvalid] = useState(false);
    const [checkInvalidEmail, setCheckIvalidEmail] = useState(false);

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
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            );
    };
    const handleSubmit = () => {
        if (!name || !email || !phone || !address) {
            setCheckIvalid(true);
            return;
        } else {
            if (!validateEmail(email)) {
                setCheckIvalidEmail(true);
            } else {
                setCheckIvalidEmail(false);

                setIsLoading(true);
                let idProduct = [];
                cartList.map((item) => {
                    idProduct.push(item.id);
                });

                const dataSend = {
                    email,
                    address,
                    name,
                    phone,
                    status: 'S1',
                    idProduct: idProduct.toString(),
                };
                console.log(idProduct);

                bookingService(dataSend).then((res) => {
                    if (res) {
                        setIsLoading(false);
                        if (res.errCode === 0) {
                            localStorage.setItem('CART_LISTS', null);
                            setIsModal(false);
                            toast.success('Đặt hàng thành công!');
                        }
                    }
                });
            }
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

    const sumArray = (arr) => {
        let sum = 0;
        arr.map(function (value) {
            sum += Number(value.priceDown);
        });

        return sum;
    };
    return (
        <Portal>
            <div className={cx('wrapper')} onClick={() => setIsModal(false)}>
                {isLoading && <Loading />}
                <div className={cx('container')} onClick={(e) => e.stopPropagation()}>
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
                                            <Link
                                                to={`/${item.group}/${item.name.split(' ').join('-')}?id=${item.id}`}
                                                onClick={() => setIsModal(false)}
                                            >
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
                                            <p>
                                                <FormatPrice price={item.priceDown} />
                                            </p>
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
                                        {cartList && cartList.length > 0 ? (
                                            <FormatPrice price={sumArray(cartList)} />
                                        ) : (
                                            '0'
                                        )}
                                    </span>
                                </div>
                                <div className={cx('price-total')}>
                                    <p>Giảm:</p>
                                    <span>
                                        {cartList && cartList.length > 0 ? <FormatPrice price="970000" /> : '0đ'}
                                    </span>
                                </div>
                                <div className={cx('pay-total')}>
                                    <p>Cần thanh toán:</p>
                                    <span>
                                        {cartList && cartList.length > 0 ? (
                                            <FormatPrice price={sumArray(cartList) - 970000} />
                                        ) : (
                                            '0'
                                        )}
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
                                        type="email"
                                        required
                                        placeholder="Nhập email"
                                        disabled={JSON.parse(localStorage.getItem('IS_LOGIN'))}
                                    />
                                </div>
                                {checkInvalidEmail && (
                                    <div className={cx('check-invalid')}>Đề nghị điền đúng email! Không đùa đâu.</div>
                                )}
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
