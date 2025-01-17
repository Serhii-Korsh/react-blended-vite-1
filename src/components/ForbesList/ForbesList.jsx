import { ForbesListItem } from 'components/ForbesListItem/ForbesListItem';
import s from './ForbesList.module.css';

export const ForbesList = ({ list }) => {
  return (
    <div className={s.board}>
      <div className={s.header}>
        <h2 className={s.title}>
          <span className={s.titleTop}>Forbes</span>
          <span className={s.titleBottom}>Leader board</span>
        </h2>
      </div>

      <ul className={s.list}>
        {list.map(item => {
          return (
            <li key={item.id} className={s.item}>
              <ForbesListItem item={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
