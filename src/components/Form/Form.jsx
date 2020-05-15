import React from 'react';
import Request from '../Request/Request';
import Response from '../Responce/Responce';
import HistoryList from '../History/HistoryList';

const Form = () => (
  <>
    <HistoryList />
    <Request />
    <Response />
  </>
);

export default Form;


