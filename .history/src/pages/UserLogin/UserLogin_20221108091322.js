import classNames from 'classnames/bind';
import { AiFillEdit, AiOutlineBell, AiOutlineUser } from 'react-icons/ai';
import { BiNotepad, BiStore } from 'react-icons/bi';
import { BsCoin } from 'react-icons/bs';
import Image from '~/components/Image';
import styles from './UserLogin.module.scss';
const cx = classNames.bind(styles);
function UserLogin() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('left')}>
                    <div className={cx('info')}>
                        <Image className={cx('avatar')} src="" />
                        <div className={cx('info-icon')}>
                            <div className={cx('name')}>jujo bin</div>
                            <div className={cx('edit')}>
                                <AiFillEdit />
                                Sửa hồ sơ
                            </div>
                        </div>
                    </div>
                    <div className={cx('list-title')}>
                        <AiOutlineUser className={cx('list-title-icon')} /> Tài khoản của tôi
                    </div>
                    <div className={cx('list-title')}>
                        <AiOutlineBell className={cx('list-title-icon')} /> Thông báo
                    </div>
                    <div className={cx('list-title')}>
                        <BiNotepad className={cx('list-title-icon')} /> Đơn mua
                    </div>
                    <div className={cx('list-title')}>
                        <BiStore className={cx('list-title-icon')} /> Kho lưu trữ
                    </div>
                    <div className={cx('list-title')}>
                        <BsCoin className={cx('list-title-icon')} /> Xu
                    </div>
                </div>
                <div className={cx('right')}>right</div>
            </div>
        </div>
    );
}

export default UserLogin;
