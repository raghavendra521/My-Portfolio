import '../../App.css'
import {VerticalTimeline,VerticalTimelineElement} from "react-vertical-timeline-component"
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import "react-vertical-timeline-component/style.min.css";
const experienceDetails = [
    {
        type:'Secondary Education',
        logo:<SchoolIcon />,
        gpa:'9.8',
        institution:'Sri Chaitanya E M School.'
    }
]
const Experience = ()=>{
    return (
        <div className='experience'>
            <VerticalTimeline lineColor='#3e497a'>
                <VerticalTimelineElement 
                className='vertical-timeline-element--education'
                date="2017 Passed Out"
                iconStyle={{background: '#3e497a',color: '#fff'}}
                icon={<SchoolIcon />}
                >
                    <h1 className='vertical-timeline-element-title exp-title' >Sri Chaitanya E M School.</h1>
                        <p style={{display:'flex'}}>
                            <span className="exp-data" style={{marginRight:'auto'}}>Secondary Education</span>
                            <span className="exp-data" style={{marginLeft:'auto'}}>9.8 CGPA</span>
                        </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement 
                className='vertical-timeline-element--education'
                date="2017 - 2019"
                iconStyle={{background: '#3e497a',color: '#fff'}}
                icon={<SchoolIcon />}
                >
                    <h1 className='vertical-timeline-element-title exp-title' >Sri Chaitanya Junior College.</h1>
                        <p style={{display:'flex'}}>
                            <span className="exp-data" style={{marginRight:'auto'}}>Intermediate Education</span>
                            <span className="exp-data" style={{marginLeft:'auto'}}>9.44 CGPA</span>
                        </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement 
                className='vertical-timeline-element--education'
                date="2019 - Present"
                iconStyle={{background: '#3e497a',color: '#fff'}}
                icon={<SchoolIcon />}
                >
                    <h1 className='vertical-timeline-element-title exp-title' >RAGHU ENGINEERING COLLEGE.</h1>
                        <p style={{display:'flex'}}>
                            <span className="exp-data" style={{marginRight:'auto'}}>Graduation</span>
                            <span className="exp-data" style={{marginLeft:'auto'}}>8.96 CGPA</span>
                        </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement 
                className='vertical-timeline-element--education exp'
                date="2022 - 2023"
                iconStyle={{background: '#3e497a',color: '#fff'}}
                icon={<WorkIcon />}
                >
                    <h1 className='vertical-timeline-element-title exp-title' >Akrivia Automation PVT,LTD.</h1>
                        <p style={{display:'flex'}}>
                            <span className="exp-data" style={{marginRight:'auto'}}>Working as an intern(Role - Full Stack Developer).</span>
                        </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}
export default Experience;