import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { getAllUsersService } from '~/services/adminService';

import styles from './Admin.module.scss';
import AdminBookings from './AdminBookings/AdminBookings';
import AdminProducts from './AdminProducts/AdminProducts';
import AdminUsers from './AdminUsers/AdminUsers';
const cx = classNames.bind(styles);

const listHeader = [
    { id: 0, name: 'Home', value: <AdminUsers /> },
    { id: 1, name: 'Products', value: <AdminProducts /> },
    { id: 2, name: 'Bookings', value: <AdminBookings /> },
];
function Admin() {
    const [render, setRender] = useState('');
    const [headerActive, setHeaderActive] = useState('');
    useEffect(() => {
        setRender(<AdminUsers />);
    }, []);
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
