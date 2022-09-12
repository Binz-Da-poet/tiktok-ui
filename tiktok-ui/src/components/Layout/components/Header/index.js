import { useState } from 'react';
import { useEffect } from 'react';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Layout/Popper';
import AccountItem from '../../Popper/AccountItem';
import Button from '~/components/Button';
import Menu from '../../Popper/Menu';

const cx = classNames.bind(styles);

const Menu_Items = [
    {
        icon: <img src={images.language} alt="Language" />,
        title: '日本語',
        children: {
            title: '言語',
            data: [
                { code: 'en', title: '英語' },
                { code: 'vi', title: 'ベトナム語' },
            ],
        },
    },
    {
        icon: <img src={images.feedback} alt="Feedback" />,
        title: 'フィードバックとヘルプ',
        to: '/feedback',
    },
    {
        icon: <img src={images.keyboard} alt="Keyboard" />,
        title: 'キーボードショートカット',
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="logo"></img>
                </div>
                <Tippy
                    interactive
                    visible={searchResult.length > 3}
                    render={(attrs) => (
                        <div className={cx('search-results')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>アカウント</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="アカウントまたは動画を検索" spellCheck={false} />
                        <button className={cx('clear')}>
                            <img src={images.clear} alt="clear-icon"></img>
                        </button>
                        <img className={cx('loading')} src={images.loading} alt="loading-icon"></img>
                        <button className={cx('search-btn')}>
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 48 48"
                                fill="rgba(22, 24, 35, 0.34)"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M22 10C15.3726 10 10 15.3726 10 22C10 28.6274 15.3726 34 22 34C28.6274 34 34 28.6274 34 22C34 15.3726 28.6274 10 22 10ZM6 22C6 13.1634 13.1634 6 22 6C30.8366 6 38 13.1634 38 22C38 25.6974 36.7458 29.1019 34.6397 31.8113L43.3809 40.5565C43.7712 40.947 43.7712 41.5801 43.3807 41.9705L41.9665 43.3847C41.5759 43.7753 40.9426 43.7752 40.5521 43.3846L31.8113 34.6397C29.1019 36.7458 25.6974 38 22 38C13.1634 38 6 30.8366 6 22Z"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </Tippy>
                <div className={cx('actions')}>
                    <Button textType lefticon={<img className={cx('plus-icon')} src={images.plus} alt="plusicon" />}>
                        アップロード
                    </Button>
                    <Button primary>ログイン</Button>
                    <Menu items={Menu_Items}>
                        <button className={cx('more-btn')}>
                            <img className={cx('plus-icon')} src={images.elipsisVertical} alt="more-btn" />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
