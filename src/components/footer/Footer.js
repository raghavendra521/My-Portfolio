import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import MailIcon from '@mui/icons-material/Mail';
import '../../App.css'
const Footer = ()=>{
    return (
        <div className="footer">
            <div className='socialMedia'>
                <InstagramIcon />
                <TwitterIcon />
                <WhatsAppIcon />
                <LinkedInIcon />
                <MailIcon />
            </div>
            <p>&copy; Please feel free to contact me.</p>
        </div>
    )
}
export default Footer;