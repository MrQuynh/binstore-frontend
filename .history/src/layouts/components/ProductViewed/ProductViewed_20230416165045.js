import Image from '~/components/Image/Image';
import styles from './ProductViewed.module.scss';
import classNames from 'classnames/bind';
import FormatPrice from '~/components/FormatPrice/FormatPrice';
import { Link } from 'react-router-dom';
import { useStore } from '~/hooks';

const cx = classNames.bind(styles);
function ProductViewed() {
    const [state, dispatch] = useStore();
    console.log('hello ', state.productViewedRedux);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('viewed-title')}>Sản phẩm bạn vừa xem</div>
                <div className={cx('viewed-list')}>
                    {/* item */}
                    <Link to="" className={cx('viewed-item')}>
                        <div className={cx('viewed-image-body')}>
                            <Image
                                className={cx('viewed-image')}
                                src="https://images.fpt.shop/unsafe/fit-in/200x132/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/3/27/638155278345399476_noi-chien-khong-dau-unie-8-lit-ue-800-dd.jpg"
                            />
                        </div>
                        <div className={cx('viewed-info')}>
                            <div className={cx('viewed-name')}>
                                Laptop Asus Vivobook M1503QA-L1026W R5 5600H/8GB/512GB/15.6"FHD/Win 11
                            </div>
                            <div className={cx('viewed-price')}>
                                <FormatPrice price="18490000" />
                            </div>
                        </div>
                    </Link>
                    {/* item */}
                    <Link to="" className={cx('viewed-item')}>
                        <div className={cx('viewed-image-body')}>
                            <Image
                                className={cx('viewed-image')}
                                src="https://images.fpt.shop/unsafe/fit-in/200x132/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/3/27/638155278345399476_noi-chien-khong-dau-unie-8-lit-ue-800-dd.jpg"
                            />
                        </div>
                        <div className={cx('viewed-info')}>
                            <div className={cx('viewed-name')}>
                                Laptop Asus Vivobook M1503QA-L1026W R5 5600H/8GB/512GB/15.6"FHD/Win 11
                            </div>
                            <div className={cx('viewed-price')}>
                                <FormatPrice price="18490000" />
                            </div>
                        </div>
                    </Link>
                    {/* item */}
                    <Link to="" className={cx('viewed-item')}>
                        <div className={cx('viewed-image-body')}>
                            <Image
                                className={cx('viewed-image')}
                                src="https://images.fpt.shop/unsafe/fit-in/200x132/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/3/27/638155278345399476_noi-chien-khong-dau-unie-8-lit-ue-800-dd.jpg"
                            />
                        </div>
                        <div className={cx('viewed-info')}>
                            <div className={cx('viewed-name')}>
                                Laptop Asus Vivobook M1503QA-L1026W R5 5600H/8GB/512GB/15.6"FHD/Win 11
                            </div>
                            <div className={cx('viewed-price')}>
                                <FormatPrice price="18490000" />
                            </div>
                        </div>
                    </Link>
                    {/* item */}
                    <Link to="" className={cx('viewed-item')}>
                        <div className={cx('viewed-image-body')}>
                            <Image
                                className={cx('viewed-image')}
                                src="https://images.fpt.shop/unsafe/fit-in/200x132/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/3/27/638155278345399476_noi-chien-khong-dau-unie-8-lit-ue-800-dd.jpg"
                            />
                        </div>
                        <div className={cx('viewed-info')}>
                            <div className={cx('viewed-name')}>
                                Laptop Asus Vivobook M1503QA-L1026W R5 5600H/8GB/512GB/15.6"FHD/Win 11
                            </div>
                            <div className={cx('viewed-price')}>
                                <FormatPrice price="18490000" />
                            </div>
                        </div>
                    </Link>
                    {/* item */}
                    <Link to="" className={cx('viewed-item')}>
                        <div className={cx('viewed-image-body')}>
                            <Image
                                className={cx('viewed-image')}
                                src="https://images.fpt.shop/unsafe/fit-in/200x132/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/3/27/638155278345399476_noi-chien-khong-dau-unie-8-lit-ue-800-dd.jpg"
                            />
                        </div>
                        <div className={cx('viewed-info')}>
                            <div className={cx('viewed-name')}>
                                Laptop Asus Vivobook M1503QA-L1026W R5 5600H/8GB/512GB/15.6"FHD/Win 11
                            </div>
                            <div className={cx('viewed-price')}>
                                <FormatPrice price="18490000" />
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ProductViewed;
