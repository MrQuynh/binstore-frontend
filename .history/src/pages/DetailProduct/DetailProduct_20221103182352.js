import classNames from 'classnames/bind';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Banner from '~/layouts/components/Banner';
import styles from './DetailProduct.module.scss';
const cx = classNames.bind(styles);

function DetailProduct() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('header-detail')}>
                    <div className={cx('direct')}>
                        <ol>
                            <Link to="/">
                                <li className={cx('direct-active')}>Trang chủ</li>
                            </Link>
                            <li>/ Điện thoại</li>
                            <li>/ Apple(Iphone)</li>
                        </ol>
                    </div>
                    <div className={cx('header-info')}>
                        <h2 className={cx('header-info-name')}>iPad Pro 11 2021 M1 Wi-Fi 128GB </h2>
                        <div className={cx('header-info-right')}>
                            <AiFillStar className={cx('header-info-icon')} />
                            <AiFillStar className={cx('header-info-icon')} />
                            <AiFillStar className={cx('header-info-icon')} />
                            <AiFillStar className={cx('header-info-icon')} />
                            <AiFillStar className={cx('header-info-icon')} />

                            <p className={cx('header-info-vote')}>123 đánh giá</p>
                            <p>345 Hỏi & Đáp</p>
                        </div>
                    </div>
                </div>
                <div className={cx('body')}></div>
            </div>
        </div>
    );
}

export default DetailProduct;
