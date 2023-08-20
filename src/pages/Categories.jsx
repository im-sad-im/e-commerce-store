import React from 'react'
// import Container from 'react-bootstrap/esm/Container'
import CategoriesHeader from '../components/Categories-pages/CategoriesHeader'
import { Outlet } from 'react-router-dom'

export default function Categories() {
  return (
    <>
        <CategoriesHeader />
        <Outlet />
    </>
  )
}
