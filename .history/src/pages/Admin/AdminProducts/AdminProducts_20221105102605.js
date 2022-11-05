import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';
import { useStore } from '~/hooks';
import { getAllProductsService } from '~/services/adminService';

import styles from './AdminProducts.module.scss';
const cx = classNames.bind(styles);

function AdminProducts() {
    const [state, dispatch] = useStore();
    const [products, setProducts] = useState('');

    useEffect(() => {
        getAllProductsService().then((data) => data && setProducts(data));
    }, []);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h1>A Fancy Table</h1>

                <table className={cx('table')}>
                    <tr>
                        <th>id</th>
                        <th colSpan="2">Name</th>
                        <th>action</th>
                    </tr>
                    {products &&
                        products.length > 0 &&
                        products.map((item, index) => (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td className={cx('table-action')}>
                                    <div>
                                        <AiFillEdit className={cx('actions-icon')} />
                                        <BsFillTrashFill className={cx('actions-icon')} />
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
