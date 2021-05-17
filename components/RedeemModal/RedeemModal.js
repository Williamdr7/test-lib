import React from 'react';
import styled from './redeemModal.scss';

export default function RedeemModal({
  promo,
  openDetailsModal,
  closeRedeemModal,
  redeem,
  showRedeemModal,
  error,
}) {
  return <div></div>;
  {
    /*<Modal
      className='vulcan-bootstrap-iso'
      showModal={showRedeemModal}
      showCloseButton={false}
      onClose={closeRedeemModal}
    >
      <div id={styles['redeem-modal-header']}>
        <p>vulcan.home.promo_card.${offerType}.redeem_modal.title</p>
      </div>
      <ModalBody>
        <p className={styles['redeem-modal-description']}>
          vulcan.home.promo_card.${offerType}.redeem_modal.description
        </p>
        {error && renderErrorMessage()}
        <ModalButtons>
          {/*<div className='vn-button-group--responsive'>
            <VeneerButton
              id='offer-terms-button'
              onClick={openDetailsModal}
              appearance='secondary'
              className='veneer-button-secondary'
              disabled={promo.redeeming}
            >
              {'vulcan.home.promo_card.offer_terms'}
            </VeneerButton>
            <VeneerButton
              id='close-redeem-modal'
              onClick={closeRedeemModal}
              appearance='secondary'
              className='veneer-button-secondary'
              disabled={promo.redeeming}
            >
              {'vulcan.shared.cancel'}
            </VeneerButton>
            <VeneerButton
              id='redeem-offer-button'
              onClick={redeem}
              appearance={'primary'}
              className='veneer-button-primary'
              loading={promo.redeeming}
            >
              {'vulcan.home.promo_card.accept_offer'}
            </VeneerButton>
  </div>
        </ModalButtons>
      </ModalBody>
  </Modal>*/
  }
}
