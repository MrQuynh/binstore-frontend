import classNames from 'classnames/bind';
import { AiOutlineClose } from 'react-icons/ai';
import { FiSend } from 'react-icons/fi';
import Image from '../Image';
import styles from './Message.module.scss';

const cx = classNames.bind(styles);
function Message() {
    return (
        <div className={cx('wrapper')}>
            <div>
                <div>
                    <Image src="" />
                    <p>Mr Quynh</p>
                </div>
                <AiOutlineClose />
            </div>
            <div></div>
            <div>
                <div>
                    <input type="text" placeholder="Aa" />
                </div>
                <FiSend />
            </div>
        </div>
    );
}

export default Message;
