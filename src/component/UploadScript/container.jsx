import React from 'react'
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';

import TopMenu from './topmenu';
import LeftMenu from './leftmenu'
import Main from './main'
import RightMenu from './rightmenu'

const container = () => {
  return (
    <Wrapper>
      <TopMenu />
      <Container>
        <LeftMenu />
        <Main />
        <RightMenu />
      </Container>
    </Wrapper>
  )
}

export default container

const Wrapper = styled.div`
  display: inline-block;
  background-color: #121212;
`

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 2fr;
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
}
`

