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
const listPage = [
    { id: 1, title: 1 },
    { id: 2, title: 2 },
    { id: 3, title: 3 },
];
function AdminProducts() {
    // const [state, dispatch] = useStore();
    const [action, setAction] = useState('');
    const [products, setProducts] = useState('');
    const [productEdit, setProductEdit] = useState('');
    const [isModal, setIsModal] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [activePage, setActivePage] = useState(1);

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
        setAction('EDIT');
        setIsModal(true);
        setProductEdit(data);
    };
    // console.log('hello', products);
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
                        {currentPage === 1 ? '' : <span>First</span>}
                        {listPage.map((item, index) => (
                            <span key={index}>{item.title}</span>
                        ))}
                        <span>...</span>
                        <span>Last</span>
                        {/* {currentPage === 1 ? (
                            ''
                        ) : (
                            <span className={cx('active')} onClick={(e) => console.log(e.target.innerText)}>
                                First
                            </span>
                        )}
                       
                        <span >2</span>
                        <span >3</span>
                        <span>...</span>
                        <span onClick={(e) => console.log(e.target.innerText)}>Last</span> */}
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
