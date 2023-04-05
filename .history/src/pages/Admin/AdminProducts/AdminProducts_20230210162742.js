import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';
import { toast } from 'react-toastify';
import Button from '~/components/Button';
import ModalCreateProduct from '~/components/ModalEdit/ModalCreateProduct';
import ModalEditProduct from '~/components/ModalEdit/ModalEditProduct';
import { useStore } from '~/hooks';
import { deleteAProductService, getAllProductsService } from '~/services/adminService';

import styles from './AdminProducts.module.scss';
const cx = classNames.bind(styles);

function AdminProducts() {
    const [listPage, setListPage] = useState([
        { id: 0, title: 1 },
        { id: 1, title: 2 },
        { id: 2, title: 3 },
        { id: 3, title: '...' },
        { id: 4, title: 'Last' },
    ]);
    const [action, setAction] = useState('');
    const [products, setProducts] = useState('');
    const [productEdit, setProductEdit] = useState('');
    const [isModal, setIsModal] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [activePage, setActivePage] = useState(0);

    useEffect(() => {
        getAllProductsService(currentPage).then((data) => {
            if (data) {
                setProducts(data);
            }
        });
    }, [currentPage]);
    console.log(currentPage);
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
    const handleActivePage = (item) => {
        setActivePage(1);

        item.title < currentPage ? setCurrentPage(currentPage - 1) : setCurrentPage(currentPage + 1);
        setActivePage(1);
        setListPage([
            { id: 0, title: item.title - 1 },
            { id: 1, title: item.title },
            { id: 2, title: item.title + 1 },
            { id: 3, title: '...' },
            { id: 4, title: 'Last' },
        ]);
        if (currentPage === 1) {
            setActivePage(0);
        }
    };
    const handleFirst = () => {
        setCurrentPage(1);
        setActivePage(0);
        setListPage([
            { id: 0, title: 1 },
            { id: 1, title: 2 },
            { id: 2, title: 3 },
            { id: 3, title: '...' },
            { id: 4, title: 'Last' },
        ]);
    };
    // console.log(listPage);
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
                        {activePage === 0 ? (
                            ''
                        ) : (
                            <span className={cx('active')} onClick={handleFirst}>
                                First
                            </span>
                        )}
                        {listPage.map((item, index) => (
                            <span
                                className={cx(activePage === index && 'active')}
                                onClick={() => handleActivePage(item)}
                            >
                                {item.title}
                            </span>
                        ))}
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
                        products.length > 0 &&
                        products.map((item, index) => (
                            <tbody key={index}>
                                <tr>
                                    <td>{index}</td>
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
