import classNames from 'classnames/bind';
import { AiOutlineClose } from 'react-icons/ai';
import { FiSend } from 'react-icons/fi';
import Image from '../Image';
import styles from './Message.module.scss';

const cx = classNames.bind(styles);
function TextMessage() {
    return (
        <div className={cx('text-message')}>
            <div>
                <Image src="" />
                <div>Solar E TUYỂN DỤNG – THỰC TẬP SINH Năm 2,3 THỰC TẬP CHĂM SÓC KHÁCH HÀNG</div>
                <div>1 hour ago</div>
            </div>
            <div></div>
        </div>
    );
}

export default TextMessage;
