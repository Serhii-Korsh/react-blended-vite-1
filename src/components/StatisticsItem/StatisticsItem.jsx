import style from './Statistics.module.css';

export const StatisticsItem = ({ title, total, icon: Icon }) => {
  return (
    <>
      <Icon size={22} color={'#1b3a4b'} />
      <span className={style.counter}>{total}</span>
      <p className={style.text}>{title}</p>
    </>
  );
};
