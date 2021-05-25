import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img from '../../img/profile.jpg';

export default function AboutMe(){
    return(
        <Row>
            <Col xs={12} md={8}>
                <h2>About Me</h2>
                <p>
                Hi, my Name is Dawid, Nice to meet You. Below You can check out my Projects, enjoy! 
                </p>
            </Col>
            <Col xs={12} md={4}>
            <img src={img} alt="Profile"/>
            </Col>
        </Row>
    )
}
