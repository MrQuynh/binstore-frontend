import classNames from 'classnames/bind';
import { useState } from 'react';

import styles from './AdminUsers.module.scss';
import AdminProducts from './AdminProducts/AdminProducts';
const cx = classNames.bind(styles);

const listHeader = [
    { id: 0, name: 'Home', value: '' },
    { id: 1, name: 'Products', value: <AdminProducts /> },
    { id: 2, name: 'Bookings', value: '' },
];
function Admin() {
    const [render, setRender] = useState('');
    const [headerActive, setHeaderActive] = useState(0);
    const handleActiveAdmin = (item) => {
        setHeaderActive(item.id);
        setRender(item.value);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <ul>
                    {listHeader.map((item, index) => (
                        <li
                            key={index}
                            className={cx(headerActive === index && 'headerActive')}
                            onClick={() => handleActiveAdmin(item)}
                        >
                            {item.name}
                        </li>
                    ))}
                </ul>
            </div>
            <div className={cx('container')}>{render}</div>
        </div>
    );
}

export default Admin;
