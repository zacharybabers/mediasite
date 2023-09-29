import React, { useState, useEffect } from 'react';
import Nameplate from './Nameplate';
import Socials from './Socials';
import Headtabs from './Headtabs';
import MobileNav from './MobileNav';

const Header = (props) => {
    const [scrolling, setScrolling] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
          const currentScrollPos = window.pageYOffset;
          setScrolling(prevScrollPos > currentScrollPos || currentScrollPos === 0);
          setPrevScrollPos(currentScrollPos);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [prevScrollPos]);
      
    return(
        <div className={`sticky shadow-lg top-0 left-0 right-0 transition-transform duration-300 transform ${
            scrolling ? 'translate-y-0' : '-translate-y-full'
          } bg-white mb-4 pt-2 pb-2`}>
            <MobileNav/>
            <Socials />
            <Nameplate/>
            <Headtabs/>
        </div>
    );
}
export default Header;