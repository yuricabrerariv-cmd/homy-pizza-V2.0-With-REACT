import facebookIcon from './assets/Icons/facebook-icon.svg'
import instaIcon from './assets/Icons/instagram-icon.svg'
import gitHub from './assets/Icons/github-icon.svg'

function Footer() {
    return (
        <footer>
            <div className="social-icons">
                <img src={facebookIcon} alt="facebook icon" />
                <img src={instaIcon} alt="instagram icon" />
                <img src={gitHub} alt="github icon" />
            </div>
        </footer>
    )
}

export default Footer;