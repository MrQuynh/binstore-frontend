import classNames from 'classnames/bind';
import { memo, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Portal from '~/components/Portal';
import styles from './ModalBuy.module.scss';

import Image from '../Image';
import { BsFillTrashFill } from 'react-icons/bs';
import Button from '../Button';

const cx = classNames.bind(styles);
function ModalBuy({ title, setIsModal, idVideo }) {
    return (
        <Portal>
            <div className={cx('wrapper')} onClick={() => setIsModal(false)}>
                <div className={cx('container')}>
                    <div className={cx('header')}>
                        <div>Có 1 sản phẩm trong giỏ hàng</div>
                        <div className={cx('icon-close')} onClick={() => setIsModal(false)}>
                            <AiOutlineClose className={cx('icon-close-item')} />
                        </div>
                    </div>
                    <div className={cx('body')}>
                        <div className={cx('item')}>
                            <div className={cx('item-image')}>
                                <Image
                                    className={cx('image-product')}
                                    src="https://fptshop.com.vn/Uploads/Originals/2022/4/19/637859778843241685_iphone-13-pro-max-vang-1.jpg"
                                />
                            </div>
                            <div className={cx('info-product')}>
                                <div className={cx('name-product')}>Iphone 13 Pro Max 128GB</div>
                                <ul className={cx('detail-product')}>
                                    <li>Giảm 50% eSim MobiFone Big Data 1T khi mua kèm IPhone giá chỉ 150.000đ</li>
                                    <li>Giảm đến 30% hệ sinh thái Apple</li>
                                    <li>Tặng PMH 400.000đ khi mua Sạc 35W</li>
                                    <li>Tặng gói iCloud 50GB miễn phí 3 tháng</li>
                                    <li>Giảm đến 20% củ sạc nhanh 25W</li>
                                </ul>
                            </div>
                            <div className={cx('info-right-product')}>
                                <p>33.999.000đ</p>
                                <span>
                                    <BsFillTrashFill className={cx('icon-trash')} />
                                    Xóa
                                </span>
                            </div>
                        </div>
                        <div className={cx('item')}>
                            <div className={cx('item-image')}>
                                <Image
                                    className={cx('image-product')}
                                    src="https://fptshop.com.vn/Uploads/Originals/2022/4/19/637859778843241685_iphone-13-pro-max-vang-1.jpg"
                                />
                            </div>
                            <div className={cx('info-product')}>
                                <div className={cx('name-product')}>Iphone 13 Pro Max 128GB</div>
                                <ul className={cx('detail-product')}>
                                    <li>Giảm 50% eSim MobiFone Big Data 1T khi mua kèm IPhone giá chỉ 150.000đ</li>
                                    <li>Giảm đến 30% hệ sinh thái Apple</li>
                                    <li>Tặng PMH 400.000đ khi mua Sạc 35W</li>
                                    <li>Tặng gói iCloud 50GB miễn phí 3 tháng</li>
                                    <li>Giảm đến 20% củ sạc nhanh 25W</li>
                                </ul>
                            </div>
                            <div className={cx('info-right-product')}>
                                <p>33.999.000đ</p>
                                <span>
                                    <BsFillTrashFill className={cx('icon-trash')} />
                                    Xóa
                                </span>
                            </div>
                        </div>
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
                                <span>101.970.000đ</span>
                            </div>
                            <div className={cx('price-total')}>
                                <p>Giảm:</p>
                                <span>-970.000đ</span>
                            </div>
                            <div className={cx('pay-total')}>
                                <p>Giảm:</p>
                                <span>-970.000đ</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Portal>
    );
}

export default memo(ModalBuy);
