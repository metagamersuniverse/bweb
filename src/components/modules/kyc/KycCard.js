import Link from 'next/link';
import { faMedium, faTelegramPlane } from "@fortawesome/free-brands-svg-icons";
import { faCloudArrowUp,faTelegram,faEye,faHeart,faRightToBracket, faFaceAngry, faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function KycCard({ activeID, stepForword, submit, stepBackword }) {
  return (
    <section className="kyc padding-top padding-bottom">
      <div className="container">
        <div className="kyc__wrapper">
          <form className="kyc__form" id="kycForm" action="#!">
            {/* start step indicators */}
            <div className="form-header d-flex">
              <span
                className={`stepIndicator ${activeID >= 1 ? "active" : ""} ${activeID >= 2 ? "finish" : ""
                  }`}
              >
                Twitter
              </span>
              <span
                className={`stepIndicator ${activeID >= 2 ? "active" : ""} ${activeID >= 3 ? "finish" : ""
                  }`}
              >
                Telegram
              </span>

              <span
                className={`stepIndicator ${activeID >= 3 ? "active" : ""} ${activeID >= 4 ? "finish" : ""
                  }`}
              >
                Other Task
              </span>
            </div>
            {/* end step indicators */}
            {/* step one */}
            <div
              className="step"
              style={{ display: activeID == 1 ? "block" : "none" }}
            >
              <h4 className="text-center">Complete Twitter Task</h4>
              <div className="form-footer d-flex">
              <button type="button" id="submitBtn" onClick={submit}>
              <span>
              <FontAwesomeIcon icon={faEye} bounce size="xl"style={{ marginRight: '8px' }} />
                    </span>
                    Follow
                </button>
                
                <button type="button" id="submitBtn" onClick={submit}>
                <span>
                <FontAwesomeIcon icon={faHeart} beatFade size="xl"style={{ marginRight: '8px' }} />
                    </span>
                  Like & Retweet
                </button>
            </div>
            <div>
      </div>
            <div className="form-group mb-5">
                <h6>Enter Twitter Username</h6>
                <input
                  className="form-control"
                  type="text"
                  name="nid-number"
                  placeholder="eg: 29348 9348 398"
                />
              </div>
              <div className="form-group mb-4">
                <h6>Quote Tweet Link</h6>
                <input
                  className="form-control"
                  type="text"
                  name="nid-number"
                  placeholder="eg: 29348 9348 398"
                />
              </div>
            </div>
            {/* step two */}
            <div
              className="step"
              style={{
                display: activeID == 2 ? "block" : "none",
                content: activeID == 2 ? "block" : "none",
              }}
            >
              <h4 className="text-center">Complete Telegram Task</h4>
              <div className="form-footer d-flex">
              <button type="button" id="submitBtn" onClick={submit}>
              <span>
              <FontAwesomeIcon icon={faTelegramPlane} shake size="xl" style={{ marginRight: '8px' }} />
                    </span>
                    Join Group
                </button>
                
            </div>
              <ul className="rules__list mb-5">
                <li className="rules__item rules__item--active">
                  {" "}
                  <span>
                    <FontAwesomeIcon icon={faSquareCheck} />
                  </span>{" "}
                  User Needs To Join TG First{" "}
                </li>
                <li className="rules__item rules__item--active">
                  {" "}
                  <span>
                    <FontAwesomeIcon icon={faSquareCheck} />
                  </span>{" "}
                  Minimum send a text in  telegram Group{" "}
                </li>
                <li className="rules__item rules__item--active">
                  {" "}
                  <span>
                    <FontAwesomeIcon icon={faSquareCheck} />
                  </span>{" "}
                  Take screenshot of your text
                </li>
                <li className="rules__item">
                  {" "}
                  <span>
                    <FontAwesomeIcon icon={faSquareCheck} />
                  </span>
                  Document must be valid period
                </li>
              </ul>
              <ul className="upload__list mb-5">
                
              <div className="form-group mb-5">
                <h6>Enter Telegram Username</h6>
                <input
                  className="form-control"
                  type="text"
                  name="tg-username"
                  placeholder="eg: @pablobsc"
                />
              </div>
                <li className="upload__item">
                  <div className="custom-upload">
                    <span>
                      <FontAwesomeIcon icon={faCloudArrowUp} />
                    </span>
                    <input className="fileUp" type="file" name="nid-front" />
                  </div>
                  <p>ScreenShot</p>
                </li>
              </ul>
            </div>
            {/* step three */}
            <div
              className="step"
              style={{ display: activeID == 3 ? "block" : "none" }}
            >
              <h4 className="text-center">Other Task</h4>
              
              <div className="form-footer d-flex">
              <button type="button" id="submitBtn" onClick={submit}>
              <FontAwesomeIcon icon={faMedium} shake size="xl" style={{ marginRight: '8px' }} /><span>
              
              Medium
                    </span>
                  
                </button>
            </div>
              <div className="form-group mb-4">
                <h6>Follow our Medium, Like and comment on any post.</h6>
                <input
                  className="form-control"
                  type="text"
                  name="Medium Username"
                  placeholder="eg: Los Angeles"
                />
              </div>
              
              
            </div>
            {/* start previous / next buttons */}
            <div className="form-footer d-flex">
              {activeID >= 2 && (
                <button type="button" id="prevBtn" onClick={stepBackword}>
                  Previous
                </button>
              )}
              {activeID < 3 && (
                <button type="button" id="nextBtn" onClick={stepForword}>
                  Next
                </button>
              )}
              {activeID === 3 && (
  <Link href="/team">
    <button type="button" id="submitBtn">
      <span>Submit</span>
    </button>
  </Link>
)}
            </div>
            {/* end previous / next buttons */}
          </form>
        </div>
      </div>
    </section>
  );
}

export default KycCard;
