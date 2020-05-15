import React from 'react';
import PropTypes from 'prop-types';
import History from './HistoryItem';
import { useResty } from '../../hooks/Provider';

const HistoryList = () => {
  const { history } = useResty();

  const historyList = history.map((element, i) => (
    <li key={i}>
      <History{... element }/>
    </li>
  ));

  return (
    <ul>
      {historyList}
    </ul>

  );
};

HistoryList.propTypes = {
  history: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired

  })).isRequired
};
