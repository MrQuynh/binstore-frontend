import classNames from 'classnames/bind';
import styles from './Admin.module.scss';
const cx = classNames.bind(styles);

function Admin() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>header</div>
            <div className={cx('container')}></div>
        </div>
    );
}

export default Admin;
