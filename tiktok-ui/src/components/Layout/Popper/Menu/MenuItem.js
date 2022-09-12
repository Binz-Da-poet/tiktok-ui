import classNames from 'classnames/bind';
import styles from './menu.module.scss';

const cx = classNames.bind(styles);
function MenuItem({ data, onClick }) {
    return (
        <li className={cx('item-wrapper')} onClick={onClick}>
            <div className={cx('items')}>
                {data.icon}
                <span className={cx('item')}>{data.title}</span>
            </div>
        </li>
    );
}

export default MenuItem;
