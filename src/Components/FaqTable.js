import React from 'react'
import {Row, Col, Image} from 'react-bootstrap'
import {FaClock, FaComment, FaDollarSign} from 'react-icons/fa'

const RowCols = ({icon, question, answer}) => (
    <div>
        <Row className="justify-content-md-center mt-5 ">
        <Col className='icon-col pb-2' xs={5} 
        // style={{backgroundColor: "#dde8fc", 
        //                         borderTopLeftRadius: 35, borderBottomLeftRadius: 35}}
                                >
            <div className='circle mt-3'>{React.createElement(icon)}</div>
            <h3 className='mt-3 font-weight-bold'>{question}</h3>   
        </Col>
        <Col xs={5} 
        // style={{backgroundColor: "#dde8fc", 
        //                         borderTopRightRadius: 35, borderBottomRightRadius: 35}}
                                >   
            <h5 className="mt-5">{answer}</h5>
        </Col>
        </Row>
    </div>
)



const FaqTable = () => (
    <>
            <RowCols icon={FaClock}
                question="How long should a Blink be?"
                answer="A Blink should be 20-30 seconds long. 
                        You do not want to overwhelm the hiring manager
                        but you also want to properly introduce yourself!
                "
            />

            <RowCols icon={FaComment}
                question="What Should I Talk About?"
                answer="Talk about why you are interested, how you would
                        suit the work environment, and maybe even crack a joke!
                        Remember, you want to convey parts about your character you can't in a resume.
                "
            />
            <RowCols icon={FaDollarSign}
                question="Is a Blink Resume Free to Make?"
                answer="Yup! During our early stages, we will keep the application
                        completely, positively, 100% free for use. 
                "
            />

    </>
)

export default FaqTable