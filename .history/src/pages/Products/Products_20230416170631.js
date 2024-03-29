import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BiSkipNextCircle } from 'react-icons/bi';
import { FormattedMessage } from 'react-intl';

import Button from '~/components/Button';
import { useStore } from '~/hooks';
import { getAGroupService } from '~/services/adminService';
import { getAllCode } from '~/services/productService';
import { actions } from '~/store';

import ProductItem from './ProductItem';
import styles from './Products.module.scss';
import ProductViewed from '~/layouts/components/ProductViewed/ProductViewed';

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
    const [idProduct, setListProducts] = useState('');
    const [state, dispatch] = useStore();

    const currentUrl = window.location.href.split('/')[3];

    const backToTop = () => {
        bodyRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    };
    const brand = state.chooseBrandState?.keyMap;
    useEffect(() => {
        window.scrollTo(0, 0);
        getAGroupService(currentUrl, 'B0').then((data) => {
            if (data && data.errCode === 0) {
                setListProducts(data.data);
                dispatch(actions.getBrandRedux(data.data));
            }
        });
    }, [currentUrl]);
    useEffect(() => {
        window.scrollTo(0, 0);
        getAGroupService(currentUrl, brand).then((data) => {
            if (data && data.errCode === 0) {
                setListProducts(data.data);
            }
        });
    }, [currentUrl, brand]);

    return (
        <>
            <div className={cx('wrapper')} ref={bodyRef}>
                <div className={cx('head-box')}>
                    <div className={cx('card-header')}>
                        Điện thoại{' '}
                        <p>
                            ({idProduct && idProduct?.length} <FormattedMessage id="group.product" />)
                        </p>
                    </div>
                    {state.chooseBrandState && state.chooseBrandState.isChecked === true && (
                        <div className={cx('list-tag')}>
                            <p>
                                <FormattedMessage id="group.sort" />
                            </p>
                            <ul>
                                <li className={cx('item-tag')}>
                                    {state.chooseBrandState.value}
                                    <AiOutlineCloseCircle className={cx('icon-tag')} />
                                </li>
                                <li className={cx('item-tag')}>
                                    <FormattedMessage id="group.deleteAll" />{' '}
                                    <AiOutlineCloseCircle className={cx('icon-tag')} />
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
                <div className={cx('product-box')}>
                    <div className={cx('sort-box')}>
                        <p className={cx('sort-title')}>
                            <FormattedMessage id="group.sortBy" />
                        </p>
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
                        {idProduct && idProduct?.length > 0 ? (
                            idProduct.map((item, index) =>
                                +item.amount === 0 ? '' : <ProductItem key={index} data={item} />,
                            )
                        ) : (
                            <div className={cx('no-product')}>
                                <FormattedMessage id="group.noProduct" />
                            </div>
                        )}
                    </div>
                    <div className={cx('div-btn')}>
                        {idProduct && idProduct?.length > 6 ? (
                            <Button className={cx('btn')}>
                                <FormattedMessage id="group.seeMore" />
                            </Button>
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
                <ProductViewed />
                <BiSkipNextCircle className={cx('back-to-top', active && 'active')} onClick={backToTop} />
            </div>
        </>
    );
}

export default Products;
