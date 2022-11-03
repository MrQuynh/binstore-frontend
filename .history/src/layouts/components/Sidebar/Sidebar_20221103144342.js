import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('group')}>
                    <div className={cx('label')}>Hãng sản xuất</div>
                    <div className={cx('check-body')}>
                        <div className={cx('check-item')}>
                            <input type="checkbox" />
                            <p>Tất cả</p>
                        </div>
                        <div className={cx('check-item')}>
                            <input type="checkbox" />
                            <p>Samsung</p>
                        </div>
                        <div className={cx('check-item')}>
                            <input type="checkbox" />
                            <p>Iphone</p>
                        </div>
                        <div className={cx('check-item')}>
                            <input type="checkbox" />
                            <p>Asus</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
