import classNames from 'classnames/bind';
import { GrCaretNext } from 'react-icons/gr';
import Image from '~/components/Image';
import styles from './HomeGoldTime.module.scss';

const cx = classNames.bind(styles);

function HomeGoldTime() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div>
                    <p>Giờ vàng giá Sốc</p>
                    <span>
                        Xem thể lệ <GrCaretNext />
                    </span>
                </div>
            </div>
        </div>
    );
}

export default HomeGoldTime;
