import classNames from 'classnames/bind';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { confirmBooking, getBookingAdmin } from '~/services/adminService';
import { cancelService } from '~/services/productService';

import styles from './AdminBookings.module.scss';
const cx = classNames.bind(styles);
const status = [
    { id: 0, title: 'Chờ xác nhận', keyMap: 'S1' },
    { id: 1, title: 'Đang giao', keyMap: 'S2' },
    { id: 2, title: 'Đã bán', keyMap: 'S3' },
];
function AdminBookings() {
    const [bookingProduct, setBookingProduct] = useState('');
    const [active, setActive] = useState(0);
    const [change, setChange] = useState('');

    useEffect(() => {
        getBookingAdmin(status[active].keyMap).then((data) => {
            if (data && data.errCode === 0) {
                setBookingProduct(data.data);
            }
        });
    }, [status[active].keyMap, change]);
    const handleActive = (item) => {
        setActive(item.id);
    };

    const handleConfirm = (item, index) => {
        confirmBooking({ id: item.id, status: active === 1 ? 'S3' : 'S2' }).then((res) => {
            if (res && res.errCode === 0) {
                setChange(Math.random());
            }
        });
    };

    const handleCancel = (item) => {
        cancelService({ id: item.id, status: 'S4' }).then((res) => {
            if (res && res.errCode === 0) {
                setChange(Math.random());
            }
        });
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('title')}>Manage Bookings</div>

                <div className={cx('btn-body')}>
                    {status.map((item, index) => (
                        <div
                            className={cx('status', active === index && 'status-active')}
                            key={item.id}
                            onClick={() => handleActive(item)}
                        >
                            {item.title}
                        </div>
                    ))}
                </div>

                <table className={cx('table')}>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Id</th>
                            <th colSpan="2">User</th>
                            <th colSpan="2">Phone</th>
                            <th>Product</th>
                            {active === 1 && <th>Address</th>}
                            <th>{active === 2 ? 'Date' : 'Action'}</th>
                        </tr>
                    </thead>
                    {bookingProduct &&
                        bookingProduct?.length > 0 &&
                        bookingProduct.map((item, index) => (
                            <tbody key={index}>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{item.id}</td>
                                    <td colSpan="2">{item.name}</td>
                                    <td colSpan="2">{item.phone}</td>
                                    <td className={cx('table-action')}>
                                        {item?.productData?.name}
                                        {/* {active === 1 ? item?.address : item?.productData?.name} */}
                                    </td>
                                    {active === 1 && <td className={cx('table-action')}>{item?.address}</td>}
                                    {active === 2 ? (
                                        <td>{moment(item?.createdAt).format('MMM Do YY')}</td>
                                    ) : (
                                        <td className={cx('confirm')}>
                                            <p onClick={() => handleConfirm(item, index)}>
                                                {active === 1 ? 'Đã giao' : 'Xác nhận'}
                                            </p>
                                            <p onClick={() => handleCancel(item, index)}>Hủy</p>
                                        </td>
                                    )}
                                </tr>
                            </tbody>
                        ))}
                </table>
            </div>
        </div>
    );
}

export default AdminBookings;
