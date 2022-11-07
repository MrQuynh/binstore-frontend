import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BiSkipNextCircle } from 'react-icons/bi';

import Button from '~/components/Button';
import { getAGroupService } from '~/services/adminService';

import ProductItem from './ProductItem';
import styles from './Products.module.scss';

const cx = classNames.bind(styles);
const sortList = [
    { id: 0, name: 'Bán chạy nhất' },
    { id: 1, name: 'Trả góp 0%' },
    { id: 2, name: 'Giá thấp' },
    { id: 3, name: 'Giá cao' },
    { id: 4, name: 'Ưu đãi online' },
];
function Products() {
    const [sortActive, setSortActive] = useState(0);
    const [active, setActive] = useState(false);
    const bodyRef = useRef();
    const [listProducts, setListProducts] = useState('');

    const currentUrl = window.location.href.split('/')[3];

    const backToTop = () => {
        bodyRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    };
    window.onscroll = () => {
        if (window.scrollY > 150) {
            setActive(true);
        } else setActive(false);
    };
    useEffect(() => {
        getAGroupService(currentUrl).then((data) => {
            if (data && data.errCode === 0) {
                setListProducts(data.data);
            }
        });
    }, [currentUrl]);

    return (
        <div className={cx('wrapper')} ref={bodyRef}>
            <div className={cx('head-box')}>
                <div className={cx('card-header')}>
                    Điện thoại <p>({listProducts && listProducts.length} sản phẩm)</p>
                </div>
                <div className={cx('list-tag')}>
                    <p>Lọc theo:</p>
                    <ul>
                        <li className={cx('item-tag')}>
                            Samsung <AiOutlineCloseCircle className={cx('icon-tag')} />
                        </li>
                        <li className={cx('item-tag')}>
                            Xóa tất cả <AiOutlineCloseCircle className={cx('icon-tag')} />
                        </li>
                    </ul>
                </div>
            </div>
            <div className={cx('product-box')}>
                <div className={cx('sort-box')}>
                    <p className={cx('sort-title')}>Ưu tiên xem:</p>
                    <div className={cx('sort-list')}>
                        {sortList.map((item, index) => (
                            <p
                                className={cx('sort-list-item', sortActive === index && 'sort-active')}
                                onClick={() => setSortActive(item.id)}
                                key={index}
                            >
                                {item.name}
                            </p>
                        ))}
                    </div>
                </div>
                <div className={cx('list-product')}>
                    {listProducts && listProducts.length > 0 ? (
                        listProducts.map((item, index) => <ProductItem key={index} data={item} />)
                    ) : (
                        <div>Chưa có sản phẩm nào </div>
                    )}
                </div>
                <div className={cx('div-btn')}>
                    {listProducts && listProducts.length > 0 ? <Button className={cx('btn')}>Xem thêm</Button> : <></>}
                </div>
            </div>
            <BiSkipNextCircle className={cx('back-to-top', active && 'active')} onClick={backToTop} />
        </div>
    );
}

export default Products;
