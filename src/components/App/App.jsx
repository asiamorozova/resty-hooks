import React from 'react';
import Form from '../Form/Form';
import { RestyProvider } from '../../hooks/Provider';

export default function App() {
  return (
    <RestyProvider>
      <Form />
    </RestyProvider>
  );
  
}

  
