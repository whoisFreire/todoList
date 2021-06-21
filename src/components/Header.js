import React from 'react';
import styled from 'styled-components';

export const Header = ()=> {
    const Titulo = styled.h1`
        color: #fff
    `
    return (
        <div>
            <Titulo>TodoList</Titulo>
        </div>
    )
}