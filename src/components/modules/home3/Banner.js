import Link from "next/link";
import React from "react";
import CounterTwo from "@/components/common/CounterTwo";
const Spacer = ({ }) => {
  return <div style={{ height: `70px` }} className="desktop-spacer"></div>;
}

function Banner() {
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
                data-aos="fade-up"
                data-aos-duration={1000}
              >
                <h1>
                  BINGO <br /> LET The Fun &amp; BEGIN{" "}
                </h1>
                <Spacer></Spacer>
                <Link href="https://doc.basebingo.xyz/" className="default-btn">
                  <span>Explore Bingo</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
