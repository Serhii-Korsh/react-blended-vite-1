import s from './CryptoHistory.module.css';
import { format } from 'date-fns';

export const CryptoHistory = ({ items }) => {
  return (
    <>
      <table className={s.table}>
        <thead className={s.thead}>
          <tr>
            <th className={s.th}>№</th>
            <th className={s.th}>PRICE</th>
            <th className={s.th}>AMOUNT</th>
            <th className={s.th}>DATE</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => {
            const { id, price, amount, date } = item;
            const result = format(new Date(date), 'MM/dd/yyyy, h:mm a');
            return (
              <tr key={id} className={s.tr}>
                <td className={s.td}>{index + 1}</td>
                <td className={s.td}>{price}</td>
                <td className={s.td}>{amount}</td>
                <td className={s.td}>{result}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
