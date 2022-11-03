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
                <div className={cx('group')}>
                    <div className={cx('label')}>Mức giá</div>
                    <div className={cx('check-body')}>
                        <div className={cx('check-item')}>
                            <input type="checkbox" />
                            <p>Tất cả</p>
                        </div>
                        <div className={cx('check-item')}>
                            <input type="checkbox" />
                            <p>Dưới 2 triệu</p>
                        </div>
                        <div className={cx('check-item')}>
                            <input type="checkbox" />
                            <p>Từu 2 - 4 triệu</p>
                        </div>
                        <div className={cx('check-item')}>
                            <input type="checkbox" />
                            <p>Từ 4 - 10 triệu</p>
                        </div>
                        <div className={cx('check-item')}>
                            <input type="checkbox" />
                            <p>Trên 10 triệu</p>
                        </div>
                    </div>
                </div>
                <div className={cx('group')}>
                    <div className={cx('label')}>Tính năng đặc biệt</div>
                    <div className={cx('check-body')}>
                        <div className={cx('check-item')}>
                            <input type="checkbox" />
                            <p>Tất cả</p>
                        </div>
                        <div className={cx('check-item')}>
                            <input type="checkbox" />
                            <p>Bảo mật vân tay</p>
                        </div>
                        <div className={cx('check-item')}>
                            <input type="checkbox" />
                            <p>Nhận diện khuôn mặt</p>
                        </div>
                        <div className={cx('check-item')}>
                            <input type="checkbox" />
                            <p>Sạc nhanh</p>
                        </div>
                    </div>
                </div>
                <div className={cx('group')}>
                    <div className={cx('label')}>Trả góp ưu đãi</div>
                    <div className={cx('check-body')}>
                        <div className={cx('check-item')}>
                            <input type="checkbox" />
                            <p>Tất cả</p>
                        </div>
                        <div className={cx('check-item')}>
                            <input type="checkbox" />
                            <p>Trả góp 0%</p>
                        </div>
                        <div className={cx('check-item')}>
                            <input type="checkbox" />
                            <p>Trả góp 0 đồng</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
