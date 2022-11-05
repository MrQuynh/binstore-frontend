import classNames from 'classnames/bind';
import { memo, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Portal from '~/components/Portal';
import styles from './ModalBuy.module.scss';

import Image from '../Image';

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
                        <div className={cx('list-product')}>
                            <div className={cx('item')}>
                                <Image className={cx('image-product')} />
                                <div className={cx('info-product')}>
                                    <div className={cx('name-product')}>Iphone 13 Pro Max 128GB</div>
                                    <div>
                                        Giảm 50% eSim MobiFone Big Data 1T khi mua kèm IPhone giá chỉ 150.000đ Giảm đến
                                        30% hệ sinh thái Apple Tặng PMH 400.000đ khi mua Sạc 35W Bảo hành 2 năm chính
                                        hãng Thu cũ đổi mới trợ giá ngay 15% đến 3 triệu (SmartExchange) Tặng gói iCloud
                                        50GB miễn phí 3 tháng
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Portal>
    );
}

export default memo(ModalBuy);
