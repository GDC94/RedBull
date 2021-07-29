import React from 'react';
import { Link } from "gatsby";
import styled from 'styled-components';


const Navegador =styled.nav`
display: flex;
justify-content: center;
padding-bottom: 3rem;
@media (min-width: 768px){
    padding-bottom: 0;
}
`;

const NavLink = styled(Link)`
    color: white;
    font-size: 1.6rem;
    font-weight: 700;
    font-family:  'Roboto', sans-serif;
    text-decoration: none;
    padding: 1rem;
    margin-right: 1rem;
    &:last-of-type{
        margin-right: 0;
    }
    &.current{
        border-bottom: 2px solid white;
    }
;



`;


const Navegacion = () => {
    return (
        <Navegador>
            <NavLink 
                to={'/'}
                activeClassName="current"
            >Inicio</NavLink>
            
            <NavLink 
                to={'/nosotros'}
                activeClassName="current"
            >Pilotos</NavLink>
        </Navegador>
    );
}

export default Navegacion;