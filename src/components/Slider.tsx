import './Slider.css'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { useState } from 'react';

const img1 = require('../images/img1.png')
const img2 = require('../images/img4.png')
const img3 = require('../images/img3.png')

const items = [
    {
        image: img1 ,
        titlle: 'BEST Store in HERE!',
        desription: 'BEST Items for BEST Price. Experiece Upto 50% Discount.',
        color : '#ACDDDE'
    },
    {
        image: img2 ,
        titlle: 'Hurry Up!',
        desription: 'Experiece Upto 50% Discount Until 31st of December',
        color : '#CAF1DE'
    },
    {
        image: img3 ,
        titlle: 'Want to Buy BEST items in Sri Lanka!',
        desription: 'Buy Soon! Limited Stockes are Avilabe',
        color : '#FEF8DD'
    },
]


const Slider = () => {
    
const [coverNumber, setCoverNumber] = useState(0)

const changeCover = (direction : string) => {
    if (direction === 'left') {
        if (coverNumber === 0) {
            setCoverNumber(2)
        } else {
            setCoverNumber(coverNumber-1)
        }
    }
    if (direction === 'right') {
        if (coverNumber === 2) {
            setCoverNumber(0)
        } else {
            setCoverNumber(coverNumber+1)
        }
    }
}
    
  return (
      <div className='slider-container'>
        <div className='arrows left-arrow' onClick={() => changeCover('left')}>
            <ArrowBackIosNewOutlinedIcon/>
          </div>
          <div className='cover-wrapper'>
            <div className='warapper' style={{backgroundColor: items[coverNumber]['color']}}>
                <div className="image-container">
                      <img alt='image' src={items[coverNumber]['image']}/>
                </div>
                <div className='info-container'>
                      <h1 className='cover-title'>{items[coverNumber]['titlle']}</h1>
                      <p className='cover-description'>{items[coverNumber]['desription']}</p>
                      <button className='shop-now-button'>Shop Now</button>
                </div>
            </div>
          </div>
          <div className='arrows right-arrow' onClick={() => changeCover('right')}>
            <ArrowForwardIosOutlinedIcon/>
        </div>
    </div>
  )
}

export default Slider