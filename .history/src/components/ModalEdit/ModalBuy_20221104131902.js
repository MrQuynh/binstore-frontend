import classNames from 'classnames/bind';
import { memo, useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
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
                <div className={cx('container')}>sdf</div>
            </div>
        </Portal>
    );
}

export default memo(ModalBuy);
