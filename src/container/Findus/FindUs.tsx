import { SubHeading } from '../../components';
import {  images } from '../../constants';


const FindUs = () => {
  return (
    <div className='app__bg app__wrapper section__padding' id='contact'>
      <div className='app__wrapper_info'>
        <SubHeading title="Contact Us" />
        <h1 className='headtext__cormorant' style={{ marginBottom: '3rem' }}>Find Us</h1>
        <p className='p__opensans'>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
        <p className='p__cormorant' style={{ color: '#DCCA87', }}>Opening Hours</p>
        <p className='p__opensans'>Mon - Fri: 10:00 am - 02:00 am</p>
        <p className='p__opensans'>Sat - Sun: 10:00 am - 03:00 am</p>
        <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Visit Us</button>
      </div>


      <div className='app__wrapper_img'>
        <img src={images.findus} alt="finduss" />
      </div>
    </div>
  );
}

export default FindUs;
