import React from 'react';
import { ButtonContainer } from './style';

const Button = ({title, variant="primary", onClick, children}) => {
    return (
        <ButtonContainer variant={variant} onClick={onClick}>
            {children}
        </ButtonContainer>
    );
}

export default Button;
