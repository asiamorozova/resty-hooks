import React, { createContext, useState, useContext } from 'react';
import { makeFetch } from '../services/makeFetch';
import { useLocalStorage } from './localStorage';

const Context = createContext;

export const RestyProvider = ({ children }) => {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');
  const [body, setBody] = useState('');
  const [response, setResponse] = useState({});
  const [history, setHistory] = useLocalStorage('history', []);

  const onChange = ({ target }) => {
    if(target.name === 'url') setUrl(target.value);
    if(target.name === 'method') setMethod(target.value);
    if(target.name === 'body') setBody(target.value);

  };

  const onSubmit = event => {
    event. preventDefault();
    makeFetch(url, method, body)
      .then(response => {
        setResponse(response);
        setHistory(prevHistory => [{ url, method }, ...prevHistory]);
      });
  };

  return (
    <Context.Provider value={{ url, method, body, onChange, onSubmit, response, history }}>
      {children}
    </Context.Provider>
  );
};

export const useResty = () => {
  const context = useContext(Context);
  return context;
};


