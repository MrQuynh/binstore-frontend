import classNames from 'classnames/bind';

import { BiMobileAlt } from 'react-icons/bi';
import { BsCpu } from 'react-icons/bs';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import styles from './ProductItem.module.scss';
import FormatPrice from '~/components/FormatPrice/FormatPrice';

const cx = classNames.bind(styles);
function ProductItem({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('product')}>
                <Link className={cx('link')} to={`/${data.group}/${data.name.split(' ').join('-')}?id=${data.id}`}>
                    <div className={cx('product-image')}>
                        <div className={cx('title-sale-product')}>Săn sale - giảm giá</div>
                        <div className={cx('p-image-body')}>
                            <Image className={cx('p-image')} src={data && data.image} />
                        </div>
                        <div className={cx('product-sale')}>Giảm {data && data.sale}%</div>
                        <div className={cx('product-pay')}>Trả góp 0%</div>
                    </div>
                    <div className={cx('product-info')}>
                        <h3 className={cx('product-info-title')}>{data && data.name}</h3>
                        <div className={cx('product-info-price')}>
                            {data && <FormatPrice price={data.priceDown} />}
                            <span>{data && <FormatPrice price={data.priceUp} />} </span>
                        </div>
                        <div className={cx('more-info')}>
                            <div className={cx('more-info-item')}>
                                {data && data.card && (
                                    <span>
                                        <BsCpu className={cx('more-info-icon')} />
                                        {data.card}
                                    </span>
                                )}
                                {data && data.screen && (
                                    <p>
                                        <BiMobileAlt className={cx('more-info-icon')} />
                                        {data.screen}
                                    </p>
                                )}
                            </div>
                            <div className={cx('more-info-item')}>
                                {data && data.rom && (
                                    <span>
                                        <BsCpu className={cx('more-info-icon')} />
                                        {data.rom}
                                    </span>
                                )}
                                {data && data.ram && (
                                    <p>
                                        <BsCpu className={cx('more-info-icon')} />
                                        {data && data.ram}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className={cx('more-info-sale-up')}>Giảm 300,000đ thanh toán online</div>
                    </div>
                    <div className={cx('product-info-btn')}>
                        <FormattedMessage id="home.buyNow" />
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default ProductItem;
