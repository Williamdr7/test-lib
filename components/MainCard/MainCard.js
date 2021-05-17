import React from 'react';
import './maincard.scss';
/*import { VeneerButton } from 'imprint';
import { getBranding } from '../../../helpers/localizationHelper';*/

export default function MainCard({ promo }) {
  function offerValidText(endDate) {
    return (
      <div className={'promo-valid-date'}>
        <p>
          {'vulcan.home.promo_card.offer_valid_until'} {endDate}
        </p>
      </div>
    );
  }

  return (
    <div
      data-testid={`${promo.offerType}-promo-content`}
      className='promo-content-wrapper'
      style={{ margin: 'auto' }}
    >
      <div className='promo-content-title'>
        <h2>Enjoy free pages!</h2>
      </div>
      <img
        className={'promo-content-image'}
        src={
          'https://raw.github.azc.ext.hp.com/instantink/vulcan/master/app/storybook/images/free_pages.png?token=AAAFCVOCAJ2OVIV35UUG4J3AVQBNE'
        }
      />
      <div className={'promo-title'}>
        <p>Get 1 free page</p>
      </div>
      <div className={'promo-description'}>
        <p>
          We want to thank you for being a valued customer with this
          no-strings-attached offer.
        </p>
      </div>
      {promo.offer_expiration_date && offerValidText(promo.endDate)}
      <div className='link-wrapper'>
        <a onClick={promo.openDetailsModal}>Offer Details</a>
      </div>
      <div className={'promo-button-wrapper'}>
        {/*<VeneerButton
          id='promo-button'
          className='veneer-button-primary'
          onClick={promo.openRedeemModal}
        >
          {I18n.t('vulcan.home.promo_card.get_offers')}
        </VeneerButton>*/}
      </div>
    </div>
  );
}
