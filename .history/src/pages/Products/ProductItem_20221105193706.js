import classNames from 'classnames/bind';

import { BiMobileAlt } from 'react-icons/bi';
import { BsCpu } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import styles from './ProductItem.module.scss';

const cx = classNames.bind(styles);
function ProductItem({ data }) {
    console.log(data);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('product')}>
                <Link to={`/${data.group}/${data.name.split(' ').join('-')}?id=${data.id}`}>
                    <div className={cx('product-image')}>
                        <div className={cx('title-sale-product')}>Săn sale - giảm giá</div>
                        <div className={cx('p-image-body')}>
                            <Image className={cx('p-image')} src={data && data.image} />
                        </div>
                        <div className={cx('product-sale')}>Giảm {data && data.sale}</div>
                        <div className={cx('product-pay')}>Trả góp 0%</div>
                    </div>
                    <div className={cx('product-info')}>
                        <h3 className={cx('product-info-title')}>{data && data.name}</h3>
                        <div className={cx('product-info-price')}>
                            {data && data.priceDown} VND <span>{data && data.priceUp} VND</span>
                        </div>
                        <div className={cx('more-info')}>
                            <div className={cx('more-info-item')}>
                                <span>
                                    <BsCpu className={cx('more-info-icon')} />
                                    {data && data.card}
                                </span>
                                <p>
                                    <BiMobileAlt className={cx('more-info-icon')} />
                                    {data && data.screen}
                                </p>
                            </div>
                            <div className={cx('more-info-item')}>
                                <span>
                                    <BsCpu className={cx('more-info-icon')} />
                                    {data && data.rom}
                                </span>
                                <p>
                                    <BsCpu className={cx('more-info-icon')} />
                                    {data && data.ram}
                                </p>
                            </div>
                        </div>
                        <div className={cx('more-info-sale-up')}>Giảm 300,000đ thanh toán online</div>
                    </div>
                    <div className={cx('product-info-btn')}>MUA NGAY</div>
                </Link>
            </div>
        </div>
    );
}

export default ProductItem;
