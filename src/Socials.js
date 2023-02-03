import React from 'react';
import './Socials.css'
import github from './media/images/Github/Github.svg'
import instagram from './media/images/Instagram/Instagram.svg'
import linkedin from './media/images/LinkedIn/LinkedIn.svg'
import email from './media/images/Mail/mail.svg'
import spotify from './media/images/Spotify/Spotify.svg'

const Socials = () => {
    return (<div className='flex justify-end content-center space-x-4 mr-4'>
        <a href='mailto:zacharybabers@gmail.com' target="_blank">
            <img src={email} className="mail-logo" alt='email' />
        </a>
        <a href='https://github.com/zacharybabers' target="_blank">
            <img src={github} className="social-logo" alt='github' />
        </a>
        <a href='https://linkedin.com/in/zacharybabers' target="_blank">
            <img src={linkedin} className="social-logo" alt='linkedin' />
        </a>
        <a href='https://instagram.com/zbabers' target="_blank">
            <img src={instagram} className="social-logo" alt='instagram' />
        </a>
        <a href='https://open.spotify.com/user/7agxl4n0a4zksb16c243svvuc?si=72d9d00664174fbb' target="_blank">
            <img src={spotify} className="social-logo" alt='spotify' />
        </a>
    </div>)
}

export default Socials;