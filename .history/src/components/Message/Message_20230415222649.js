import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FiSend } from 'react-icons/fi';
import { useStore } from '~/hooks';
import { createAMessageService, getAConversationService } from '~/services/userService';
import { actions } from '~/store';
import Image from '../Image';
import styles from './Message.module.scss';
import TextMessage from './TextMessage';
import { io } from 'socket.io-client';

const cx = classNames.bind(styles);
function Message() {
    const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem('USER_LOG_IN')));
    const [listMessage, setListMessage] = useState('');
    const [sendText, setSendText] = useState('');
    const [converId, setConverId] = useState('');
    const [change, setChange] = useState('');

    const [state, dispatch] = useStore();
    const scrollRef = useRef();

    const handleClose = () => {
        dispatch(actions.setMessageRedux(false));
    };

    useEffect(() => {
        getAConversationService().then((res) => {
            if (res && res.errCode === 0) {
                scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
                setConverId(res.conversationId);

                if (res.data?.length === 0) {
                    setListMessage([{ sendId: 0, text: 'Chào bạn! Chúng tôi có thể giúp gì cho bạn?' }]);
                } else {
                    setListMessage(res.data);
                }
            }
            setChange(Math.random());
        });
    }, []);

    const handleSend = () => {
        createAMessageService({ conversationId: converId, text: sendText }).then((res) => {
            res &&
                res.errCode === 0 &&
                setListMessage((prev) => [
                    ...prev,
                    { text: sendText, senderId: userInfo.id, createdAt: res.data.createdAt },
                ]);
            setSendText('');
        });
        // socket.current.emit('sendMessage', { senderId: userInfo.id, text: sendText, receiverId: 0 });
    };
    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [sendText, change]);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('header-info')}>
                    <Image
                        src="https://www.svgrepo.com/show/217771/shopping-logo.svg"
                        className={cx('header-avatar')}
                    />
                    <p>Bin Store</p>
                </div>
                <AiOutlineClose className={cx('header-icon-close')} onClick={handleClose} />
            </div>
            <div className={cx('body')}>
                {listMessage &&
                    listMessage.map((item, index) => (
                        <div ref={scrollRef} key={index}>
                            <TextMessage key={index} own={+item.senderId === +userInfo.id ? true : false} data={item} />
                        </div>
                    ))}
            </div>
            <div className={cx('footer')}>
                <input type="text" placeholder="Aa..." value={sendText} onChange={(e) => setSendText(e.target.value)} />

                <FiSend className={cx('footer-icon-send')} onClick={handleSend} />
            </div>
        </div>
    );
}

export default Message;
