import '../style.css';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../kyc/navbar';
import Sidebar from '../../kyc/sidebar';




const Introduction = () => {

    let navigate = useNavigate();

    return (

      <div>
          <Navbar/>
          <Sidebar/>
        
          <div className="main">
              <Form className='coborrower-form'>
                  <h5>Tell us about your co-applicant</h5>
                  <Form.Group className='mb-3'>
                      <Form.Label className='label-required'>What is your co-applicant's name?</Form.Label>
                      <Form.Control type='text'></Form.Control>
                  </Form.Group>
                  <Form.Group className='mb-3'>
                      <Form.Label className='label-required'>How is your co-applicant related to you?</Form.Label>
                      <Form.Select>
                          <option disabled selected>--Select Relationship--</option>
                          <option>Spouse</option>
                          <option>Company</option>
                          <option>Father</option>
                          <option>Mother</option>
                      </Form.Select>
                      <Form.Text className='text-muted'>Please select your relationship</Form.Text>
                  </Form.Group>
                  <Form.Group className='mb-3'>
                      <Form.Label className='label-required'>Please enter your co-applicant's email address.</Form.Label>
                      <Form.Control type='email'></Form.Control>
                      <Form.Text className='text-muted'>We will send them an invitation</Form.Text>
                  </Form.Group>
                  <div className="form-footer clearfix">
                      <Button onClick={()=>navigate("/borrower")} className='button-back' variant="link">
                          Back
                      </Button>
                      <Button  onClick={()=>navigate("/co-identification")} className='button-submit' variant="warning" type="submit">
                          Submit
                      </Button>
                  </div>
              </Form>
          </div>
      </div>
    )
}

export default Introduction;