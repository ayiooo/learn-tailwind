import React from 'react'
// 这里需要解构出来，因为传递的东西都在 props 里面
const City = ({city}) => {
  console.log(city)
  return (
    <div className='city flex items-center border-gray-500 bg-white rounded-lg shadow-lg overflow-hidden hover:-translate-y-0.5 transform transition'>
      <img className='w-32 h-32 flex-shrink-0' src={city.imageUrl} alt={city.imageAlt} />
      <div className='info px-6 py-4'>
        <div className='name text-lg font-semibold text-gray-800'>{city.city}</div>
        <div className='price text-gray-600'>${city.averagePrice} / night average</div>
        <div className='mt-4'>
          <a
            href='#'
            className='property-count text-indigo-500 hover:text-indigo-400 font-semibold text-sm'
          >
            Explore {city.propertyCount} properties
          </a>
        </div>
      </div>
    </div>
  )
}

export default City
