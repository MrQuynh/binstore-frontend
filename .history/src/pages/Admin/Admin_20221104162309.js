import classNames from 'classnames/bind';
import styles from './Admin.module.scss';
const cx = classNames.bind(styles);

function Admin() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('header')}></div>
            </div>
        </div>
    );
}

export default Admin;
