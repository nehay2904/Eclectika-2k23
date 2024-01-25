
import React,{useState, useEffect} from 'react'
import MultiActionAreaCard from '../../materialUI/CardComponent'
import './Team.css'
import TeamData from "../../Data/Team"
import Fade from 'react-reveal/Fade'
import Mini_Event from '../../materialUI/Mini_event'
import axios from 'axios'

const Team = () => {
  const [url, seturl] = useState('')
  const [name, setname] = useState('')
  const [domain, setdomain] = useState('')
  const [branch, setbranch] = useState('')
  const [email, setemail] = useState('')
  const [memberData, setmemberData] = useState([{
    url,
    name,
    domain,
    branch,
    email
    
  }])

  const create_posts = (event) => {

    event.preventDefault()


    axios.post('http://localhost:8080/team_data', {  
      url,
      name,
      domain,
      branch,
      email
    }).then((response) => {

      setmemberData([...memberData, {
        url,
        name,
        domain,
        branch,
        email
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
    <div className='Team'>
        <div className="team_wrapper">
            {memberData.map((teamMember,index) => (
               <Fade bottom><div className="team_col"> <MultiActionAreaCard img={teamMember.url} name={teamMember.name} branch={teamMember.branch} domain={teamMember.domain}  email={teamMember.email}/></div></Fade>
            ))}
        </div>
    </div>
  )
}

export default Team