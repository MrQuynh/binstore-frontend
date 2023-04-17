import Image from '~/components/Image/Image';
import styles from './ProductViewed.module.scss';
import classNames from 'classnames/bind';
import FormatPrice from '~/components/FormatPrice/FormatPrice';
import { Link } from 'react-router-dom';
import { useStore } from '~/hooks';

const cx = classNames.bind(styles);
function ProductViewed() {
    const [state, dispatch] = useStore();
    // console.log('hello ', state.productViewedRedux);
    return (
        <div className={cx('wrapper')}>
            {state.productViewedRedux && state.productViewedRedux?.length > 0 && (
                <div className={cx('container')}>
                    <div className={cx('viewed-title')}>Sản phẩm bạn vừa xem</div>
                    <div className={cx('viewed-list')}>
                        {/* item */}
                        {state.productViewedRedux.map((item, index) => (
                            <Link
                                to={`/${item?.group}/${item?.name}?id=${item?.id}`}
                                className={cx('viewed-item')}
                                key={index}
                            >
                                <div className={cx('viewed-image-body')}>
                                    <Image className={cx('viewed-image')} src={item?.image} />
                                </div>
                                <div className={cx('viewed-info')}>
                                    <div className={cx('viewed-name')}>{item?.name}</div>
                                    <div className={cx('viewed-price')}>
                                        <FormatPrice price={item?.priceDown} />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProductViewed;
