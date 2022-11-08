import classNames from 'classnames/bind';
import styles from './UserLogin.module.scss';
const cx = classNames.bind(styles);
function UserLogin() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('left')}>left</div>
                <div className={cx('right')}>right</div>
            </div>
        </div>
    );
}

export default UserLogin;
