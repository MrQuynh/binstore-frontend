import classNames from 'classnames/bind';
import styles from './Admin.module.scss';
const cx = classNames.bind(styles);

function Admin() {
    return <div className={cx('wrapper')}></div>;
}

export default Admin;
