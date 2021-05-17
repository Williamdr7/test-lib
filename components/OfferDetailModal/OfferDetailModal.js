import React from 'react';
import './offerDetailModal.scss';
//import {VeneerButton, Modal, ModalBody, ModalButtons} from "imprint";

export default function OfferDetailsModal({ offerType, endDate }) {
  return {
    /*<Modal
      className='vulcan-bootstrap-iso'
      showModal={this.state.showDetailsModal}
      showCloseButton={false}
      onClose={this.closeDetailsModal}
    >
      <div id={styles['details-modal-header']}>
        <img
          alt='Instant Ink logo'
          src={require('../../icons/InstantInkLogo.png')}
        />
      </div>
      <ModalBody>
        <p className={styles['details-modal-description']}>
          {I18n.t(`vulcan.home.promo_card.${offerType}.offer_details_content`, {
            date: endDate,
            branding: getBranding(false, this.props.enableRebranding),
          })}
        </p>
        <div className={styles['button-wrapper']}>
          <VeneerButton
            id='close-details-modal'
            className='veneer-button-primary'
            onClick={this.closeDetailsModal}
          >
            {I18n.t(
              'vulcan.my_account_page.cancel_enrollment.cancellation_modal.buttons.close'
            )}
          </VeneerButton>
        </div>
      </ModalBody>
            </Modal>*/
  };
}
