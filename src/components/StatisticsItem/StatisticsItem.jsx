import style from './Statistics.module.css';

export const StatisticsItem = ({ stat, icon: Icon }) => {
  return (
    <>
      <Icon />
      <span className={style.counter}>{stat.total}</span>
      <p className={style.text}>{stat.title}</p>
    </>
  );
};
