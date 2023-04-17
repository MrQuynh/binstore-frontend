import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import { useStore } from '~/hooks';
import { actions } from '~/store';
import { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';

const cx = classNames.bind(styles);

function Sidebar() {
    const [state, dispatch] = useStore();
    const [checkedAll, setCheckedAll] = useState(true);
    const brand = state.brandRedux;
    useEffect(() => {
        dispatch(actions.chooseBrandRedux({ isChecked: true, keyMap: 'B0', value: 'All' }));
    }, []);
    const handleChangeBrand = (e, item) => {
        setCheckedAll(false);
        dispatch(actions.chooseBrandRedux({ isChecked: e.target.checked, keyMap: item.keyMap, value: item.value }));
    };
    const handleCheckAll = () => {
        setCheckedAll(true);
        dispatch(actions.chooseBrandRedux({ isChecked: true, keyMap: 'B0', value: 'All' }));
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('group')}>
                    <div className={cx('label')}>
                        <FormattedMessage id="group.brand" />
                    </div>
                    <div className={cx('check-body')}>
                        <div className={cx('check-item')}>
                            <input type="radio" value="ALL" checked={checkedAll} onChange={handleCheckAll} />
                            <p>Tất cả</p>
                        </div>
                        {brand &&
                            brand?.length > 0 &&
                            brand.map((item, index) => (
                                <div className={cx('check-item')} key={index}>
                                    <input
                                        type="radio"
                                        name="checkbox"
                                        value={item.keyMap}
                                        onChange={(e) => handleChangeBrand(e, item)}
                                    />
                                    <p>{item.value}</p>
                                </div>
                            ))}
                    </div>
                </div>
                <div className={cx('group')}>
                    <div className={cx('label')}>
                        <FormattedMessage id="group.price" />
                    </div>
                    <div className={cx('check-body')}>
                        <div className={cx('check-item')}>
                            <input type="radio" disabled />
                            <p>Tất cả</p>
                        </div>
                        <div className={cx('check-item')}>
                            <input type="radio" disabled />
                            <p>Dưới 2 triệu</p>
                        </div>
                        <div className={cx('check-item')}>
                            <input type="radio" disabled />
                            <p>Từu 2 - 4 triệu</p>
                        </div>
                        <div className={cx('check-item')}>
                            <input type="radio" disabled />
                            <p>Từ 4 - 10 triệu</p>
                        </div>
                        <div className={cx('check-item')}>
                            <input type="radio" disabled />
                            <p>Trên 10 triệu</p>
                        </div>
                    </div>
                </div>
                <div className={cx('group')}>
                    <div className={cx('label')}>
                        <FormattedMessage id="group.specialFeature" />
                    </div>
                    <div className={cx('check-body')}>
                        <div className={cx('check-item')}>
                            <input type="radio" disabled />
                            <p>Tất cả</p>
                        </div>
                        <div className={cx('check-item')}>
                            <input type="radio" disabled />
                            <p>Bảo mật vân tay</p>
                        </div>
                        <div className={cx('check-item')}>
                            <input type="radio" disabled />
                            <p>Nhận diện khuôn mặt</p>
                        </div>
                        <div className={cx('check-item')}>
                            <input type="radio" disabled />
                            <p>Sạc nhanh</p>
                        </div>
                    </div>
                </div>
                <div className={cx('group')}>
                    <div className={cx('label')}>Trả góp ưu đãi</div>
                    <div className={cx('check-body')}>
                        <div className={cx('check-item')}>
                            <input type="radio" disabled />
                            <p>Tất cả</p>
                        </div>
                        <div className={cx('check-item')}>
                            <input type="radio" disabled />
                            <p>Trả góp 0%</p>
                        </div>
                        <div className={cx('check-item')}>
                            <input type="radio" disabled />
                            <p>Trả góp 0 đồng</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
