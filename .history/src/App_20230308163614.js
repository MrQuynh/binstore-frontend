import { Fragment, useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/layouts';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Message from './components/Message/Message';
import { useStore } from './hooks';
import { io } from 'socket.io-client';

function App() {
    const [state, dispatch] = useStore();
    const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem('USER_LOG_IN')));
    const socket = useRef();
    useEffect(() => {
        socket.current = io('ws://localhost:8900');
        // socket.current.on('getMessage', (data) => {
        //     // console.log('quynh', data);
        //     // data && setCountMessage((prev) => prev + 1);
        //     // setArrivalMessage({
        //     //     sender: data.senderId,
        //     //     text: data.text,
        //     //     createdAt: Date.now(),
        //     // });
        // });
        // setChange(Math.random());
        // scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, []);
    useEffect(() => {
        socket.current.emit('addUser', userInfo?.id);
        socket.current.on('getUsers', (users) => {
            // console.log(users);
        });
    }, []);
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;

                        let Layout = DefaultLayout;
                        let newPath = route.path;
                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                exact
                                key={index}
                                path={newPath}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
                {state.setMessage && <Message />}
                <ToastContainer
                    position="top-right"
                    autoClose={1000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
                {/* Same as */}
                <ToastContainer />
            </div>
        </Router>
    );
}

export default App;
