import classNames from 'classnames/bind';
import { memo, useState } from 'react';
import { AiFillCaretDown, AiOutlineClose } from 'react-icons/ai';
import Portal from '~/components/Portal';
import styles from './ModalBuy.module.scss';
import * as userService from '~/services/userService';
import { createBrowserHistory } from 'history';
import { FormattedMessage } from 'react-intl';

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
                    <div className={cx('body')}></div>
                </div>
            </div>
        </Portal>
    );
}

export default memo(ModalBuy);
