import React from 'react';
import {getCurrentMonth} from '@kolo/services/helpers/getCurrentMonth';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import useMonthPack from './useMonthPack';

import './MonthPack.scss';

// remove the mocked component
const PackItem = () => <div>PackItem</div>;

export const MonthPack = () => {
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
                pack={packItem}
                onClick={() => handlePackItemClick(packItem.id)}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

MonthPack.propTypes = {
  monthPack: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.number,
      isFree: PropTypes.bool,
      icons: PropTypes.arrayOf(PropTypes.object),
    })
  ),
  getMonthPackStart: PropTypes.func,
};
