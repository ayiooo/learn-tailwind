import React from 'react'
import City from './components/city.jsx'
import cities from './data/popularDestinations'
const generateItems = () => {
  return cities.map(city => <City city={city} key={city.city} />)
}

const App = () => {
  return (
    <div className='px-12 py-6 mx-auto'>
      <h2 className='text-xl'>Popular destinations</h2>
      <p className='my-4'>
        A selection of great work-friendly cities with lots to see and explore.
      </p>
      <div className='cart-list grid gap-6 lg:grid-cols-2 xl:grid-cols-3'>
        {generateItems()}
      </div>
    </div>
  )
}

export default App
