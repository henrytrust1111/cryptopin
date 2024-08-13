import React from 'react'
import SubContent from './SubContent'
import Content from './Content'
import Investment from './Investment'

const Product = () => {
  return (
    <div className='w-[93%] sm:w-[95%] md:w-[90%] lg:w-[80%]'>
        <SubContent />
        <Content />
        {/* <Investment /> */}
    </div>
  )
}

export default Product