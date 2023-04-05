import { Fragment, useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/layouts';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Message from './components/Message/Message';
import { useStore } from './hooks';
import { io } from 'socket.io-client';
import { actions } from './store';

function App() {
    const [state, dispatch] = useStore();
    const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem('USER_LOG_IN')));
    const socket = useRef();
    const [countMessage, setCountMessage] = useState(0);
    useEffect(() => {
        socket.current = io(`ws:${process.env.REACT_APP_SOCKET_SERVER}`);
        socket.current.on('getMessage', (data) => {
            data && setCountMessage((prev) => prev + 1);
        });
    }, []);
    useEffect(() => {
        dispatch(actions.countMessageRedux(1));
    }, [countMessage]);

    useEffect(() => {
        socket.current.emit('addUser', userInfo?.id);
        socket.current.on('getUsers', (users) => {});
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
                {/* <ToastContainer /> */}
            </div>
        </Router>
    );
}

export default App;
