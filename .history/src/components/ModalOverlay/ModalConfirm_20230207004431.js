import classNames from 'classnames/bind';
import styles from './ModalConfirm.module.scss';

import Portal from '~/components/Portal';

const cx = classNames.bind(styles);

function ModalConfirm({ setModal }) {
    return (
        <Portal>
            <div className={cx('wrapper')} onClick={() => setModal(false)}>
                confirm
            </div>
        </Portal>
    );
}

export default ModalConfirm;
