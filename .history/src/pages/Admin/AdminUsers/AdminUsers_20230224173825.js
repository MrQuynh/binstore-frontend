import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';
import { toast } from 'react-toastify';
import Button from '~/components/Button';
import ModalCreateProduct from '~/components/ModalEdit/ModalCreateProduct';
import ModalEditProduct from '~/components/ModalEdit/ModalEditProduct';

import { deleteUserService, getAllUsersService } from '~/services/adminService';

import styles from './AdminUsers.module.scss';
const cx = classNames.bind(styles);

function AdminUsers() {
    const [users, setUsers] = useState('');
    const [productEdit, setProductEdit] = useState('');
    const [isModal, setIsModal] = useState(false);
    const [isModalEdit, setIsModalEdit] = useState(false);

    useEffect(() => {
        getAllUsersService().then((data) => {
            if (data && data.errCode === 0) {
                setUsers(data.data);
            } else if (data && data.errCode === 5) {
                console.log('hello');
            }
        });
    }, []);

    const handleDelete = (id) => {
        deleteUserService(id).then((res) => {
            if (res.errCode === 0) {
                toast.success('Delete user successfully!');
            } else {
                toast.error('Delete user fail!');
            }
        });
    };
    const handleEdit = (data) => {};
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
                            <th colSpan="2">Email</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    {users &&
                        users.length > 0 &&
                        users.map((item, index) => (
                            <tbody key={index}>
                                <tr>
                                    <td>{item.id}</td>
                                    <td colSpan="2">{item.nickName}</td>
                                    <td colSpan="2">{item.email}</td>
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

export default AdminUsers;
