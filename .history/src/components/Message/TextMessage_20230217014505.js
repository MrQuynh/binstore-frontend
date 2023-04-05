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
                <Image src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/328824932_561325039350679_49188689480287917_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=mPfIYUII-AwAX-BJFv3&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfBRgZWUY6ld1uaj1AesDeVjsEzD_b5rS_7gMjFPbJYRfA&oe=63F3EE3F" />
                <div>Solar E TUYỂN DỤNG – THỰC TẬP SINH Năm 2,3 THỰC TẬP CHĂM SÓC KHÁCH HÀNG</div>
                <div>1 hour ago</div>
            </div>
            <div></div>
        </div>
    );
}

export default TextMessage;
