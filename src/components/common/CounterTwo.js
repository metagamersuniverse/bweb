import React from "react";
import CountUp from "react-countup";
import { useRouter } from "next/router";

const CounterTwo = () => {
  const route = useRouter();

  return (
    <div className="counter__section counter__section--uplift">
      <div className="container">
        <div
          className="counter__wrapper aos-init aos-animate"
          data-aos="fade-up"
          data-aos-duration={1000}
        >
          <div className="row g-5 justify-content-center align-items-center">
            <div className="col-lg-3 col-sm-6">
              <div className="counter__item">
                <h3>
                  $
                  <span
                    data-purecounter-start={0}
                    data-purecounter-end={0}
                    className="purecounter"
                  >
                    <CountUp end={0} duration={5} />
                  </span>
                </h3>
                <p>Total PRIZE GIVEN</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="counter__item">
                <h3>
                  <span
                    data-purecounter-start={0}
                    data-purecounter-end={0}
                    className="purecounter"
                  >
                    <CountUp end={0} duration={5} />
                  </span>
                </h3>
                <p>Participated investors</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="counter__item">
                <h3>
                  <span
                    data-purecounter-start={0}
                    data-purecounter-end={0}
                    className="purecounter"
                  >
                    <CountUp end={0} duration={5} />
                  </span>
                  $
                </h3>
                <p>BINGO Balanced</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="counter__item">
                <h3>
                  <span
                    data-purecounter-start={0}
                    data-purecounter-end={0}
                    className="purecounter"
                  >
                    <CountUp end={0} duration={5} />
                  </span>
                </h3>
                <p>BINGO ROUND</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterTwo;
