import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';
import { useStore } from '~/hooks';
import { getAllProductsService } from '~/services/adminService';
import { getAllProducts } from '~/store/actions';
import styles from './AdminProducts.module.scss';
const cx = classNames.bind(styles);

function AdminProducts() {
    const [state, dispatch] = useStore();
    useEffect(() => {
        getAllProductsService();
    }, []);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h1>A Fancy Table</h1>

                <table className={cx('table')}>
                    <tr>
                        <th colSpan="1">id</th>
                        <th>Name</th>
                        <th>action</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Maria Anders</td>
                        <td className={cx('table-action')}>
                            <div>
                                <AiFillEdit className={cx('actions-icon')} />
                                <BsFillTrashFill className={cx('actions-icon')} />
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default AdminProducts;
