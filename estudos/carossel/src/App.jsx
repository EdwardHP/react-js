import ShoeCard from './components/ShoeCard'
import shoeJson from '../public/shoes.json'
import { useState, useRef } from 'react'
import './App.css'

function App() {

  const [shoes, setShoes] = useState(shoeJson);

  const carousel = useRef(null);

  const toRight = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth - carousel.current.offsetWidth/10;
  }

  const toLeft = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth - carousel.current.offsetWidth/10;
  }

  return (
    <div>
      <main className='container'>
        <img src="../images/super-shoes.png" alt="Super Shoes Logo" id='logo'/>
        <div className='carousel' ref={carousel}>
          {shoes.map(shoe => {
            const {id, name, price, oldPrice, image} = shoe;
            return <ShoeCard key={id} shoeName={name} currentPrice={price} oldPrice={oldPrice} shoeImage={image} />
          })}
        </div>
        <section className='buttons'>
          <img src="../images/216151_right_chevron_icon.png" alt="seta para direita" className='left' onClick={toLeft} />
          <img src="../images/216151_right_chevron_icon.png" alt="seta para esquerda" className='right' onClick={toRight} />
        </section>
      </main>
    </div>
  )
}

export default App
