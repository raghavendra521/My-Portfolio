import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import GithubIcon from '@mui/icons-material/GitHub'
import '../../App.css'
const Home = ()=>{
    return (
    <div className="home">
        <div className="about">
            <h2>Hi, I'm Raghavendra</h2>
            <div className="prompt">
                <p>
                    A enthusisatic software learner and developer.
                </p>
                <LinkedInIcon />
                <EmailIcon />
                <GithubIcon />
                {/* <img src={require('../../images/ironman.jpeg')} alt='image' /> */}
            </div>
        </div>
    </div>
    )
}
export default Home;