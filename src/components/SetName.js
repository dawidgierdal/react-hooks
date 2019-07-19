import React, { useState } from 'react';
import styled from 'styled-components';

const SButton = styled.button`
    background-image: linear-gradient(to top left,#ff8a00,#da1b60);
    border: 0;
    border-radius: 2rem;
    color: #fff;
    display: block;
    font-weight: 700;
    padding: .5rem 1rem;
    transition: 70ms;
    width: 100px;
`;

const SInput = styled.input`
    width: 300px;
    height: 40px;
    padding: 5px;
    margin-bottom: 25px;
`;

const SForm = styled.form`
    display: flex;
    flex-direction: column;
    margin-bottom: 25px;
`;

export const SetName = () => {
    const [inputValue, setValue] = useState('');
    const [name, setName] = useState('Jack');

    const handleInput = (event) => {
        setValue(event.target.value)
    };

    const updateName = (event) => {
        event.preventDefault();
        setName(inputValue);
    };

    return (
        <SForm>
            <p>Hi, {name}!</p>
            <SInput onChange={handleInput}/>
            <SButton type="submit" onClick={updateName}>Save</SButton>
        </SForm>
    )
};

