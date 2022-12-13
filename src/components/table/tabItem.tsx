import React from 'react'

function TabItem(props) {
  const {tier, prices} = props


  return (
    <div className='border-y border-blue-300'>
      <p className='text-center my-4 font-semibold'>{tier}</p>
      <div className='grid grid-cols-4 gap-2 lg:gap-4 mb-3'>
        <td className=''>{prices[0]}</td>
        <td className=''>{prices[1]}</td>
        <td className=''>{prices[2]}</td>
        <td className=''>{prices[3]}</td>
      </div>
    </div>
  )
}

export default TabItem