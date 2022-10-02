import React from 'react'
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';

import './styles.css';

import { AiOutlineLeft } from 'react-icons/ai'

const topmenu = () => {
  return (
    <Container>
        <Form>
            {/* <Input type='text' placeholder="Type your video title here" /> */}
            <AiOutlineLeft className=" text-light" />
            <div class="form__group field">
                <input type="input" class="form__field" placeholder="Add your video title here" name="title" id='title' required />
                <label for="name" class="form__label">Video Title</label>
            </div>
        </Form>
            <div>
                <button className='btn btn-danger mx-1' >Cancel</button>
                <button className='btn btn-primary mx-1' >Generate Video</button>
            </div>
    </Container>
  )
}

export default topmenu

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #181818;
    width: 100%;
    height: 80px;
    border-bottom: 1px solid #404040;
    padding: 0 20px;
`

const Form = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const Input = styled.input`
    width: 200px;
    background: transparent;
    border: none;

    &:focus {
        border: none;
    }
`