import { useEffect, useState, useRef } from 'react';

import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
// import AccountItem from '~/components/AccountItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { SearchIcon } from '~/components/Icons';
import { useDebounce } from '~/hooks';

import * as searchServices from '~/services/searchService';

import { injectIntl } from 'react-intl';
import SearchProductItem from '~/components/SearchProductItem/SearchProductItem';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const debouncedValue = useDebounce(searchValue, 500);

    const inputRef = useRef();

    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(false);
            const result = await searchServices.search(debouncedValue);
            setSearchResult(result);
            setLoading(false);
        };

        fetchApi();
    }, [debouncedValue]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    return (
        <>
            <HeadlessTippy
                interactive
                className={cx('search-tippy')}
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Danh sách sản phẩm</h4>
                            {searchResult.map((result) => (
                                <SearchProductItem
                                    key={result.id}
                                    data={result}
                                    setShowResult={setShowResult}
                                    setSearchResult={setSearchResult}
                                />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        spellCheck={false}
                        placeholder="Nhập tên điện thoại, máy tính, phụ kiện... cần tìm"
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                    />

                    {!!searchValue && !loading && (
                        <button className={cx('clear')} onClick={handleClear}>
                            <FontAwesomeIcon className={cx('icon')} icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <SearchIcon className={cx('icon')} setSearchValue={setSearchValue} />
                    </button>
                </div>
            </HeadlessTippy>
        </>
    );
}

export default injectIntl(Search);
