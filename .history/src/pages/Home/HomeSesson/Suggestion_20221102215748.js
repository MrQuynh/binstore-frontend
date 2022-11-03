import classNames from 'classnames/bind';
import Image from '~/components/Image';
import styles from './Suggestion.module.scss';

const cx = classNames.bind(styles);

function Suggestion() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('title')}>Giợi ý hôm nay</div>
                <div className={cx('s-nav')}>
                    <span className={cx('nav-item')}>Độc quyền</span>
                    <span className={cx('nav-item')}>Top tìm kiếm</span>
                    <span className={cx('nav-item')}>Đòng giá 299K</span>
                </div>
                <div className={cx('list-suggest')}>
                    <div className={cx('product')}>
                        <div className={cx('product-image')}>
                            <div className={cx('title-sale-product')}>Siêu hội mua sắm</div>
                            <div className={cx('p-image-body')}>
                                <Image
                                    className={cx('p-image')}
                                    src="https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/1/638028878218412584_samsung-galaxy-s22-bora-purple-dd-docquyen-bh.jpg"
                                />
                            </div>
                            <div className={cx('product-sale')}>Giảm 90%</div>
                        </div>
                        <div className={cx('product-info')}>
                            <h3 className={cx('product-info-title')}>Đồng hồ SK - 11K00 Đồng hồ SK - 11K00</h3>
                            <div className={cx('product-info-price')}>
                                89.000 VND <span>890.000 VND</span>
                            </div>
                            <div className={cx('product-info-btn')}>Đã kết thúc</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Suggestion;
