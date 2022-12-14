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

    const handleSubmit = () => {
        if (!name || !email || !phone || !address) {
            setCheckIvalid(true);
            return;
        } else {
            setIsLoading(true);
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
                    if (res) {
                        setIsLoading(false);
                        if (res.errCode === 0) {
                            localStorage.setItem('CART_LISTS', null);
                            setIsModal(false);
                            toast.success('?????t h??ng th??nh c??ng!');
                        }
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
                        <div>C?? {cartList ? cartList.length : 0} s???n ph???m trong gi??? h??ng</div>
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
                                                    Gi???m 50% eSim MobiFone Big Data 1T khi mua k??m {item.name} gi?? ch???
                                                    150.000??
                                                </li>

                                                <li>T???ng g??i iCloud 50GB mi???n ph?? 3 th??ng</li>
                                                <li>Gi???m ?????n 20% c??? s???c nhanh 25W</li>
                                            </ul>
                                        </div>
                                        <div className={cx('info-right-product')}>
                                            <p>{item.priceDown}??</p>
                                            <span onClick={() => handleDelete(index)}>
                                                <BsFillTrashFill className={cx('icon-trash')} />
                                                X??a
                                            </span>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className={cx('no-product')}>B???n ch??a c?? s???n ph???m n??o</div>
                            )}
                        </div>
                        <div className={cx('sale-code')}>
                            <div className={cx('sale-left')}>
                                <div className={cx('label-sale')}>M?? gi???m gi??</div>
                                <div className={cx('sale-code-input')}>
                                    <input type="text" placeholder="Nh???p m?? gi???m gi??" />
                                    <Button className={cx('sale-btn')}>??p d???ng</Button>
                                </div>
                            </div>
                            <div className={cx('sale-right')}>
                                <div className={cx('price-total')}>
                                    <p>T???ng ti???n:</p>
                                    <span>
                                        {cartList && cartList.length > 0
                                            ? '' +
                                              cartList.reduce((a, b) => +b.priceDown.split('.').join('') + a, 0) /
                                                  1000000 +
                                              '0.000'
                                            : '0'}
                                        ??
                                    </span>
                                </div>
                                <div className={cx('price-total')}>
                                    <p>Gi???m:</p>
                                    <span>{cartList && cartList.length > 0 ? '-970.000??' : '0??'}</span>
                                </div>
                                <div className={cx('pay-total')}>
                                    <p>C???n thanh to??n:</p>
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
                                        ??
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className={cx('info-user')}>
                            <div className={cx('info-user-title')}>Th??ng tin kh??ch h??ng</div>
                            <div className={cx('info-user-form')}>
                                <div className={cx('info-user-top')}>
                                    <input
                                        value={name}
                                        onChange={handleChangeName}
                                        className={cx('info-user-input')}
                                        type="text"
                                        placeholder="Nh???p h??? v?? t??n"
                                    />
                                    <input
                                        value={phone}
                                        onChange={handleChangePhone}
                                        className={cx('info-user-input')}
                                        type="text"
                                        placeholder="Nh???p s??? ??i???n tho???i"
                                    />
                                </div>
                                <div className={cx('info-user-top')}>
                                    <input
                                        value={email}
                                        onChange={handleChangeEmail}
                                        className={cx('info-user-input')}
                                        type="email"
                                        required
                                        placeholder="Nh???p email"
                                    />
                                </div>
                                {checkInvalidEmail && (
                                    <div className={cx('check-invalid')}>????? ngh??? ??i???n ????ng email! Kh??ng ????a ????u.</div>
                                )}
                                <input
                                    value={address}
                                    onChange={handleChangeAddress}
                                    className={cx('info-user-input')}
                                    type="text"
                                    placeholder="Nh???p ?????a ch???"
                                />
                            </div>
                            {checkInvalid && (
                                <div className={cx('check-invalid')}>*Nh???p ?????y ????? th??ng tin r???i mua nh??!</div>
                            )}
                        </div>
                        <div className={cx('footer')}>
                            {cartList && cartList.length > 0 && (
                                <>
                                    <div className={cx('footer-btn')}>
                                        <Button className={cx('btn-finish')} onClick={handleSubmit}>
                                            HO??N T???T ?????T H??NG
                                        </Button>
                                    </div>
                                </>
                            )}
                            <div className={cx('footer-end')}>
                                B???ng c??ch ?????t h??ng, b???n ?????ng ?? v???i <span>??i???u kho???n s??? d???ng</span> c???a Bin Shop
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Portal>
    );
}

export default memo(ModalBuy);
