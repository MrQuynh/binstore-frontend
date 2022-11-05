import classNames from 'classnames/bind';
import { memo, useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import Portal from '~/components/Portal';
import styles from './ModalSettings.module.scss';
import * as userService from '~/services/userService';
import { createBrowserHistory } from 'history';
import { FormattedMessage } from 'react-intl';

const cx = classNames.bind(styles);
function ModuleSettings({ title, setIsModal, idVideo }) {
    const HandleCancel = () => {
        setIsModal(false);
    };

    return (
        <Portal>
            <div className={cx('wrapper')} onClick={() => setIsModal(false)}>
                <div className={cx('btn-save')} onClick={HandleCancel}>
                    Done
                </div>
            </div>
        </Portal>
    );
}

export default memo(ModuleSettings);
