import classNames from 'classnames/bind';
import Image from '~/components/Image';
import styles from './HomeCategory.module.scss';

const cx = classNames.bind(styles);

function HomeCategory() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('item')}>
                    <div>
                        <Image />
                    </div>
                    <div>Điện thoại</div>
                </div>
            </div>
        </div>
    );
}

export default HomeCategory;
