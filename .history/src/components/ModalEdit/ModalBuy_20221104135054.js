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
                                    <ul className={cx('detail-product')}>
                                        <li>Giảm 50% eSim MobiFone Big Data 1T khi mua kèm IPhone giá chỉ 150.000đ</li>
                                        <li>Giảm đến 30% hệ sinh thái Apple</li>
                                        <li>Tặng PMH 400.000đ khi mua Sạc 35W</li>
                                        <li>Tặng gói iCloud 50GB miễn phí 3 tháng</li>
                                        <li>Giảm đến 20% củ sạc nhanh 25W</li>
                                    </ul>
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
