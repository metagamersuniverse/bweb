import React from "react";
import Link from "next/link";
import CounterTwo from "@/components/common/CounterTwo";

const Banner = () => {
  return (
    <section className="banner" id="home">
    {/* Add the video here */}
    <video 
        autoPlay 
        loop 
        muted 
        style={{
          position: 'absolute',
          width: '100%',
          left: '50%',
          top: 'calc(50% + 50px)', // adding a 20px gap at the top
          height: '100%',
          objectFit: 'cover',
          transform: 'translate(-50%, -50%)',
          zIndex: '-1'
      }
      }
    >
        <source src="/images/banner/bg.webm" type="video/mp4" />
        Your browser does not support the video tag.
    </video>
      <div className="container">
        <div className="banner__wrapper">
          <div className="row g-5 justify-content-center">
            <div className="col-lg-10">
              <div
                className="banner__content text-center aos-init aos-animate"
                data-aos="zoom-in"
                data-aos-duration={900}
              >
                <h1>
                  Metaverse Web 3.0 <br /> Gaming Launcepad &amp; IDO{" "}
                </h1>
                <Link href="/project" className="default-btn">
                  <span>ExploreIDOs</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
