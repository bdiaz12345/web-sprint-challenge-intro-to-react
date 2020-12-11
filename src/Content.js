import React from 'react'
import styled from 'styled-components/macro'
import PokeCard from './PokeCard'

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    margin-left: 5rem;
`



const Content = (props) => {
    const { names, images } = props

    console.log(images)

    

    return (
        <Wrapper>
            {names.map((name, index) => {
                const pics = images[index]
                return (
                    <PokeCard name={name} image={pics} />
                )
            })}

        </Wrapper>
    )
}

export default Content