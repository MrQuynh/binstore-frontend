import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { BiMobileAlt } from 'react-icons/bi';
import { BsCpu } from 'react-icons/bs';
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
    console.log(data);
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
                        data.map((item, index) => (
                            <div className={cx('product')}>
                                <div className={cx('product-image')}>
                                    <div className={cx('title-sale-product')}>Siêu hội mua sắm</div>
                                    <div className={cx('p-image-body')}>
                                        <Image className={cx('p-image')} src={item.image} />
                                    </div>
                                    <div className={cx('product-sale')}>Giảm 1.200.000</div>
                                    <div className={cx('product-pay')}>Trả góp 0%</div>
                                </div>
                                <div className={cx('product-info')}>
                                    <h3 className={cx('product-info-title')}>Đồng hồ SK - 11K00 Đồng hồ SK - 11K00</h3>
                                    <div className={cx('product-info-price')}>
                                        89.000 VND <span>890.000 VND</span>
                                    </div>
                                    <div className={cx('more-info')}>
                                        <div className={cx('more-info-item')}>
                                            <span>
                                                <BsCpu className={cx('more-info-icon')} />
                                                Snapdragon 8
                                            </span>
                                            <p>
                                                <BiMobileAlt className={cx('more-info-icon')} />
                                                6.1 inch
                                            </p>
                                        </div>
                                        <div className={cx('more-info-item')}>
                                            <span>
                                                <BsCpu className={cx('more-info-icon')} />8 GB
                                            </span>
                                            <p>
                                                <BsCpu className={cx('more-info-icon')} />
                                                120 GB
                                            </p>
                                        </div>
                                    </div>
                                    <div className={cx('more-info-sale-up')}>
                                        Giảm 300,000đ khi thanh toán qua VNPAY-QR
                                    </div>
                                </div>
                                <div className={cx('product-info-btn')}>MUA NGAY</div>
                            </div>
                        ))}
                    {/* <div className={cx('product')}>
                        <div className={cx('product-image')}>
                            <div className={cx('title-sale-product')}>Siêu hội mua sắm</div>
                            <div className={cx('p-image-body')}>
                                <Image
                                    className={cx('p-image')}
                                    src="https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/1/638028878218412584_samsung-galaxy-s22-bora-purple-dd-docquyen-bh.jpg"
                                />
                            </div>
                            <div className={cx('product-sale')}>Giảm 1.200.000</div>
                            <div className={cx('product-pay')}>Trả góp 0%</div>
                        </div>
                        <div className={cx('product-info')}>
                            <h3 className={cx('product-info-title')}>Đồng hồ SK - 11K00 Đồng hồ SK - 11K00</h3>
                            <div className={cx('product-info-price')}>
                                89.000 VND <span>890.000 VND</span>
                            </div>
                            <div className={cx('more-info')}>
                                <div className={cx('more-info-item')}>
                                    <span>
                                        <BsCpu className={cx('more-info-icon')} />
                                        Snapdragon 8
                                    </span>
                                    <p>
                                        <BiMobileAlt className={cx('more-info-icon')} />
                                        6.1 inch
                                    </p>
                                </div>
                                <div className={cx('more-info-item')}>
                                    <span>
                                        <BsCpu className={cx('more-info-icon')} />8 GB
                                    </span>
                                    <p>
                                        <BsCpu className={cx('more-info-icon')} />
                                        120 GB
                                    </p>
                                </div>
                            </div>
                            <div className={cx('more-info-sale-up')}>Giảm 300,000đ khi thanh toán qua VNPAY-QR</div>
                        </div>
                        <div className={cx('product-info-btn')}>MUA NGAY</div>
                    </div>
                    <div className={cx('product')}>
                        <div className={cx('product-image')}>
                            <div className={cx('title-sale-product')}>Siêu hội mua sắm</div>
                            <div className={cx('p-image-body')}>
                                <Image
                                    className={cx('p-image')}
                                    src="https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/1/638028878218412584_samsung-galaxy-s22-bora-purple-dd-docquyen-bh.jpg"
                                />
                            </div>
                            <div className={cx('product-sale')}>Giảm 1.200.000</div>
                            <div className={cx('product-pay')}>Trả góp 0%</div>
                        </div>
                        <div className={cx('product-info')}>
                            <h3 className={cx('product-info-title')}>Đồng hồ SK - 11K00 Đồng hồ SK - 11K00</h3>
                            <div className={cx('product-info-price')}>
                                89.000 VND <span>890.000 VND</span>
                            </div>
                            <div className={cx('more-info')}>
                                <div className={cx('more-info-item')}>
                                    <span>
                                        <BsCpu className={cx('more-info-icon')} />
                                        Snapdragon 8
                                    </span>
                                    <p>
                                        <BiMobileAlt className={cx('more-info-icon')} />
                                        6.1 inch
                                    </p>
                                </div>
                                <div className={cx('more-info-item')}>
                                    <span>
                                        <BsCpu className={cx('more-info-icon')} />8 GB
                                    </span>
                                    <p>
                                        <BsCpu className={cx('more-info-icon')} />
                                        120 GB
                                    </p>
                                </div>
                            </div>
                            <div className={cx('more-info-sale-up')}>Giảm 300,000đ khi thanh toán qua VNPAY-QR</div>
                        </div>
                        <div className={cx('product-info-btn')}>MUA NGAY</div>
                    </div>
                    <div className={cx('product')}>
                        <div className={cx('product-image')}>
                            <div className={cx('title-sale-product')}>Siêu hội mua sắm</div>
                            <div className={cx('p-image-body')}>
                                <Image
                                    className={cx('p-image')}
                                    src="https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/1/638028878218412584_samsung-galaxy-s22-bora-purple-dd-docquyen-bh.jpg"
                                />
                            </div>
                            <div className={cx('product-sale')}>Giảm 1.200.000</div>
                            <div className={cx('product-pay')}>Trả góp 0%</div>
                        </div>
                        <div className={cx('product-info')}>
                            <h3 className={cx('product-info-title')}>Đồng hồ SK - 11K00 Đồng hồ SK - 11K00</h3>
                            <div className={cx('product-info-price')}>
                                89.000 VND <span>890.000 VND</span>
                            </div>
                            <div className={cx('more-info')}>
                                <div className={cx('more-info-item')}>
                                    <span>
                                        <BsCpu className={cx('more-info-icon')} />
                                        Snapdragon 8
                                    </span>
                                    <p>
                                        <BiMobileAlt className={cx('more-info-icon')} />
                                        6.1 inch
                                    </p>
                                </div>
                                <div className={cx('more-info-item')}>
                                    <span>
                                        <BsCpu className={cx('more-info-icon')} />8 GB
                                    </span>
                                    <p>
                                        <BsCpu className={cx('more-info-icon')} />
                                        120 GB
                                    </p>
                                </div>
                            </div>
                            <div className={cx('more-info-sale-up')}>Giảm 300,000đ khi thanh toán qua VNPAY-QR</div>
                        </div>
                        <div className={cx('product-info-btn')}>MUA NGAY</div>
                    </div>
                    <div className={cx('product')}>
                        <div className={cx('product-image')}>
                            <div className={cx('title-sale-product')}>Siêu hội mua sắm</div>
                            <div className={cx('p-image-body')}>
                                <Image
                                    className={cx('p-image')}
                                    src="https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/1/638028878218412584_samsung-galaxy-s22-bora-purple-dd-docquyen-bh.jpg"
                                />
                            </div>
                            <div className={cx('product-sale')}>Giảm 1.200.000</div>
                            <div className={cx('product-pay')}>Trả góp 0%</div>
                        </div>
                        <div className={cx('product-info')}>
                            <h3 className={cx('product-info-title')}>Đồng hồ SK - 11K00 Đồng hồ SK - 11K00</h3>
                            <div className={cx('product-info-price')}>
                                89.000 VND <span>890.000 VND</span>
                            </div>
                            <div className={cx('more-info')}>
                                <div className={cx('more-info-item')}>
                                    <span>
                                        <BsCpu className={cx('more-info-icon')} />
                                        Snapdragon 8
                                    </span>
                                    <p>
                                        <BiMobileAlt className={cx('more-info-icon')} />
                                        6.1 inch
                                    </p>
                                </div>
                                <div className={cx('more-info-item')}>
                                    <span>
                                        <BsCpu className={cx('more-info-icon')} />8 GB
                                    </span>
                                    <p>
                                        <BsCpu className={cx('more-info-icon')} />
                                        120 GB
                                    </p>
                                </div>
                            </div>
                            <div className={cx('more-info-sale-up')}>Giảm 300,000đ khi thanh toán qua VNPAY-QR</div>
                        </div>
                        <div className={cx('product-info-btn')}>MUA NGAY</div>
                    </div>
                    <div className={cx('product')}>
                        <div className={cx('product-image')}>
                            <div className={cx('title-sale-product')}>Siêu hội mua sắm</div>
                            <div className={cx('p-image-body')}>
                                <Image
                                    className={cx('p-image')}
                                    src="https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/1/638028878218412584_samsung-galaxy-s22-bora-purple-dd-docquyen-bh.jpg"
                                />
                            </div>
                            <div className={cx('product-sale')}>Giảm 1.200.000</div>
                            <div className={cx('product-pay')}>Trả góp 0%</div>
                        </div>
                        <div className={cx('product-info')}>
                            <h3 className={cx('product-info-title')}>Đồng hồ SK - 11K00 Đồng hồ SK - 11K00</h3>
                            <div className={cx('product-info-price')}>
                                89.000 VND <span>890.000 VND</span>
                            </div>
                            <div className={cx('more-info')}>
                                <div className={cx('more-info-item')}>
                                    <span>
                                        <BsCpu className={cx('more-info-icon')} />
                                        Snapdragon 8
                                    </span>
                                    <p>
                                        <BiMobileAlt className={cx('more-info-icon')} />
                                        6.1 inch
                                    </p>
                                </div>
                                <div className={cx('more-info-item')}>
                                    <span>
                                        <BsCpu className={cx('more-info-icon')} />8 GB
                                    </span>
                                    <p>
                                        <BsCpu className={cx('more-info-icon')} />
                                        120 GB
                                    </p>
                                </div>
                            </div>
                            <div className={cx('more-info-sale-up')}>Giảm 300,000đ khi thanh toán qua VNPAY-QR</div>
                        </div>
                        <div className={cx('product-info-btn')}>MUA NGAY</div>
                    </div>
                    <div className={cx('product')}>
                        <div className={cx('product-image')}>
                            <div className={cx('title-sale-product')}>Siêu hội mua sắm</div>
                            <div className={cx('p-image-body')}>
                                <Image
                                    className={cx('p-image')}
                                    src="https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/1/638028878218412584_samsung-galaxy-s22-bora-purple-dd-docquyen-bh.jpg"
                                />
                            </div>
                            <div className={cx('product-sale')}>Giảm 1.200.000</div>
                            <div className={cx('product-pay')}>Trả góp 0%</div>
                        </div>
                        <div className={cx('product-info')}>
                            <h3 className={cx('product-info-title')}>Đồng hồ SK - 11K00 Đồng hồ SK - 11K00</h3>
                            <div className={cx('product-info-price')}>
                                89.000 VND <span>890.000 VND</span>
                            </div>
                            <div className={cx('more-info')}>
                                <div className={cx('more-info-item')}>
                                    <span>
                                        <BsCpu className={cx('more-info-icon')} />
                                        Snapdragon 8
                                    </span>
                                    <p>
                                        <BiMobileAlt className={cx('more-info-icon')} />
                                        6.1 inch
                                    </p>
                                </div>
                                <div className={cx('more-info-item')}>
                                    <span>
                                        <BsCpu className={cx('more-info-icon')} />8 GB
                                    </span>
                                    <p>
                                        <BsCpu className={cx('more-info-icon')} />
                                        120 GB
                                    </p>
                                </div>
                            </div>
                            <div className={cx('more-info-sale-up')}>Giảm 300,000đ khi thanh toán qua VNPAY-QR</div>
                        </div>
                        <div className={cx('product-info-btn')}>MUA NGAY</div>
                    </div>
                    <div className={cx('product')}>
                        <div className={cx('product-image')}>
                            <div className={cx('title-sale-product')}>Siêu hội mua sắm</div>
                            <div className={cx('p-image-body')}>
                                <Image
                                    className={cx('p-image')}
                                    src="https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/1/638028878218412584_samsung-galaxy-s22-bora-purple-dd-docquyen-bh.jpg"
                                />
                            </div>
                            <div className={cx('product-sale')}>Giảm 1.200.000</div>
                            <div className={cx('product-pay')}>Trả góp 0%</div>
                        </div>
                        <div className={cx('product-info')}>
                            <h3 className={cx('product-info-title')}>Đồng hồ SK - 11K00 Đồng hồ SK - 11K00</h3>
                            <div className={cx('product-info-price')}>
                                89.000 VND <span>890.000 VND</span>
                            </div>
                            <div className={cx('more-info')}>
                                <div className={cx('more-info-item')}>
                                    <span>
                                        <BsCpu className={cx('more-info-icon')} />
                                        Snapdragon 8
                                    </span>
                                    <p>
                                        <BiMobileAlt className={cx('more-info-icon')} />
                                        6.1 inch
                                    </p>
                                </div>
                                <div className={cx('more-info-item')}>
                                    <span>
                                        <BsCpu className={cx('more-info-icon')} />8 GB
                                    </span>
                                    <p>
                                        <BsCpu className={cx('more-info-icon')} />
                                        120 GB
                                    </p>
                                </div>
                            </div>
                            <div className={cx('more-info-sale-up')}>Giảm 300,000đ khi thanh toán qua VNPAY-QR</div>
                        </div>
                        <div className={cx('product-info-btn')}>MUA NGAY</div>
                    </div>
                    <div className={cx('product')}>
                        <div className={cx('product-image')}>
                            <div className={cx('title-sale-product')}>Siêu hội mua sắm</div>
                            <div className={cx('p-image-body')}>
                                <Image
                                    className={cx('p-image')}
                                    src="https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/1/638028878218412584_samsung-galaxy-s22-bora-purple-dd-docquyen-bh.jpg"
                                />
                            </div>
                            <div className={cx('product-sale')}>Giảm 1.200.000</div>
                            <div className={cx('product-pay')}>Trả góp 0%</div>
                        </div>
                        <div className={cx('product-info')}>
                            <h3 className={cx('product-info-title')}>Đồng hồ SK - 11K00 Đồng hồ SK - 11K00</h3>
                            <div className={cx('product-info-price')}>
                                89.000 VND <span>890.000 VND</span>
                            </div>
                            <div className={cx('more-info')}>
                                <div className={cx('more-info-item')}>
                                    <span>
                                        <BsCpu className={cx('more-info-icon')} />
                                        Snapdragon 8
                                    </span>
                                    <p>
                                        <BiMobileAlt className={cx('more-info-icon')} />
                                        6.1 inch
                                    </p>
                                </div>
                                <div className={cx('more-info-item')}>
                                    <span>
                                        <BsCpu className={cx('more-info-icon')} />8 GB
                                    </span>
                                    <p>
                                        <BsCpu className={cx('more-info-icon')} />
                                        120 GB
                                    </p>
                                </div>
                            </div>
                            <div className={cx('more-info-sale-up')}>Giảm 300,000đ khi thanh toán qua VNPAY-QR</div>
                        </div>
                        <div className={cx('product-info-btn')}>MUA NGAY</div>
                    </div> */}
                    {/* -------------------product */}
                </div>
            </div>
        </div>
    );
}

export default Suggestion;
