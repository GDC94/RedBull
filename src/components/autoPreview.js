import React from 'react';
import Image from "gatsby-image";
import styled from 'styled-components';
import { css } from '@emotion/react'
import { Link } from 'gatsby';




const Button = styled(Link)`
    margin-top: 2rem;
    padding: 1rem;
    background-color: yellow ;
    color: black;
    display: block;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    width: 95%;
    text-align: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

`;

const Title = styled.h3`
    color: white;
    font-size: 2rem;
    text-align: center;
    margin-top: 2rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;


const AutoPreview = ({ auto }) => {
    const { titulo, contenido, imagen, slug } = auto;
    return (

        <div
            css={css`
    
            margin-bottom: 2rem;
        `}
        >
            <Image
                fluid={imagen.fluid}
            />
            <div>
                <Title>{titulo}</Title>
                <p
                    css={css`
                    color: white;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                    text-align: justify;
            `}

                >{contenido}</p>

                <Button to={slug}>Ver detalle</Button>
            </div>
        </div>

    );
}

export default AutoPreview;