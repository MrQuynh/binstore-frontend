import classNames from 'classnames/bind';
import { memo, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Portal from '~/components/Portal';
import styles from './ModalCreateProduct.module.scss';

import Image from '../Image';
import { BsFillTrashFill } from 'react-icons/bs';
import Button from '../Button';

const cx = classNames.bind(styles);
function ModalCreateProduct({ setIsModal }) {
    return (
        <Portal>
            <div className={cx('wrapper')}>
                <div className={cx('container')}>
                    <div className={cx('header')}>
                        <div>Tạo sản phẩm mới</div>
                        <div className={cx('icon-close')} onClick={() => setIsModal(false)}>
                            <AiOutlineClose className={cx('icon-close-item')} />
                        </div>
                    </div>
                    <div className={cx('body')}>
                        <div className={cx('footer')}>
                            <div className={cx('footer-btn')}>
                                <Button className={cx('btn-finish')}>Tạo mới</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Portal>
    );
}

export default memo(ModalCreateProduct);
