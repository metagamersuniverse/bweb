import React from "react";
import Simple from "@/components/base/Simple";


function Benifits() {
  return (
    <section className="benifit padding-top">
      <div className="container">
        <div className="section-header section-header--middle">
          <div className="section-header__content">
            <div className="section-header__titlebar">
              <Simple subTitle="Partners" title="Backers" />
            </div>
          </div>
        </div>
        <div className="benifit__wrapper">
          <div className="row g-5">
            
          <div className="col-lg-4 col-sm-6">
              <div className="benifit__item">
                <div className="benifit__item-inner">
                  <div className="benifit__item-thumb">
                    <img width="auto" src="/images/partners/03.png"
                      alt="Benifit image"
                    />
                  </div>
                  <div className="benifit__item-content">
                    <h4>Base Chain</h4>
                    <p>
                    Base is an easy way for decentralized apps to leverage Coinbase's products and distribution.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="benifit__item">
                <div className="benifit__item-inner">
                  <div className="benifit__item-thumb">
                    <img width="auto" src="/images/partners/01.png"
                      alt="Benifit image"
                    />
                  </div>
                  <div className="benifit__item-content">
                    <h4>Pandasale</h4>
                    <p>
                      
Innovating the EVM ecosystem through the AIO DeFi Launchpad
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="benifit__item">
                <div className="benifit__item-inner">
                  <div className="benifit__item-thumb">
                    <img width="auto" src="/images/partners/02.png"
                      alt="Benifit image"
                    />
                  </div>
                  <div className="benifit__item-content">
                    <h4>Dex Screener</h4>
                    <p>
                    DEX Screener is a real-time blockchain analytics app used by 1.5M+ crypto traders every month.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benifits;
