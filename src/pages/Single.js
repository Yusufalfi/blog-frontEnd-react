import React from 'react'
import EditImg from '../img/edit.png'
import DeleteImg from '../img/delete.png'
import { Link } from 'react-router-dom'
import Menu from '../component/Menu'

const Single = () => {
  return (
    <div className='single'>
      <div className='content'>
        <img src='https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
          <div className='user'>
            <img src="https://cdn-icons-png.flaticon.com/512/219/219983.png" alt='' />
            <div className='info'>
              <span>Jhon</span>
              <p>Posted 2 day ago</p>
            </div>
            <div className='edit'>
              <Link to={`/write?edit=2`} >
              <img src={EditImg} alt='edit' />
              </Link>
              <img src={DeleteImg} alt='edit' />
            </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit
        Lorem ipsum dolor sit amet consectetur adipisicing elit
        Lorem ipsum dolor sit amet consectetur adipisicing elit
        Lorem ipsum dolor sit amet consectetur adipisicing elit
        Lorem ipsum dolor sit amet consectetur adipisicing elit
        Lorem ipsum dolor sit amet consectetur adipisicing elit
        Lorem ipsum dolor sit amet consectetur adipisicing elit
        Lorem ipsum dolor sit amet consectetur adipisicing elit
        Lorem ipsum dolor sit amet consectetur adipisicing elit
        Lorem ipsum dolor sit amet consectetur adipisicing elit
        Lorem ipsum dolor sit amet consectetur adipisicing elit
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit
        Lorem ipsum dolor sit amet consectetur adipisicing elit
        Lorem ipsum dolor sit amet consectetur adipisicing elit
        Lorem ipsum dolor sit amet consectetur adipisicing elit
        Lorem ipsum dolor sit amet consectetur adipisicing elit
        Lorem ipsum dolor sit amet consectetur adipisicing elit
        Lorem ipsum dolor sit amet consectetur adipisicing elit
        Lorem ipsum dolor sit amet consectetur adipisicing elit
        Lorem ipsum dolor sit amet consectetur adipisicing elit
        Lorem ipsum dolor sit amet consectetur adipisicing elit
        Lorem i
        </p>
      </div>
     <Menu />
    </div>
  )
}

export default Single