import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';

import { BsPlusCircleFill } from 'react-icons/bs'

import {items} from './items';

let total = items.length;

const showAvatar = () => {
  try {
    return items.map((item, index) => {
      return (
          <Div>
            <Image src={ item.image } alt={ item.name } />
            <SubDiv>
              <h3>{ item.name }</h3>
              <IconDiv data-bs-toggle="tooltip" data-bs-placement="left" title="Create new Video" ><BsPlusCircleFill /></IconDiv>
            </SubDiv>
          </Div>
          );
    });
  } catch (e) {
    alert(e.message);
  }
};

const avatars = () => {
  return (
    <Wrapper className='container py-3' >
      <TitleDiv>
        <Title>Avatars <TotalVid>{ total }</TotalVid></Title>
        <Button variant="primary">Explore your own Avatar</Button>{' '}
      </TitleDiv>
      <Divider />
      <Container>
        {showAvatar()}
      </Container>
    </Wrapper>
  )
}

export default avatars

const Wrapper = styled.div`
  width: 100%;
`

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1rem;

    @media (max-width: 1100px) {
      grid-template-columns: 1fr 1fr 1fr;
  }

    @media (max-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 425px) {
        grid-template-columns: 1fr;
    }
`

const TitleDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-family: 'Roboto', sans-serif;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const Divider = styled.div`
   border-bottom: 2px solid #d3d3d3;
`

const TotalVid = styled.span`
  font-size: 1.5rem;
  color: #d3d3d3;
`

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
`

const Div = styled.div`
  margin-top: 0.5rem;
  border-radius: 0.5rem; 
`

const SubDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const SubTitle = styled.h1`
  font-size: 1rem;
  color: #666;
  font-family: 'Roboto', sans-serif;
`

const IconDiv = styled.div`
  & > *{
    color: blue;
    transition: all 0.2s ease-in-out;
    &:hover {
      scale: 1.5;
    }
  }
  width: fit-content;
  height: auto;
  padding: 0.5rem;
  border-radius: 50%;
`
