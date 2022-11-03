import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('group')}>
                    <div className={cx('label')}>Hãng sản xuất</div>
                    <div className={cx('allow-check')}>
                        <div className={cx('allow-check-item')}>
                            <input type="checkbox" />
                            <p>appo</p>
                        </div>
                        <div className={cx('allow-check-item')}>
                            <input type="checkbox" />
                            <p>Duet</p>
                        </div>
                        <div className={cx('allow-check-item')}>
                            <input type="checkbox" />
                            <p>Stitch</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
