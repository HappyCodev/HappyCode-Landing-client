import Description from '../../components/Description/Description'
import Team from '../../components/Team/Team'


const AboutUsPage = () => {
    return (
        <div className='AboutUsPage' >
            <div className='AboutUsImage'>
                <h2 className='title'>About Us</h2>
            </div>
            <Description />
            <Team />
        </div>
    )
}
export default AboutUsPage