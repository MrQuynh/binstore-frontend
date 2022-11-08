import classNames from 'classnames/bind';
import { AiFillEdit } from 'react-icons/ai';
import Image from '~/components/Image';
import styles from './UserLogin.module.scss';
const cx = classNames.bind(styles);
function UserLogin() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('left')}>
                    <div>
                        <Image />
                        <div>
                            <div>jujo bin</div>
                            <div>
                                <AiFillEdit />
                                Sửa hồ sơ
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('right')}>right</div>
            </div>
        </div>
    );
}

export default UserLogin;
