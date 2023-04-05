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
                    <Image
                        src="https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/328739438_916717202676805_4359463552560126077_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=e3f864&_nc_ohc=OZxTRCmWyikAX9mFo54&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfBgD_df9l7sMbNd1q5pVb5RqHA8QgkxaRXy0iBxlemmAw&oe=63F45E4C"
                        className={cx('send-image')}
                    />
                </div>
                <div className={cx('send-text')}>Hi everyone, how are you today?</div>
            </div>
            <div className={cx('send-time')}>1 hour ago</div>
        </div>
    );
}

export default TextMessage;
