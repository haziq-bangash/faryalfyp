import React from 'react'
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';

import { BsPlusCircleFill } from 'react-icons/bs'

const leftmenu = () => {
  return (
    <Container>
        <Slide>
            <Image src='image/img1.jpg' />
        </Slide>
        <Slide className='py-5' >
            <BsPlusCircleFill className=' fs-1' />
            <h1 className=" display-6" >Add Slide</h1>
        </Slide>
    </Container>
  )
}

export default leftmenu

const Container = styled.div`
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    // border-right: 1px solid #ccc;
    background-color: #181818;
`

const Slide = styled.div`
    width: 90%;
    border-radius: 0.5rem;
    border: 1px solid #ccc;
    margin: 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    transition: all 0.2s ease-in-out;
    &:hover {
        background: #fff;
        color: #333;
        cursor: pointer;
    }
`

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
`