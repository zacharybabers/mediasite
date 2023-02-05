import React from 'react';
import Nameplate from './Nameplate';
import Socials from './Socials';
import Headtabs from './Headtabs';
import MobileNav from './MobileNav';

const Header = (props) => {
    return(
        <div className='mt-4'>
            <MobileNav/>
            <Socials />
            <Nameplate/>
            <Headtabs/>
        </div>
    );
}
export default Header;