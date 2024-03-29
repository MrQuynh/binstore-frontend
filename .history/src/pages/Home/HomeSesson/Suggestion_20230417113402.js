import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { BiMobileAlt } from 'react-icons/bi';
import { BsCpu } from 'react-icons/bs';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import styles from './Suggestion.module.scss';
import FormatPrice from '~/components/FormatPrice/FormatPrice';

const cx = classNames.bind(styles);
const list = [
    {
        id: 0,
        name: <FormattedMessage id="home.monopoly" />,
    },
    {
        id: 1,
        name: <FormattedMessage id="home.topSearch" />,
    },
    {
        id: 2,
        name: <FormattedMessage id="home.samePrice" />,
    },
];

function Suggestion({ data, setCurrentPage }) {
    const [active, setActive] = useState(0);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('title')}>
                    <FormattedMessage id="home.dailyDiscover" />
                </div>
                <div className={cx('s-nav-body')}>
                    <div s-nav-body>
                        {list.map((item, index) => (
                            <span
                                className={cx('nav-item', active === index && 'nav-active')}
                                onClick={() => setActive(item.id)}
                                key={index}
                            >
                                {item.name}
                            </span>
                        ))}
                    </div>
                    <div className={cx('s-nav-page')}>
                        <div className={cx('s-nav-page-btn', 'active')}>Prev</div>
                        <div className={cx('s-nav-page-btn', 'disable')}>Next</div>
                    </div>
                </div>
                <div className={cx('list-suggest')}>
                    {/* -------------------product */}
                    {data &&
                        data?.length > 0 &&
                        data.reverse().map((item, index) => {
                            const linkName = item.name.split(' ').join('-');

                            return (
                                <div className={cx('product')} key={index}>
                                    <Link className={cx('link')} to={`/${item.group}/${linkName}?id=${item.id}`}>
                                        <div className={cx('product-image')}>
                                            <div className={cx('title-sale-product')}>Siêu hội mua sắm</div>
                                            <div className={cx('p-image-body')}>
                                                <Image className={cx('p-image')} src={item.image} />
                                            </div>
                                            <div className={cx('product-sale')}>Giảm {item.sale}%</div>
                                            <div className={cx('product-pay')}>Trả góp 0%</div>
                                        </div>
                                        <div className={cx('product-info')}>
                                            <h3 className={cx('product-info-title')}>{item.name}</h3>
                                            <div className={cx('product-info-price')}>
                                                <FormatPrice price={item.priceDown} />
                                                <span>
                                                    <FormatPrice price={item.priceUp} />
                                                </span>
                                            </div>
                                            <div className={cx('more-info')}>
                                                <div className={cx('more-info-item')}>
                                                    {item.cpu && (
                                                        <span>
                                                            <BsCpu className={cx('more-info-icon')} />
                                                            {item.cpu}
                                                        </span>
                                                    )}
                                                    {item.screen && (
                                                        <p>
                                                            <BiMobileAlt className={cx('more-info-icon')} />
                                                            {item.screen}
                                                        </p>
                                                    )}
                                                </div>
                                                <div className={cx('more-info-item', 'rom-ram')}>
                                                    {item.rom && (
                                                        <span>
                                                            <BsCpu className={cx('more-info-icon')} />
                                                            {item.rom}
                                                        </span>
                                                    )}
                                                    {item.ram && (
                                                        <p>
                                                            <BsCpu className={cx('more-info-icon')} />
                                                            {item.ram}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                            <div className={cx('more-info-sale-up')}>
                                                Giảm 300,000đ khi thanh toán qua VNPAY-QR
                                            </div>
                                        </div>
                                        <div className={cx('product-info-btn')}>
                                            <FormattedMessage id="home.buyNow" />
                                        </div>
                                    </Link>
                                </div>
                            );
                        })}

                    {/* -------------------product */}
                </div>
            </div>
        </div>
    );
}

export default Suggestion;
