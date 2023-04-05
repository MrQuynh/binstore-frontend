import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';
import { toast } from 'react-toastify';
import Button from '~/components/Button';
import ModalCreateProduct from '~/components/ModalEdit/ModalCreateProduct';
import ModalEditProduct from '~/components/ModalEdit/ModalEditProduct';

import { deleteAProductService, getAllProductsService, getBookingAdmin } from '~/services/adminService';

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

    useEffect(() => {
        getBookingAdmin(status[active].keyMap).then((data) => {
            if (data && data.errCode === 0) {
                setBookingProduct(data.data);
            }
        });
    }, [status[active].keyMap]);
    const handleActive = (item) => {
        setActive(item.id);
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
                            <th>id</th>
                            <th colSpan="2">User</th>
                            <th colSpan="2">Phone</th>
                            <th>Product</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {bookingProduct &&
                        bookingProduct.length > 0 &&
                        bookingProduct.map((item, index) => (
                            <tbody key={index}>
                                <tr>
                                    <td>{item.id}</td>
                                    <td colSpan="2">{item.name}</td>
                                    <td colSpan="2">{item.phone}</td>
                                    <td className={cx('table-action')}>{item?.productData?.name}</td>
                                    <td>Confirm</td>
                                </tr>
                            </tbody>
                        ))}
                </table>
            </div>
        </div>
    );
}

export default AdminBookings;
