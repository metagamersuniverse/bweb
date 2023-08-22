import React from 'react';
import Simple from "@/components/base/Simple";

function Roadmap() {
  return (
    <section className="roadmap padding-bottom" id="roadmap">
      <div className="container">
        <div className="section-header section-header--middle">
          <div className="section-header__content">
            <div className="section-header__titlebar">
              <Simple subTitle="Explore" title="Our Roadmap" />
            </div>
          </div>
        </div>
        <div className="roadmap__wrapper2">
          <div className="row gy-4 gy-md-0 gx-5">
            <div className="col-md-6 offset-md-6">
              <div
                className="roadmap__item2 ms-md-4 aos-init aos-animate"
                data-aos="fade-left"
                data-aos-duration={800}
              >
                <div className="roadmap__item2-inner">
                  <div className="roadmap__item2-content">
                    <div className="roadmap__item2-header">
                      <h4>Phase 01</h4>
                    </div>
                    <ul>
                      <li>Idea & Concept</li>
                      <li>Branding, Landing page</li>
                      <li>Website & Whitepaper release</li>
                      <li>Socials and community building</li>
                      <li>Smart Contract Deploy on mainnet</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="roadmap__item2 ms-auto me-md-4 aos-init aos-animate"
                data-aos="fade-right"
                data-aos-duration={800}
              >
                <div className="roadmap__item2-inner">
                  <div className="roadmap__item2-content">
                    <div className="roadmap__item2-header">
                      <h4>Phase 02</h4>
                    </div>
                    <ul>
                      <li>Intelligent contract development with integrated auto-lottery system.</li>
                      <li>Implementation in Testnet for Technical Evaluation.</li>
                      <li>Implementation in Mainnet for production evaluation.</li>
                      <li>Public Audit</li>
                      <li>Audit Badge</li>
                      <li>KYC Badge</li>
                      <li>Presale on Launchpad</li>
                      <li>Project Launch ON SWAP</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 offset-md-6">
              <div
                className="roadmap__item2 ms-auto me-md-4 aos-init aos-animate"
                data-aos="fade-left"
                data-aos-duration={800}
              >
                <div className="roadmap__item2-inner">
                  <div className="roadmap__item2-content">
                    <div className="roadmap__item2-header">
                      <h4>Phase 03</h4>
                    </div>
                    <ul>
                      <li>$BINGO Tracker Bot released</li>
                      <li>Apply in CG & CMC</li>
                      <li>$BINGO coin on all crypto sites</li>
                      <li>Target 500 holders</li>
                      <li>Testnet Lottery DAPP</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="roadmap__item2 ms-auto me-md-4 aos-init aos-animate"
                data-aos="fade-right"
                data-aos-duration={800}
              >
                <div className="roadmap__item2-inner">
                  <div className="roadmap__item2-content">
                    <div className="roadmap__item2-header">
                      <h4>Phase 04</h4>
                    </div>
                    <ul>
                      <li>Mainnet Lottery DAPP</li>
                      <li>Update $BINGO tracker BOT</li>
                      <li>Release UI of Gambling DAPP</li>
                      <li>$BINGO DAO</li>
                      <li>More will be revealed</li>
                    </ul>
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

export default Roadmap;
