import './MonthPack.scss';

import {getCurrentMonth} from '@kolo/services/helpers/getCurrentMonth';
import classNames from 'classnames';
import {FC} from 'react';

import PackItem from '../PackItem/PackItem';
import useMonthPack from './useMonthPack';

export const MonthPack: FC = () => {
  const {handlePackItemClick, monthPack} = useMonthPack();

  return (
    <section
      className={classNames('month-pack')}
      id="freeMonthPack"
    >
      <div className={classNames('month-pack__inner')}>
        <h2 className={classNames('month-pack__inner--header')}>{getCurrentMonth()}</h2>
        <p className={classNames('month-pack__inner--paragraph')}>Free Month Icon Set</p>

        <div className={classNames('month-pack__list')}>
          {monthPack &&
            monthPack.map((packItem) => (
              <PackItem
                key={packItem.id}
                categoryId={packItem.id}
                icons={packItem.icons}
                iconsAmount={packItem.number}
                isFree={packItem.isFree}
                title={packItem.name}
                onClick={() => handlePackItemClick(packItem.id)}
              />
            ))}
        </div>
      </div>
    </section>
  );
};
