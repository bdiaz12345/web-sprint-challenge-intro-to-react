import React from 'react'
import styled from 'styled-components'



const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 20rem;
    background: white;
    border-radius: .375rem;
    margin-bottom: 2rem;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, .2);
    background: white;

`

const Pokemon = styled.h1`
    color: skyblue;
`

const Image = styled.img`
    width: 4rem;
`

const PokeCard = (props) => {
    const { name, image } = props

    return (
        <Wrapper>
            <Pokemon>{name}</Pokemon>
            <Image src={image} />
        </Wrapper>
    )
}

export default PokeCard