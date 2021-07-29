import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Image from "gatsby-image";
import styled from 'styled-components';
import { css } from '@emotion/react'

const Contenido = styled.main`
    padding-top: 4rem;
    max-width: 1200px;
    width:95%;
    margin: 0 auto; 
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    @media (min-width: 768px){
        display: grid;
        grid-template-columns: repeat(2,1fr);
        column-gap: 5rem;
    }
    p {
        line-height: 2;
        margin-top: 6rem;
    }

`;


const ContenidoPilotos = () => {
    const resultado = useStaticQuery(graphql`
    query{
        allDatoCmsPagina(filter: {slug: {eq:"pilotos" }}){
            nodes{
                titulo
                contenido
                imagen {
                    fluid(maxWidth:1200){
                        ...GatsbyDatoCmsFluid
                        }
                    }
                }
            }
        }
    
    `);

        
    const {titulo, contenido,imagen} = resultado.allDatoCmsPagina.nodes[0];
    return ( 
        <>
            <h2
                css={css`
                    margin-top: 4rem;
                    text-align: center;
                    font-size: 4rem;
                    color: yellow;
                `}
            >{titulo}</h2>
            <Contenido>
                <p>{contenido}</p>
                <Image fluid={imagen.fluid}/>
            </Contenido>
        </>
    );
}

export default ContenidoPilotos;