import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';
import { toast } from 'react-toastify';
import Button from '~/components/Button';
import ModalCreateProduct from '~/components/ModalEdit/ModalCreateProduct';
import ModalEditProduct from '~/components/ModalEdit/ModalEditProduct';

import { deleteAProductService, getAllProductsService } from '~/services/adminService';

import styles from './AdminBookings.module.scss';
const cx = classNames.bind(styles);

function AdminBookings() {
    const [products, setProducts] = useState('');
    const [productEdit, setProductEdit] = useState('');
    const [isModal, setIsModal] = useState(false);
    const [isModalEdit, setIsModalEdit] = useState(false);

    useEffect(() => {
        getAllProductsService().then((data) => {
            if (data) {
                setProducts(data);
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
                <div className={cx('title')}>Manage Users</div>

                <div className={cx('btn-body')}>
                    <Button className={cx('btn')} onClick={() => setIsModal(true)}>
                        Tạo mới
                    </Button>
                </div>

                <table className={cx('table')}>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th colSpan="2">Name</th>
                            <th colSpan="2">Group</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    {products &&
                        products.length > 0 &&
                        products.map((item, index) => (
                            <tbody key={index}>
                                <tr>
                                    <td>{item.id}</td>
                                    <td colSpan="2">{item.name}</td>
                                    <td colSpan="2">{item.group}</td>
                                    <td className={cx('table-action')}>
                                        <div>
                                            <AiFillEdit
                                                className={cx('actions-icon')}
                                                onClick={() => handleEdit(item)}
                                            />
                                            <BsFillTrashFill
                                                className={cx('actions-icon')}
                                                onClick={() => handleDelete(item.id)}
                                            />
                                        </div>
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
