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
    { id: 0, title: 'Chờ xác nhận' },
    { id: 2, title: 'Đang giao' },
    { id: 3, title: 'Đã bán' },
];
function AdminBookings() {
    const [bookingProduct, setBookingProduct] = useState('');
    const [productEdit, setProductEdit] = useState('');
    const [isModal, setIsModal] = useState(false);
    const [isModalEdit, setIsModalEdit] = useState(false);

    useEffect(() => {
        getBookingAdmin('S1').then((data) => {
            if (data && data.errCode === 0) {
                setBookingProduct(data.data);
            }
        });
    }, []);
    const handleDelete = (id) => {
        deleteAProductService(id).then((res) => {
            if (res.errCode === 0) {
                toast.success('Delete user successfully!');
            } else {
                toast.error('Delete user fail!');
            }
        });
    };
    const handleEdit = (data) => {
        setIsModalEdit(true);
        setProductEdit(data);
    };
    return (
        <div className={cx('wrapper')}>
            {isModal && <ModalCreateProduct setIsModal={setIsModal} />}
            {isModalEdit && <ModalEditProduct setIsModalEdit={setIsModalEdit} data={productEdit} />}
            <div className={cx('container')}>
                <div className={cx('title')}>Manage Bookings</div>

                <div className={cx('btn-body')}>
                    {status.map((item) => (
                        <div className={cx('status')} key={item.id}>
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
                                    <td className={cx('table-action')}>
                                        {item?.productData?.name}
                                        {/* <div>
                                            <AiFillEdit
                                                className={cx('actions-icon')}
                                                onClick={() => handleEdit(item)}
                                            />
                                            <BsFillTrashFill
                                                className={cx('actions-icon')}
                                                onClick={() => handleDelete(item.id)}
                                            />
                                        </div> */}
                                    </td>
                                </tr>
                            </tbody>
                        ))}
                </table>
            </div>
        </div>
    );
}

export default AdminBookings;
