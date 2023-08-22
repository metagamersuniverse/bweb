import React from "react";
import Simple from "@/components/base/Simple";
import Link from "next/link";


const Work = () => {
  return (
    <section className="work padding-top padding-bottom">
      <div className="container">
        <div
          className="section-header section-header--middle aos-init"
          data-aos="fade-up"
          data-aos-duration={800}
        >
          <div className="section-header__content">
            <div className="section-header__titlebar">
              <Simple subTitle="Getting Start" title="Simple as 1, 2, 3" />
            </div>
          </div>
        </div>
        <div className="work__wrapper">
          <div className="row  justify-content-center g-4">
            <div className="col-lg-4 col-sm-6">
              <div
                className="work__item aos-init"
                data-aos="fade-up"
                data-aos-duration={800}
              >
                <div className="work__item-inner">
                  <div className="work__item-thumb">
                    <img width="auto" src="/images/work/1.png"
                      alt="work Step 1 Image"
                    />
                  </div>
                  <div className="work__item-content">
                    <h4>1.Buy $BINGO</h4>
                    <p>
                    Acquire a minimum of 100,000 units of the token to be automatically enrolled in Base Bingo's automated lottery.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div
                className="work__item aos-init"
                data-aos="fade-up"
                data-aos-duration={800}
                data-aos-delay={200}
              >
                <div className="work__item-inner">
                  <div className="work__item-thumb">
                    <img width="auto" src="/images/work/2.png"
                      alt="work Step 2 Image"
                    />
                  </div>
                  <div className="work__item-content">
                    <h4>2. Hold</h4>
                    <p>
                    Hold $BINGO in your wallet and keep an eye on the accumulation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div
                className="work__item aos-init"
                data-aos="fade-up"
                data-aos-duration={800}
                data-aos-delay={300}
              >
                <div className="work__item-inner">
                  <div className="work__item-thumb">
                    <img width="auto" src="/images/work/3.png"
                      alt="work Step 3 Image"
                    />
                  </div>
                  <div className="work__item-content">
                    <h4>3. Win & Earn</h4>
                    <p>
                    The token system will randomly select a winner who will receive 0.005 ETH.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-5">
            <Link href="https://basedswap.exchange/#/swap?outputCurrency=0x17528572ffa56c5d7784f414923faa8427ac75a8" className="default-btn">
              <span>BUY NOW</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
