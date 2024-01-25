import React, {useState,useEffect} from 'react'
import './Merchandise.css'

import  Merchand from '../../Images/Merchandise.jpeg'
import MerchandForm from '../../materialUI/MerchanForm'
import axios from 'axios'



import { Link } from 'react-router-dom';

import { Button, Paper } from '@mui/material'; 

const Merchandise = () => {

  
  const [merch_url, seturl] = useState('')
 
  const [memberData, setmemberData] = useState([{
    merch_url
  }])

  const create_posts = (event) => {

    event.preventDefault()


    axios.post('http://localhost:8080/team_data', {  
        merch_url
    }).then((response) => {

      setmemberData([...memberData, {
        merch_url
      }])
    }
    )
  
  }

  useEffect(() => {
    axios.get('http://localhost:8080/get_team').then((response) => {
      setmemberData(response.data)
    })

  }, [3000])
  return (
    <div className="main_merchan">
      <div className='close_icon_team'>
        <Link to={'/'}><Button color='error' variant="contained">Back to home</Button></Link>
      </div>
        {memberData.map((url, index) =>(
          <div className='left_class'>
        <img className='merchanImg' src={url.merch_url} alt="" srcset="" /> 
          </div>
        ))} 
        <div className="register_class">
          <h4 className='merchantext'>Register here & grab the merchandise </h4>
          <div className="forms">
        <input className='contact_input' type="text" placeholder='Name'/>
        <input className='contact_input' type="text" placeholder='Email'/>
        <input className='contact_input' type="text" placeholder='Write your thoughts'/>
        <button>Submit</button>
      </div>
        </div>
    </div>
  )
}

export default Merchandise