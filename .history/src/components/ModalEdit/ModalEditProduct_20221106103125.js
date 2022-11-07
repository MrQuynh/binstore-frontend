import classNames from 'classnames/bind';
import { memo, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Portal from '~/components/Portal';
import styles from './ModalEditProduct.module.scss';

import Image from '../Image';
import { BsFillTrashFill } from 'react-icons/bs';
import Button from '../Button';
import { createProductService } from '~/services/adminService';
import { toast } from 'react-toastify';

const cx = classNames.bind(styles);
function ModalEditProduct({ setIsModalEdit, data }) {
    const [image, setImage] = useState(data.image);
    const [name, setName] = useState(data.name);
    const [group, setGroup] = useState(data.group);
    const [priceUp, setPriceUp] = useState(data.priceUp);
    const [priceDown, setPriceDown] = useState(data.priceDown);
    const [color, setColor] = useState(data.color);
    const [rom, setRom] = useState(data.rom);
    const [ram, setRam] = useState(data.ram);
    const [brain, setBrain] = useState(data.brain);
    const [screen, setScreen] = useState(data.screen);
    const [card, setCard] = useState(data.card);
    const [sale, setSale] = useState(data.sale);

    const handleCreate = () => {
        const data = { name, image, group, priceUp, priceDown, color, rom, ram, brain, card, screen, sale };
        createProductService(data).then((data) => {
            if (data) {
                toast.success('Create a new product successfully');
                setIsModalEdit(false);
            }
        });
    };
    return (
        <Portal>
            <div className={cx('wrapper')}>
                <div className={cx('container')}>
                    <div className={cx('header')}>
                        <div>Tạo sản phẩm mới</div>
                        <div className={cx('icon-close')} onClick={() => setIsModalEdit(false)}>
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
                                    Save
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Portal>
    );
}

export default memo(ModalEditProduct);
