import Carousel from 'react-bootstrap/Carousel';
import mens_banner from '../Assets/Assets/banner_mens.png';
import womens_banner from '../Assets/Assets/banner_women.png';
import kids_banner from '../Assets/Assets/banner_kids.png'

function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
      <img src={mens_banner} alt=''/>
        
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img src={womens_banner} alt=''/>
        
      </Carousel.Item>
      <Carousel.Item>
        <img src={kids_banner} alt=''/>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;