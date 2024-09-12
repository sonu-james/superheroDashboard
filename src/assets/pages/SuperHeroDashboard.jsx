import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faTrash } from '@fortawesome/free-solid-svg-icons'
import Sidebar from '../components/Sidebar'
import { Col, Row} from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import { getAllComplaintApi } from '../services/allApi'





function SuperHeroDashboard() {
  const [searchKey,setSearchKey]=useState("")
  const [viewComplaints, setViewComplaints] = useState([])

  const getallComplaintsDetails = async () => {
    const result = await getAllComplaintApi(searchKey)
    setViewComplaints(result.data);
  }

  useEffect(() => {
    getallComplaintsDetails()
  }, [searchKey])

  
  // console.log(viewComplaints);



  return (
    <>
      {localStorage.getItem('emailData' && 'passwordData') ?
        <div className='w-100 ' style={{ height: '100vh', backgroundColor: '#000026' }} >
          <Header />


          <Row className='w-100 '>
            <Col sm={12} md={2}>
              <Sidebar />
            </Col>
            <Col sm={12} md={8}>

              <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4 d-flex">
                  <input type="text" placeholder='TimeStamp' className='form-control mt-5 fs-5' onChange={(e)=>setSearchKey(e.target.value)}/>
                  <FontAwesomeIcon icon={faMagnifyingGlass} flip='horizontal' style={{ marginTop: '60px', marginLeft: '-33px' }} className='text-secondary' />
                </div>
                <div className="col-md-4"></div>
              </div>

              <div className=' container-fluid d-flex align-items-center jusify-content-center mt-5 flex-column'>
                <h3 className='text-light'>Complaint List</h3>
                {viewComplaints?.length > 0 ?
                  <Table striped bordered hover  className=' w-100 shadow  text-center  mt-5 p-4 '>
                    <thead >
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact Number</th>
                        <th>Timestamp</th>
                        <th>Issue</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {viewComplaints.map((item) => (<tr>
                        <td>{item.username}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>{item.timeStamp}</td>
                        <td>{item.issue}</td>
                        <td><FontAwesomeIcon icon={faTrash} style={{ color: "#ed0707", }} />
                        </td>
                      </tr>))
                      }
                    </tbody>
                  </Table>
                  : <p className='text-info fs-3 mt-4 ms-5'>No Complaints  Registred</p>}
              </div>
            </Col>
            <Col sm={12} md={2}></Col>
          </Row>

        </div> : null}
        
    </>
  )
}

export default SuperHeroDashboard