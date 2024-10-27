import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import { StatisticsItem } from '../StatisticsItem/StatisticsItem';
import style from './Statistics.module.css';

// const iconList = {
//   1: FaRegThumbsUp,
//   2: MdPeople,
//   3: MdOutlineProductionQuantityLimits,
//   4: GiTreeDoor,
// };

function getIcon(id) {
  switch (Number(id)) {
    case 1:
      return FaRegThumbsUp;
    case 2:
      return MdPeople;
    case 3:
      return MdOutlineProductionQuantityLimits;
    case 4:
      return GiTreeDoor;
    default:
      throw new Error('No icon');
  }
}

export const Statistics = ({ title, stats }) => {
  return (
    <div>
      {title && <h3 className={style.title}>{title}</h3>}{' '}
      <ul className={style.list}>
        {stats.map(({ id, total, title }) => {
          return (
            <li key={id} className={style.item}>
              <StatisticsItem total={total} title={title} icon={getIcon(id)} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
