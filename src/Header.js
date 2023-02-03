import React from 'react';
import Nameplate from './Nameplate';
import Socials from './Socials';
import Headtabs from './Headtabs';

const Header = (props) => {
    return(
        <div className='mt-4'>
            <Socials />
            <Nameplate/>
            <Headtabs/>
        </div>
    );
}
export default Header;