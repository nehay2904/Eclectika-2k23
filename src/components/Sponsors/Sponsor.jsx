import React,{useEffect,useState} from 'react'
import './Sponsor.css'
import axios from 'axios'
import Fade from 'react-reveal/Fade'
import SponsCard from '../../materialUI/Spons.card'

const Sponsor = () => {
  
  const [spons_url, setSpons_url] = useState('')
  const [spons_name, setSpons_name] = useState('')

  const [sponsData, setsponsData] = useState([{
    spons_url,
    spons_name
  }])

  const create_posts = (event) => {

    event.preventDefault()


    axios.post('http://localhost:8080/spons_data', {  
    spons_url,
    spons_name
    }).then((response) => {

      setsponsData([...sponsData, {
        spons_url,
        spons_name
      }])
    }
    )
  
  }

  useEffect(() => {
    axios.get('http://localhost:8080/get_spons').then((response) => {
      setsponsData(response.data)
    })

  }, [3000])
  return (
    <div id='sponsor' className='container_spons'>
        <Fade bottom><h1 className="spons_title">Our Sponsors</h1></Fade>
        <div className='Team'>
        <div className="team_wrapper">
            {sponsData.map((spons,index) => (
               <Fade bottom><div className="spons_col"> <SponsCard img={spons.spons_url} /></div></Fade>
            ))}
        </div>
    </div>
   
    
</div>
  )
}

export default Sponsor