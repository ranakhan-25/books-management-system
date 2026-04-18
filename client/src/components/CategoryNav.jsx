import React from 'react'

const CategoryNav = ({categories,handelCategoryChange,activeCategory}) => {
  return (
    <div>
      <nav className='flex items-center flex-wrap gap-5 py-2 text-gray-600'>
        {
        categories.map(category => {
          return <button key={category} className={` ${category === activeCategory ? "text-yellow-500 border-b-2 border-yellow-500" : " text-gray-600 border-0 hover:underline"}`} onClick={()=>handelCategoryChange(category)}>{category}</button>
        })
      }
      </nav>
    </div>
  )
}

export default CategoryNav