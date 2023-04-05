import classNames from 'classnames/bind';
import styles from './ModalConfirm.module.scss';

import Portal from '~/components/Portal';

const cx = classNames.bind(styles);

function ModalConfirm({ setModal }) {
    return (
        <Portal>
            <div className={cx('wrapper')} onClick={() => setModal(false)}>
                <div className={cx('body')} onClick={(e) => e.stopPropagation()}>
                    confirm
                </div>
            </div>
        </Portal>
    );
}

export default ModalConfirm;
