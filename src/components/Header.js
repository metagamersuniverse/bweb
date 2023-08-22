import Link from "next/link";
import { useState, useEffect, useContext } from "react";

import { useRouter } from 'next/router'
import Image from 'next/image';

function Header() {
  const [menu, setMenu] = useState(false);
  const [show, setShow] = useState(false);
  const router = useRouter()

  // ........header Sticky..................
  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    router.events.on('routeChangeStart', removeActive);

    return () => {
      window.removeEventListener('scroll', isSticky);
      router.events.off('routeChangeStart', removeActive);
    };
  });

  const isSticky = () => {
    const header = document.querySelector('.header-section');
    const scrollTop = window.scrollY;
    scrollTop >= 250 ? header.classList.add('headerFixed') : header.classList.remove('headerFixed');
  };


  // ...........main menu...............

  //............submenu...............
  function removeActive() {
    const element = document.getElementById("menu");
    element.classList.remove("active");
    const icon = document.getElementById("icon");
    icon?.classList.remove("active"); // Use optional chaining
  }
  

  function toggleActive(event) {
    event.preventDefault();
    const mediaQuery = window.matchMedia('(max-width: 991px)');
  
    if (mediaQuery.matches) {
      const parentElement = event.currentTarget.parentElement;
      parentElement.classList.toggle('open');
      const submenu = parentElement.querySelector('.submenu');
      submenu.style.display = submenu.style.display === 'none' ? 'block' : 'none';
    } else {
      // Navigate to the link's href when not on a mobile device
      const link = event.currentTarget.getAttribute('href');
      router.push(link);
    }
  }
  

  // ..............modal....................


  return (
    <div>
      <header className="header-section">
        <div className="container">
          <div className="header-holder">
            <div className="header-primary d-flex flex-wrap justify-content-between align-items-center">
              <div className="brand-logo d-none d-lg-inline-block">
                <div className="logo">
                  <Link href="/">
                    <Image src="/images/logo/logo.png" width={150} height={55} alt="logo" />
                  </Link>
                </div>
              </div>
              <div className="header-wrapper justify-content-lg-end">
                <div className="mobile-logo d-lg-none"> <Link href="/">
                  <Image src="/images/logo/logo.png" width={150} height={55} alt="logo" />
                </Link>
                </div>
                <div className="menu-area">
                  <ul id="menu" className={menu ? 'menu active' : 'menu'}>
                    <li id="pr-1" className="menu-item-has-children" >
                      <Link href="/" onClick={toggleActive}>Home</Link>
                    </li>
                    <li id="pr-2" className="menu-item-has-children">
  <Link href="/dashboard" onClick={toggleActive}>DASHBOARD</Link>
</li>

                    <li id="pr-3" className="menu-item-has-children">
  <Link href="/#roadmap" onClick={toggleActive}>ROADMAP</Link>
</li>

                    <li id="pr-4" className="menu-item-has-children" >
                      <Link href="/#tokenomics" onClick={toggleActive}>TOKENOMICS</Link>
                    </li>
                    <li id="pr-7" className="menu-item-has-children">
                      <Link href="/#details" onClick={toggleActive}>DETAILS</Link>
                    </li>
                  </ul><Link href="#" className="wallet-btn">
                  <span>Explore Bingo</span>
                </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;