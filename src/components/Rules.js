import React from 'react';

const Rules = ({ show, handleClose }) => {
  return (
    <div className={`fade wallet-modal modal show ${show ? 'modal-open' : 'modal-closed'}`} id="airdroprulesModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-modal="true" role="dialog" style={{ display: show ? 'block' : 'none' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title" id="exampleModalLabel">Read and Accept Rules</h4>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClose}></button>
          </div>
          <div className="modal-body">
          <div className="stacking__approve-field mb-5">
                <p className="note-text" style={{ color: '#28dbd1', fontWeight: 'bold', fontSize: '18px' }}>
                  Note: This Airdrop is 100% Free. (NO GAS FEE REQUIRED). Just ensure you perform all tasks to be eligible to receive the token. Airdrop value is $10.
                </p>
                <p className="note-text" style={{ color: '#28dbd1', fontSize: '16px' }}>
                  Note: The $DRUG tokens will be sent to your wallet within 24 hours after you claim due to task verification.
                </p>
                <p className="note-text" style={{ color: '#28dbd1', fontSize: '16px' }}>
                  Note: There is a 5% $DRUG airdrop referral reward for inviting friends. Invite more friends to earn more.
                </p>
                <p className="note-text" style={{ color: '#28dbd1', fontSize: '16px' }}>
                  Note: The quantity of Airdrop Tokens in $DRUG may fluctuate. The sum is not fixed but will still total ~$30.
                </p>
                <p className="note-text" style={{ color: '#28dbd1', fontSize: '16px' }}>
                  For sustainability, the Pablobsc team can change the price or the airdrop claim amount at any time. If you agree with these rules, please click the "Accept and proceed" button.
                </p>
                <a href="/tasks">
                <button id="actionbutton" className="default-btn">
                  <span>Accept and Proceed</span>
                </button>
              </a>
              </div>
              <a href="/tasks">
  <button id="actionbutton" className="default-btn" onClick={handleClose}>
    <span>Claim Without</span>
  </button>
</a>

              </div>
          </div>
        </div>
      </div>
  );
};

export default Rules;
