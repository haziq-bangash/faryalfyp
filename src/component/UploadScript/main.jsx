import React from 'react'
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';

const main = () => {
  return (
    <Container>
            <Slide>
                <Image src='image/img1.jpg' />
            </Slide>
            <UploadDiv className='my-2 py-2' >
                <div className='row text-center text-light border-bottom py-2' >
                    <div className='col-6 fs-4 fw-bold' >Type your Script</div>
                    <div className='col-6 fs-4 fw-bold' >Upload Voice</div>
                </div>
                <div class="form-floating py-3">
                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: '300px'}}></textarea>
                    <label for="floatingTextarea2">Type or paste your script here</label>
                </div>
                <div>
                    <button className="btn btn-primary" >Play Script</button>
                </div>
            </UploadDiv>
    </Container>
  )
}

export default main

const Container = styled.div`
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    // border-right: 1px solid #ccc;
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

const UploadDiv = styled.div`
    width: 90%;
    border-bottom: 2px solid #404040;
`