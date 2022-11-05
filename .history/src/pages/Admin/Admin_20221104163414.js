import classNames from 'classnames/bind';
import styles from './Admin.module.scss';
const cx = classNames.bind(styles);

const listHeader = [
    { id: 0, name: 'Home' },
    { id: 0, name: 'Home' },
    { id: 0, name: 'Home' },
];
function Admin() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <ul>
                    <li>Users</li>
                    <li>Products</li>
                    <li>Bookings</li>
                </ul>
            </div>
            <div className={cx('container')}></div>
        </div>
    );
}

export default Admin;
