import classNames from 'classnames/bind';
import { useState } from 'react';

import styles from './Admin.module.scss';
import AdminProducts from './AdminProducts/AdminProducts';
const cx = classNames.bind(styles);

const listHeader = [
    { id: 0, name: 'Home' },
    { id: 1, name: 'Products' },
    { id: 2, name: 'Bookings' },
];
function Admin() {
    const [headerActive, setHeaderActive] = useState(0);
    const handleActiveAdmin = (item) => {
        setHeaderActive(item.id);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <ul>
                    {listHeader.map((item, index) => (
                        <li
                            key={index}
                            className={cx(headerActive === index && 'headerActive')}
                            onClick={handleActiveAdmin(item)}
                        >
                            {item.name}
                        </li>
                    ))}
                </ul>
            </div>
            <div className={cx('container')}>
                <AdminProducts />
            </div>
        </div>
    );
}

export default Admin;
