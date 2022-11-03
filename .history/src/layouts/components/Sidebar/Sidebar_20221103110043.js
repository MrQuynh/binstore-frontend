import { useState, useEffect } from 'react';

import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import config from '~/config';
import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';
import * as userService from '~/services/userService';
import Menu, { MenuItem } from './Menu';
import SuggestAccounts from '~/components/SuggestAccounts';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import ModalOverlay from '~/components/ModalOverlay';
import { useStore } from '~/hooks';
import { actions } from '~/store';
import { FormattedMessage } from 'react-intl';

const cx = classNames.bind(styles);

const INIT_PAGE = 1;
const PER_PAGE = 5;

function Sidebar({ medium }) {
    const [state, dispatch] = useStore();

    const [suggestedUser, setSuggestedUser] = useState([]);
    const [followingUser, setFollowingUser] = useState([]);
    const [page, setPage] = useState(INIT_PAGE);
    const [page1, setPage1] = useState(INIT_PAGE);
    const [login, setLogin] = useState(false);
    const [count, setCount] = useState(suggestedUser.length + 5);
    const [count1, setCount1] = useState(suggestedUser.length + 5);
    const [seeMore, setSeeMore] = useState(true);
    const [seeMore1, setSeeMore1] = useState(true);
    const [demFl, setDemFl] = useState(0);
    const [demFl1, setDemFl1] = useState(0);

    // get data suggested account
    useEffect(() => {
        userService
            .getSuggested({ page, perPage: PER_PAGE })
            .then((data) => {
                setSuggestedUser((prev) => [...prev, ...data]);
            })
            .catch((error) => console.log(error));
    }, [page]);
    useEffect(() => {
        localStorage.getItem('USER_LOG_IN') &&
            userService
                .getFollowing({ page: page1 })
                .then((data1) => {
                    setFollowingUser((prev) => [...prev, ...data1]);
                })
                .catch((error) => console.log(error));
    }, [page1]);

    // get more account suggestedUser
    const handleViewChange = () => {
        setPage(page + 1);
        setCount((prev) => prev + 5);
        dispatch(actions.setSuggestAccount(suggestedUser));

        if (suggestedUser.length !== count) {
            setSeeMore(false);
        }
        if (!seeMore) {
            setSeeMore(true);
            setSuggestedUser(state.data.slice(0, 5));
            setDemFl((pre) => pre + 1);
        }
        if (demFl >= 1) {
            setSeeMore(!seeMore);
            setSuggestedUser(state.data);
        }
    };
    // get more follow

    const handleViewChange1 = () => {
        setPage1(page1 + 1);
        setCount((prev) => prev + 5);

        if (suggestedUser.length !== count1) {
            setSeeMore1(false);
        }
        if (!seeMore1) {
            setSeeMore1(true);
            setFollowingUser(state.followingAccounts.slice(0, 5));
            setDemFl1((pre) => pre + 1);
        }
        if (demFl >= 1) {
            setSeeMore1(!seeMore1);
            setFollowingUser(state.data);
        }
    };

    // login
    const HandleLogin = () => {
        setLogin(true);
    };

    return <div className={cx('wrapper')}>sibar</div>;
}

export default Sidebar;
