import SalesChart from "@/components/partials/SalesChart";
import { useRouter } from "next/router";
import React from "react";

function Token({ tokenomics }) {
  const route = useRouter()
  return (
    <section className="token tokenClass3 tokenClass padding-top padding-bottom">
      <div className="container">
        <div className="section-header section-header--middle">
          <div className="section-header__content ">
            <div className="section-header__titlebar">
              <p className="section-header__subtitle"> Statistics</p>
              <h2 className="section__header__title">Tokenomics</h2>
            </div>
          </div>
        </div>
        <div className="token__wrapper">
          <div className="row g-5">
            <div className="col-lg-6">
              <div className="token__info">
                <ul className="token__info-list">
                  <li key={tokenomics.key} className="token__info-list-item">
                    <p className="token__info-list-name">Total Supply</p>
                    <p className="token__info-list-value">
                      {100000000} $BINGO
                    </p>
                  </li>

                  <li className="token__info-list-item">
                    <p className="token__info-list-name">Liquidity Pool</p>
                    <p className="token__info-list-value">
                      {10}%
                    </p>
                  </li>
                  <li className="token__info-list-item">
                    <p className="token__info-list-name">Burn</p>
                    <p className="token__info-list-value">
                      {90}%
                    </p>
                  </li>
                  <li className="token__info-list-item">
                    <h2 className="token__info-list-name">Fees</h2>
                    
                  </li>
                  <li className="token__info-list-item">
                    <p className="token__info-list-name">Lottery</p>
                    <p className="token__info-list-value">
                    {2}%
                    </p>
                  </li>
                  <li className="token__info-list-item">
                    <p className="token__info-list-name">Liquidity</p>
                    <p className="token__info-list-value">
                      {2}%
                    </p>
                  </li>
                  <li className="token__info-list-item">
                    <p className="token__info-list-name">Ecosystem</p>
                    <p className="token__info-list-value">
                    {2}%
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <SalesChart />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Token;
