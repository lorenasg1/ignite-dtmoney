import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Salário',
          amount: 3400,
          type: 'deposit',
          category: 'Dev',
          createdAt: new Date(),
        },
        {
          id: 2,
          title: 'Freelancer de app',
          amount: 6000,
          type: 'deposit',
          category: 'Dev',
          createdAt: new Date(),
        },
        {
          id: 3,
          title: 'Aluguel',
          amount: 953,
          type: 'withdraw',
          category: 'Casa',
          createdAt: new Date(),
        },
      ],
    });
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
