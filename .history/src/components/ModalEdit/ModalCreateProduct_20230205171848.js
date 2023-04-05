import classNames from 'classnames/bind';
import { memo, useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Portal from '~/components/Portal';
import styles from './ModalCreateProduct.module.scss';

import Button from '../Button';
import { createProductService } from '~/services/adminService';
import { toast } from 'react-toastify';
import { getAllCode } from '~/services/productService';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';

const cx = classNames.bind(styles);
function ModalCreateProduct({ setIsModal, id, action, dataProduct }) {
    console.log('data', dataProduct);

    const [contentMarkdown, setContentMarkdown] = useState('');
    const [contentHTML, setContentHTML] = useState('');
    const mdParser = new MarkdownIt();
    const [image, setImage] = useState();
    const [name, setName] = useState(dataProduct && dataProduct.name);
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
    const [cpu, setCpu] = useState('');
    const [origan, setOrigan] = useState('');
    const [count, setCount] = useState('');
    const [camera, setCamera] = useState('');

    const handleChangeImage = (e) => {
        setImage(e.target.files[0]);
    };
    const formData = new FormData();
    formData.append('avatar', image);
    formData.append('name', name);
    formData.append('group', group);
    formData.append('priceUp', priceUp);
    formData.append('priceDown', priceDown);
    formData.append('color', color);
    formData.append('rom', rom);
    formData.append('ram', ram);
    formData.append('brain', brain);
    formData.append('screen', screen);
    formData.append('card', card);
    formData.append('sale', sale);
    formData.append('camera', camera);
    formData.append('origin', origan);
    formData.append('amount', count);
    formData.append('cpu', cpu);
    formData.append('id', id);
    formData.append('contentMarkdown', contentMarkdown);
    formData.append('contentHTML', contentHTML);

    const [codeGroup, setCodeGroup] = useState('');
    const [codeBrain, setCodeBrain] = useState('');

    useEffect(() => {
        getAllCode('group').then((data) => data && data.errCode === 0 && setCodeGroup(data.data));
        getAllCode('brain').then((data) => data && data.errCode === 0 && setCodeBrain(data.data));
    }, []);
    // console.log(codeGroup);
    const handleOnchangeGroup = (e) => {
        setGroup(e.target.value);
    };
    // markdown\

    const handleEditorChange = ({ html, text }) => {
        setContentMarkdown(text);
        setContentHTML(html);
    };

    const handleCreate = () => {
        // const data = { name, image, group, priceUp, priceDown, color, rom, ram, brain, card, screen, sale };
        // console.log('content', contentHTML, contentMarkdown);
        // return;

        createProductService(formData).then((data) => {
            if (data) {
                toast.success('Create a new product successfully');
                setIsModal(false);
            }
        });
    };
    return (
        <Portal>
            <div className={cx('wrapper')}>
                <div className={cx('container')}>
                    <div className={cx('header')}>
                        <div>{action === 'CREATE' ? 'Tạo sản phẩm mới' : 'Chỉnh sửa sản phẩm'}</div>
                        <div
                            className={cx('icon-close')}
                            onClick={() => {
                                setIsModal(false);
                                // setIsModalEdit(false);
                            }}
                        >
                            <AiOutlineClose className={cx('icon-close-item')} />
                        </div>
                    </div>
                    <div className={cx('body')}>
                        <div className={cx('body-detail')}>
                            <div className={cx('group-title')}>
                                <div className={cx('text-tile')}>Ảnh sản phẩm:</div>
                                <input onChange={handleChangeImage} type="file" />
                            </div>
                            <div className={cx('group-title')}>
                                <div className={cx('text-tile')}>Tên sản phẩm:</div>
                                <input
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    type="text"
                                    // className={cx('input')}
                                    placeholder="Tên sản phẩm"
                                />
                            </div>
                            <div className={cx('group-title')}>
                                <div className={cx('text-tile')}>Nhóm:</div>
                                <select
                                    // className={cx('input')}
                                    onChange={handleOnchangeGroup}
                                >
                                    {codeGroup &&
                                        codeGroup.length > 0 &&
                                        codeGroup.map((item, index) => {
                                            return (
                                                <option value={item.keyMap} key={index}>
                                                    {item.value}
                                                </option>
                                            );
                                        })}
                                </select>
                            </div>

                            <div className={cx('group-title')}>
                                <div className={cx('text-tile')}>Giá gốc:</div>
                                <input
                                    type="text"
                                    className={cx('input')}
                                    placeholder="Giá"
                                    value={priceUp}
                                    onChange={(e) => setPriceUp(e.target.value)}
                                />
                            </div>
                            <div className={cx('group-title')}>
                                <div className={cx('text-tile')}>Giá giảm:</div>
                                <input
                                    type="text"
                                    className={cx('input')}
                                    placeholder="Giá giảm"
                                    value={priceDown}
                                    onChange={(e) => setPriceDown(e.target.value)}
                                />
                            </div>
                            <div className={cx('group-title')}>
                                <div className={cx('text-tile')}>Màu sắc:</div>
                                <input
                                    type="text"
                                    className={cx('input')}
                                    placeholder="Màu"
                                    value={color}
                                    onChange={(e) => setColor(e.target.value)}
                                />
                            </div>
                            <div className={cx('group-title')}>
                                <div className={cx('text-tile')}>Rom:</div>
                                <input
                                    type="text"
                                    className={cx('input')}
                                    placeholder="Rom"
                                    value={rom}
                                    onChange={(e) => setRom(e.target.value)}
                                />
                            </div>
                            <div className={cx('group-title')}>
                                <div className={cx('text-tile')}>Ram:</div>
                                <input
                                    type="text"
                                    className={cx('input')}
                                    placeholder="Ram"
                                    value={ram}
                                    onChange={(e) => setRam(e.target.value)}
                                />
                            </div>
                            <div className={cx('group-title')}>
                                <div className={cx('text-tile')}>Màn hình:</div>
                                <input
                                    type="text"
                                    className={cx('input')}
                                    placeholder="Screen"
                                    value={screen}
                                    onChange={(e) => setScreen(e.target.value)}
                                />
                            </div>
                            {/*  */}
                            <div className={cx('group-title')}>
                                <div className={cx('text-tile')}>Camera:</div>
                                <input
                                    type="text"
                                    className={cx('input')}
                                    placeholder="Camera"
                                    value={camera}
                                    onChange={(e) => setCamera(e.target.value)}
                                />
                            </div>
                            <div className={cx('group-title')}>
                                <div className={cx('text-tile')}>CPU:</div>
                                <input
                                    type="text"
                                    className={cx('input')}
                                    placeholder="CPU"
                                    value={cpu}
                                    onChange={(e) => setCpu(e.target.value)}
                                />
                            </div>
                            <div className={cx('group-title')}>
                                <div className={cx('text-tile')}>Xuất sứ:</div>
                                <input
                                    type="text"
                                    className={cx('input')}
                                    placeholder="Xuất Sứ"
                                    value={origan}
                                    onChange={(e) => setOrigan(e.target.value)}
                                />
                            </div>
                            <div className={cx('group-title')}>
                                <div className={cx('text-tile')}>Số lượng:</div>
                                <input
                                    type="text"
                                    className={cx('input')}
                                    placeholder="Số lượng"
                                    value={count}
                                    onChange={(e) => setCount(e.target.value)}
                                />
                            </div>

                            <div className={cx('group-title')}>
                                <div className={cx('text-tile')}>Card:</div>
                                <input
                                    type="text"
                                    className={cx('input')}
                                    placeholder="Card"
                                    value={card}
                                    onChange={(e) => setCard(e.target.value)}
                                />
                            </div>
                            <div className={cx('group-title')}>
                                <div className={cx('text-tile')}>Sale:</div>
                                <input
                                    type="text"
                                    className={cx('input')}
                                    placeholder="Sale"
                                    value={sale}
                                    onChange={(e) => setSale(e.target.value)}
                                />
                            </div>
                            <div className={cx('group-title')}>
                                <div className={cx('text-tile')}>Thương hiệu:</div>
                                <select className={cx('input')} onChange={(e) => setBrain(e.target.value)}>
                                    {codeBrain &&
                                        codeBrain.length > 0 &&
                                        codeBrain.map((item, index) => {
                                            return (
                                                <option value={item.keyMap} key={index}>
                                                    {item.value}
                                                </option>
                                            );
                                        })}
                                </select>
                            </div>
                        </div>
                        <div className={cx('markdown')}>
                            <MdEditor
                                style={{ height: '300px' }}
                                value={contentMarkdown}
                                renderHTML={(text) => mdParser.render(text)}
                                onChange={handleEditorChange}
                            />
                        </div>
                        <div className={cx('footer')}>
                            <div className={cx('footer-btn')}>
                                <Button className={cx('btn-finish')} onClick={handleCreate}>
                                    {action === 'CREATE' ? 'Tạo mới' : 'Lưu'}
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
