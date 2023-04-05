import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { BiMobileAlt } from 'react-icons/bi';
import { BsCpu } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import { getAllProductsService } from '~/services/adminService';
import styles from './Suggestion.module.scss';

const cx = classNames.bind(styles);
const list = [
    {
        id: 0,
        name: 'Độc quyền',
    },
    {
        id: 1,
        name: 'Top tìm kiếm',
    },
    {
        id: 2,
        name: 'Đồng giá 299K',
    },
];

function Suggestion({ data }) {
    const [active, setActive] = useState(0);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('title')}>Giợi ý hôm nay</div>
                <div className={cx('s-nav')}>
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
                <div className={cx('list-suggest')}>
                    {/* -------------------product */}
                    {data &&
                        data.length > 0 &&
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
                                                {item.priceDown} VND <span>{item.priceUp} VND</span>
                                            </div>
                                            <div className={cx('more-info')}>
                                                <div className={cx('more-info-item')}>
                                                    <span>
                                                        <BsCpu className={cx('more-info-icon')} />
                                                        {item.cpu}
                                                    </span>
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
                                                            {item.rom} GB
                                                        </span>
                                                    )}
                                                    {item.ram && (
                                                        <p>
                                                            <BsCpu className={cx('more-info-icon')} />
                                                            {item.ram} GB
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                            <div className={cx('more-info-sale-up')}>
                                                Giảm 300,000đ khi thanh toán qua VNPAY-QR
                                            </div>
                                        </div>
                                        <div className={cx('product-info-btn')}>MUA NGAY</div>
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
