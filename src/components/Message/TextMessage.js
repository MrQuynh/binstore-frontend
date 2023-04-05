import classNames from 'classnames/bind';
import moment from 'moment';
import { AiOutlineClose } from 'react-icons/ai';
import { FiSend } from 'react-icons/fi';
import Image from '../Image';
import styles from './Message.module.scss';

const cx = classNames.bind(styles);
function TextMessage({ own, data }) {
    return (
        <div className={cx('text-message', own && 'isOwn')}>
            <div className={cx('contain')}>
                <div className={cx('send-avatar')}>
                    <Image src="https://www.svgrepo.com/show/217771/shopping-logo.svg" className={cx('send-image')} />
                </div>
                <div className={cx('send-text')}>{data.text}</div>
            </div>
            <div className={cx('send-time')}>{moment(data.createdAt).fromNow()} </div>
        </div>
    );
}

export default TextMessage;
