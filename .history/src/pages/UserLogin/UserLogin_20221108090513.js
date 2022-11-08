import classNames from 'classnames/bind';
import { AiFillEdit, AiOutlineUser } from 'react-icons/ai';
import Image from '~/components/Image';
import styles from './UserLogin.module.scss';
const cx = classNames.bind(styles);
function UserLogin() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('left')}>
                    <div className={cx('info')}>
                        <Image className={cx('avatar')} />
                        <div>
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
                </div>
                <div className={cx('right')}>right</div>
            </div>
        </div>
    );
}

export default UserLogin;
