import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';
import { toast } from 'react-toastify';
import Button from '~/components/Button';
import ModalCreateProduct from '~/components/ModalEdit/ModalCreateProduct';

import { deleteAProductService, getAllProductsService } from '~/services/adminService';

import styles from './AdminProducts.module.scss';
const cx = classNames.bind(styles);

function AdminProducts() {
    const [listPage, setListPage] = useState([]);
    const [action, setAction] = useState('');
    const [products, setProducts] = useState('');

    const [productEdit, setProductEdit] = useState('');
    const [isModal, setIsModal] = useState(false);
    const [currentPage, setCurrentPage] = useState(2);

    useEffect(() => {
        getAllProductsService(currentPage).then((res) => {
            if (res && res.errCode === 0) {
                setProducts(res.data);
                const page = res?.pagination?.totalPage;
                let mang = [];
                for (let i = 0; i < page; i++) {
                    mang.push(i);
                }
                setCurrentPage(mang);
            }
        });
    }, [currentPage]);
    // console.log(products);
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
        setAction('EDIT');
        setIsModal(true);
        setProductEdit(data);
    };
    const handleActivePage = () => {};
    const testvd = () => {
        return '<h1>hello quynh</h1>';
    };
    return (
        <div className={cx('wrapper')}>
            {isModal && (
                <ModalCreateProduct
                    setIsModal={setIsModal}
                    action={action}
                    dataProduct={productEdit}
                    setProductEdit={setProductEdit}
                />
            )}

            <div className={cx('container')}>
                <div className={cx('title')}>Manage products</div>

                <div className={cx('btn-body')}>
                    <Button
                        className={cx('btn')}
                        onClick={() => {
                            setIsModal(true);
                            setAction('CREATE');
                        }}
                    >
                        Tạo mới
                    </Button>
                    <div className={cx('pagination')}>
                        <span>Prev</span>
                        {listPage.map((item, index) => (
                            <span className={cx('active')} onClick={() => handleActivePage(item)} key={index}>
                                {item.title}
                            </span>
                        ))}

                        <span>Next</span>
                    </div>
                </div>

                <table className={cx('table')}>
                    <thead>
                        <tr>
                            <th>Stt</th>
                            <th>Id</th>
                            <th colSpan="2">Name</th>
                            <th colSpan="2">Quality</th>
                            <th colSpan="2">Group</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {products &&
                        products?.length > 0 &&
                        products.map((item, index) => (
                            <tbody key={index}>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{item.id}</td>
                                    <td colSpan="2">{item.name}</td>
                                    <td colSpan="2">{item.amount}</td>
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

export default AdminProducts;
