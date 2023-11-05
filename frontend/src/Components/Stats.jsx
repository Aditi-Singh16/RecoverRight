import React from 'react'
import chart from './images/chart.jpeg'
import pie from './images/pie.jpeg'
import {Col, Row} from 'react-bootstrap'

function Stats() {
    return(
        <div className='stats'>
            <img src={chart} className='stats-top' />
            <Row>
                <Col>
                <img src={pie} className='stats-down'/>
                </Col>
                <Col>
                <h3 className='stats-txt'>This is Pie Chart of Successful patient discharge where we represent the people who have healed (77.3%) and people who did not (22.7%). </h3>
                </Col>
            </Row>
            <div className='footer'>Made with ❤️ by Tejaswi Chaudhari, Rajeev Singh, Aditi Singh and Sonali Bedade.</div>
        </div>
    )
}

export default Stats;