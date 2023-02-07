import React from 'react'
import './Sponsor.css'
// import spons_1 from '../../Images/spons_1.png'
// import spons_2 from '../../Images/spons_2.png'
import spons_3 from '../../Images/spons_3.png'
import spons_4 from '../../Images/spons_2.jpeg'
import spons_5 from '../../Images/spons_4.jpeg'
import spons_8 from '../../Images/spons_5.jpeg'
import spons_7 from '../../Images/spons_6.jpeg'
import newspons1 from '../../Images/newspons1.jpg'
import newspons2 from '../../Images/newspons2.jpeg'
import newspons3 from '../../Images/newspons3.jpeg'
import newspons4 from '../../Images/download.png'
import newspons5 from '../../Images/newspons5.jpeg'
import newspons6 from '../../Images/newspons6.jpeg'
import newspons7 from '../../Images/newspons7.jpeg'
import newspons8 from '../../Images/newspons8.png'
import newspons9 from '../../Images/newspons9.jpeg'
import newspons19 from '../../Images/newspons10.jpeg'
import Fade from 'react-reveal/Fade'

const Sponsor = () => {
  return (
    <div id='sponsor' className='container_spons'>
        <Fade bottom><h1 className="spons_title">Our Sponsors</h1></Fade>
  
    <div className=" spons_wrapper">
    <Fade bottom><div className="spons_col"> <img className='sponsimg' src={newspons1} alt="" srcset="" /></div></Fade>
    <Fade bottom><div className="spons_col"> <img className='sponsimg' src={newspons2} alt="" srcset="" /></div></Fade>
    <Fade bottom><div className="spons_col"> <img className='sponsimg' src={spons_3} alt="" srcset="" /></div></Fade>
    <Fade bottom><div className="spons_col"> <img className='sponsimg' src={spons_4} alt="" srcset="" /></div></Fade> 
   
    </div>
    <div className=" spons_wrapper">
     <Fade bottom><div className="spons_col"> <img className='sponsimg' src={spons_5} alt="" srcset="" /></div></Fade>
    <Fade bottom><div className="spons_col"> <img className='sponsimg' src={newspons3} alt="" srcset="" /></div></Fade>
    <Fade bottom><div className="spons_col"> <img className='sponsimg' src={spons_7} alt="" srcset="" /></div></Fade>
    <Fade bottom><div className="spons_col"> <img className='sponsimg' src={spons_8} alt="" srcset="" /></div></Fade>
    
    </div> 
    <div className=" spons_wrapper">
    <Fade bottom><div className="spons_col"> <img className='sponsimg' src={newspons5} alt="" srcset="" /></div></Fade>
    <Fade bottom><div className="spons_col"> <img className='sponsimg' src={newspons6} alt="" srcset="" /></div></Fade>
    <Fade bottom><div className="spons_col"> <img className='sponsimg' src={newspons7} alt="" srcset="" /></div></Fade>
     <Fade bottom><div className="spons_col"> <img className='sponsimg' src={newspons4} alt="" srcset="" /></div></Fade>
    </div>
    <div className=" spons_wrapper">
    <Fade bottom><div className="spons_col"> <img className='sponsimg' src={newspons8} alt="" srcset="" /></div></Fade>
    <Fade bottom><div className="spons_col"> <img className='sponsimg' src={newspons9} alt="" srcset="" /></div></Fade>
    <Fade bottom><div className="spons_col"> <img className='sponsimg' src={newspons19} alt="" srcset="" /></div></Fade>
    </div>
    
</div>
  )
}

export default Sponsor