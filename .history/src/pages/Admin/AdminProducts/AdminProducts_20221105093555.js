import classNames from 'classnames/bind';
import styles from './AdminProducts.module.scss';
const cx = classNames.bind(styles);

function AdminProducts() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h1>A Fancy Table</h1>

                <table className={cx('table')}>
                    <tr>
                        <th colSpan="1">id</th>
                        <th colSpan="3">Name</th>
                        <th>action</th>
                    </tr>
                    <tr>
                        <td>Alfreds Futterkiste</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                    </tr>
                    <tr>
                        <td>Berglunds snabbköp</td>
                        <td>Christina Berglund</td>
                        <td>Sweden</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default AdminProducts;
