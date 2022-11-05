import classNames from 'classnames/bind';
import styles from './Admin.module.scss';
const cx = classNames.bind(styles);

const listHeader = [
    { id: 0, name: 'Home' },
    { id: 1, name: 'Products' },
    { id: 2, name: 'Bookings' },
];
function Admin() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <ul>
                    {listHeader.map((item, index) => (
                        <li key={index}>{item.name}</li>
                    ))}
                </ul>
            </div>
            <div className={cx('container')}></div>
        </div>
    );
}

export default Admin;
