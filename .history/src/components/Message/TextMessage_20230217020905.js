import classNames from 'classnames/bind';
import { AiOutlineClose } from 'react-icons/ai';
import { FiSend } from 'react-icons/fi';
import Image from '../Image';
import styles from './Message.module.scss';

const cx = classNames.bind(styles);
function TextMessage() {
    return (
        <div className={cx('text-message')}>
            <div className={cx('contain')}>
                <div className={cx('send-avatar')}>
                    <Image src="" className={cx('send-image')} />
                </div>
                <div className={cx('send-text')}>
                    Solar E TUYỂN DỤNG – THỰC TẬP SINH Năm 2,3 THỰC TẬP CHĂM SÓC KHÁCH HÀNG
                </div>
            </div>
            <div className={cx('send-time')}>1 hour ago</div>
        </div>
    );
}

export default TextMessage;
