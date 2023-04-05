import classNames from 'classnames/bind';
import moment from 'moment';
import { useEffect, useRef, useState } from 'react';
import { BiArrowBack, BiSearchAlt2 } from 'react-icons/bi';
import { FiSend } from 'react-icons/fi';
import Image from '~/components/Image';
import { getAConversationAdminService, getConversationService, sendTextAdminService } from '~/services/adminService';
import styles from './AdminMessage.module.scss';
import { io } from 'socket.io-client';

const cx = classNames.bind(styles);

function AdminMessage() {
    const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem('USER_LOG_IN')));
    const [listConversations, setListConversations] = useState('');
    const [listMessage, setListMessage] = useState('');
    const [textInput, setTextInput] = useState('');
    const [activeConversations, setActiveConversations] = useState('');
    const scrollRef = useRef();

    const [arrivalMessage, setArrivalMessage] = useState(null);
    const socket = useRef();

    // socket io
    useEffect(() => {
        socket.current = io('ws://localhost:8900');
        socket.current.on('getMessage', (data) => {
            console.log('data', data);
            setArrivalMessage({
                sender: data.senderId,
                text: data.text,
                createdAt: Date.now(),
            });
        });
    }, []);
    useEffect(() => {
        arrivalMessage && setListMessage((prev) => [...prev, arrivalMessage]);
    }, [arrivalMessage]);

    useEffect(() => {
        socket.current.emit('addUser', 0);
        socket.current.on('getUsers', (users) => {
            console.log('user', users);
        });
    }, []);

    useEffect(() => {
        getConversationService().then((res) => {
            if (res && res.errCode === 0) {
                setListConversations(res.data);
            }
        });
    }, []);
    const handleChooseConversation = (item) => {
        setActiveConversations(item);
        getAConversationAdminService(item.id).then((res) => {
            if (res && res.errCode === 0) {
                setListMessage(res.data);
                scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
            }
        });
    };
    // console.log(activeConversations);
    const handleSend = () => {
        if (textInput) {
            sendTextAdminService({ text: textInput, conversationId: activeConversations.id }).then((res) => {
                if (res && res.errCode === 0) {
                    setListMessage((prev) => [...prev, { text: textInput, senderId: 0, createdAt: Date.now() }]);
                    setTextInput('');
                }
            });
            socket.current.emit('sendMessageAdmin', {
                senderId: 0,
                text: textInput,
                receiverId: activeConversations.memberTwoId,
            });
        }
    };
    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [textInput]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>Manage Messages</div>
            <div className={cx('body-message')}>
                <div className={cx('left')}>
                    <div className={cx('left-title')}>
                        <div className={cx('left-input-body')}>
                            <BiSearchAlt2 className={cx('left-input-icon')} />
                            <input type="text" placeholder="Tìm kiếm..." className={cx('left-input')} />
                        </div>
                    </div>
                    <div className={cx('left-list-user')}>
                        <div className={cx('left-list')}>
                            {listConversations &&
                                listConversations.length > 0 &&
                                listConversations.map((item, index) => (
                                    <div
                                        className={cx('item', activeConversations.id == item.id && 'item-active')}
                                        key={index}
                                        onClick={() => handleChooseConversation(item)}
                                    >
                                        <Image src={item.userSendData.image} className={cx('item-avatar')} />
                                        <div className={cx('item-body')}>
                                            <div className={cx('item-body-info')}>
                                                <div className={cx('item-name')}>{item.userSendData.nickName}</div>
                                                <div className={cx('item-text')}>
                                                    <span>You:</span> Hôm nay thế nào?
                                                </div>
                                            </div>
                                            <p className={cx('item-status')}></p>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
                <div className={cx('right')}>
                    {activeConversations && (
                        <>
                            <div className={cx('r-header')}>
                                <Image
                                    src={activeConversations?.userSendData.image}
                                    className={cx('r-header-avatar')}
                                />
                                <div className={cx('r-header-info')}>
                                    <div>{activeConversations?.userSendData?.nickName}</div>
                                    <p>Hoạt động 2 giờ trước</p>
                                </div>
                            </div>
                            <div className={cx('r-body')}>
                                {listMessage &&
                                    listMessage.length > 0 &&
                                    listMessage.map((item, index) => (
                                        <div
                                            className={cx('r-item', item.senderId == 0 && 'r-item-own')}
                                            ref={scrollRef}
                                            key={index}
                                        >
                                            <div className={cx('r-item-info')}>
                                                <div className={cx('r-item-image')}>
                                                    <Image
                                                        src={activeConversations?.userSendData.image}
                                                        className={cx('r-item-avatar')}
                                                    />
                                                </div>
                                                <div className={cx('r-item-body')}>
                                                    <div>{item.text}</div>
                                                </div>
                                            </div>
                                            <p>{moment(item.createdAt).fromNow()}</p>
                                        </div>
                                    ))}
                            </div>
                        </>
                    )}
                    <div className={cx('r-bottom')}>
                        <input
                            type="text"
                            className={cx('r-bottom-input')}
                            placeholder="Aa.."
                            value={textInput}
                            onChange={(e) => setTextInput(e.target.value)}
                        />
                        <FiSend className={cx('r-bottom-icon')} onClick={handleSend} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminMessage;
