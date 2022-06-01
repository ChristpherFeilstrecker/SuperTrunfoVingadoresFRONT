import './StyledBaseboardPage.css';

import logoLinkedin from "../../components/images/linkedin.png"
import logoLinkedinWhite from "../../components/images/linkedin-white.png"

import logoGithub from "../../components/images/github.png"
import logoGithubWhite from "../../components/images/github-white.png"

import logoWhats from "../../components/images/whats.png"
import logoWhatsWhite from "../../components/images/whats-white.png"

import logoEmail from "../../components/images/email.png"
import logoEmailWhite from "../../components/images/email-white.png"

export default function BaseboardPage() {


    return (
        <div className="baseboard-page">
            <div className='developed-text'>Developed By @Christopher Feilstrecker</div>
            <div className='line-baseboard'></div>

            <div className='social-media-container'>

                <a href="https://github.com/ChristpherFeilstrecker" target="_blank" className='github-container'>
                    <div className='container-white'>
                        <img className='icon-baseboard-white' src={logoGithubWhite} />
                        @ChristpherFeilstrecker
                    </div>
                    <div className='container-grey'>
                        <img className='icon-baseboard' src={logoGithub} />
                        <div>@ChristpherFeilstrecker</div>
                    </div>


                </a>

                <a href="https://www.linkedin.com/in/christopher-feilstrecker/" target="_blank" className='linkedin-container'>
                   
                <div className='container-white'>
                    <img className='icon-baseboard' src={logoLinkedinWhite} />
                    <div>@christopher-feilstrecker</div>
                </div>

                <div className='container-grey'>
                    <img className='icon-baseboard' src={logoLinkedin} />
                    <div>@christopher-feilstrecker</div>
                </div>
                    
                </a>

                <a href="https://api.whatsapp.com/send?phone=5551989477910&text=Olá Christopher!" target="_blank" className='whats-container'>
                    
                <div className='container-white'>
                    <img className='icon-baseboard' src={logoWhatsWhite} />
                    <div>51 98947 7910</div>
                </div>
                <div className='container-grey'>
                    <img className='icon-baseboard' src={logoWhats} />
                    <div>51 98947 7910</div>
                </div>
                    

                     </a>

                <a href="mailto:christopher.feilstrecker@gmail.com?subject=[Titulo do email]&body=[Olá Christopher! Me chamo ''.]" target="_blank" className='email-container' rel="nofollow">
                   
                <div className='container-white'>
                   <img className='icon-baseboard' src={logoEmailWhite} />
                    <div>christopher.feilstrecker@gmail.com</div> 
                </div>

                <div className='container-grey'>
                   <img className='icon-baseboard' src={logoEmail} />
                    <div>christopher.feilstrecker@gmail.com</div> 
                </div>
                    
                    
                    </a>

            </div>

        </div>
    )
}