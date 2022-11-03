import classNames from 'classnames/bind';
import { GrCaretNext } from 'react-icons/gr';
import Image from '~/components/Image';
import styles from './HomeGoldTime.module.scss';

const cx = classNames.bind(styles);

function HomeGoldTime() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('flash')}>
                    <h2>Giờ vàng giá Sốc</h2>
                    <span>
                        Xem thể lệ <GrCaretNext />
                    </span>
                </div>
                <div className={cx('flash-date')}>
                    <div className={cx('flash-date-item')}>
                        <div className={cx('flash-sale-date')}>
                            31/10
                            <p>14:00 - 16:00</p>
                        </div>
                        <div className={cx('flash-sale-date-text')}>Đã kết thúc</div>
                    </div>
                </div>
                <div className={cx('flash -product')}>
                    <div>product</div>
                </div>
            </div>
        </div>
    );
}

export default HomeGoldTime;
