import React from 'react';
import ReactDOM from 'react-dom';
import { MainCard } from '../src';

const App = () => (
  <MainCard
    promo={{
      redeem: 'PropTypes.func.isRequired',
      offerType: '1',
      endDate: 'PropTypes.string.isRequired',
      openRedeemModal: 'PropTypes.func.isRequired',
      openDetailsModal: 'PropTypes.func.isRequired',
      openConfirmationModal: 'PropTypes.func.isRequired',
      standaloneMode: 'PropTypes.bool.isRequired',
      offer_expiration_date: 'x',
    }}
  />
);

ReactDOM.render(<App />, document.getElementById('root'));
