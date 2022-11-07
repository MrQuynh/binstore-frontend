import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';
import Button from '~/components/Button';
import ModalCreateProduct from '~/components/ModalEdit/ModalCreateProduct';
import { useStore } from '~/hooks';
import { getAllProductsService } from '~/services/adminService';

import styles from './AdminProducts.module.scss';
const cx = classNames.bind(styles);

function AdminProducts() {
    // const [state, dispatch] = useStore();
    const [products, setProducts] = useState('');
    const [isModal, setIsModal] = useState(false);

    useEffect(() => {
        getAllProductsService().then((data) => data && setProducts(data));
    }, []);
    const handleDelete = (id) => {
        console.log(id);
    };
    return (
        <div className={cx('wrapper')}>
            {isModal && <ModalCreateProduct setIsModal={setIsModal} />}
            <div className={cx('container')}>
                <div className={cx('title')}>Manage products</div>

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
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td colSpan="2">{item.name}</td>
                                <td colSpan="2">{item.group}</td>
                                <td className={cx('table-action')}>
                                    <div>
                                        <AiFillEdit className={cx('actions-icon')} />
                                        <BsFillTrashFill
                                            className={cx('actions-icon')}
                                            onClick={() => handleDelete(item.id)}
                                        />
                                    </div>
                                </td>
                            </tr>
                        ))}
                </table>
            </div>
        </div>
    );
}

export default AdminProducts;
