import classNames from 'classnames/bind';
import { memo, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Portal from '~/components/Portal';
import styles from './ModalCreateProduct.module.scss';

import Image from '../Image';
import { BsFillTrashFill } from 'react-icons/bs';
import Button from '../Button';
import { createProductService } from '~/services/adminService';

const cx = classNames.bind(styles);
function ModalCreateProduct({ setIsModal }) {
    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [group, setGroup] = useState('');
    const [priceUp, setPriceUp] = useState('');
    const [priceDown, setPriceDown] = useState('');
    const [color, setColor] = useState('');
    const [rom, setRom] = useState('');
    const [ram, setRam] = useState('');
    const [brain, setBrain] = useState('');
    const [screen, setScreen] = useState('');
    const [card, setCard] = useState('');
    const [sale, setSale] = useState('');

    const handleCreate = () => {
        const data = { name, image, group, priceUp, priceDown, color, rom, ram, brain, screen, sale };
        createProductService(data).then((data) => console.log(data));
    };
    return (
        <Portal>
            <div className={cx('wrapper')}>
                <div className={cx('container')}>
                    <div className={cx('header')}>
                        <div>Tạo sản phẩm mới</div>
                        <div className={cx('icon-close')} onClick={() => setIsModal(false)}>
                            <AiOutlineClose className={cx('icon-close-item')} />
                        </div>
                    </div>
                    <div className={cx('body')}>
                        <div>
                            <input
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                                type="text"
                                className={cx('input')}
                                placeholder="Ảnh"
                            />
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                className={cx('input')}
                                placeholder="Tên sản phẩm"
                            />
                            <input
                                type="text"
                                className={cx('input')}
                                placeholder="Nhóm"
                                value={group}
                                onChange={(e) => setGroup(e.target.value)}
                            />
                            <input
                                type="text"
                                className={cx('input')}
                                placeholder="Giá"
                                value={priceUp}
                                onChange={(e) => setPriceUp(e.target.value)}
                            />
                            <input
                                type="text"
                                className={cx('input')}
                                placeholder="Giá giảm"
                                value={priceDown}
                                onChange={(e) => setPriceDown(e.target.value)}
                            />
                            <input
                                type="text"
                                className={cx('input')}
                                placeholder="Màu"
                                value={color}
                                onChange={(e) => setColor(e.target.value)}
                            />
                            <input
                                type="text"
                                className={cx('input')}
                                placeholder="Rom"
                                value={rom}
                                onChange={(e) => setRom(e.target.value)}
                            />
                            <input
                                type="text"
                                className={cx('input')}
                                placeholder="Ram"
                                value={ram}
                                onChange={(e) => setRam(e.target.value)}
                            />
                            <input
                                type="text"
                                className={cx('input')}
                                placeholder="Screen"
                                value={screen}
                                onChange={(e) => setScreen(e.target.value)}
                            />
                            <input
                                type="text"
                                className={cx('input')}
                                placeholder="Card"
                                value={card}
                                onChange={(e) => setCard(e.target.value)}
                            />
                            <input
                                type="text"
                                className={cx('input')}
                                placeholder="Sale"
                                value={sale}
                                onChange={(e) => setSale(e.target.value)}
                            />
                            <input
                                type="text"
                                className={cx('input')}
                                placeholder="Brain"
                                value={brain}
                                onChange={(e) => setBrain(e.target.value)}
                            />
                        </div>
                        <div className={cx('footer')}>
                            <div className={cx('footer-btn')}>
                                <Button className={cx('btn-finish')} onClick={handleCreate}>
                                    Tạo mới
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Portal>
    );
}

export default memo(ModalCreateProduct);
