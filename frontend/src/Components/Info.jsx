import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckDouble, faQuestion } from '@fortawesome/free-solid-svg-icons';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';


function Info() {
    return(
        <Container className='info'>
            <Row className='info-row'>
                <Col className='info-col1'>
                <FontAwesomeIcon icon={faQuestion} size="3x" className='info-icon'/>
                </Col>
                <Col className='info-col2'>
                <p className='info-txt'>Medical errors were estimated to be the third leading cause of death in the U.S.</p>
                </Col>
            </Row>
            <Row className='info-row'>
                <Col className='info-col2'>
                <p className='info-txt'>Patient safety technology solutions have never been more feasible and necessary</p>
                </Col>
                <Col className='info-col1'>
                <FontAwesomeIcon icon={faCheckDouble} size="3x" className='info-icon'/>
                </Col>
            </Row>
        </Container>
    )
}

export default Info;