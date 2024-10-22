import React from 'react'

import { styled } from 'styled-components'

const StyledButton = styled.button`
    height:auto;
    width:auto;
    border:none;
    color:white;
    padding:15px;
    border-radius:10px;
    background-color:#597CFF;
`

const Button = ({text, onClick}) => {
  return (
    <StyledButton
    onClick={onClick}
    >
        {text}
    </StyledButton>
  )
}

export default Button