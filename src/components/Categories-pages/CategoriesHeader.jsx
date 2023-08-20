import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import { Link } from 'react-router-dom'


export default function CategoriesHeader() {
  return (
    <Container className='pt-5 mt-5'>    
    <div className="catego-header d-flex flex-column ">
        <div className="title-home d-flex w-100 align-items-center pb-5">
            <Link to='/'> Home</Link>
            <h3 className='text-center text-uppercase mx-auto'>All</h3>
        </div>
        <div className="filter-buttons w-100 d-flex align-items-center gap-3 justify-content-center">
            <Link to="/categories/all"><span>All</span></Link>
            <Link to="/categories/allclothing"><span>allclothing</span></Link>
            <Link to="/categories/sneaker"><span>sneakers</span></Link>
            <Link to="/categories/accessories"><span>accessories</span></Link>
        </div>
    </div>
    </Container>
  )
}
