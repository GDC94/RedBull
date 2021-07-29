import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from "gatsby-image";
import styled from 'styled-components';
import { css } from '@emotion/react'



const TextInicio = styled.div`
    padding-top:4rem ;
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    text-align: justify;
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    


    @media (min-width: 768px){
        display: grid;
        grid-template-columns: repeat(2,1fr);
        column-gap: 5rem;
    }
   

    p{
        line-height: 2;
    }

`





const ContenidoInicio = () => {

    const info = useStaticQuery(graphql`
    query{
        allDatoCmsPagina(filter: {slug: {eq:"inicio" }}){
            nodes{
                titulo
                contenido
                imagen {
                    fluid{
                        ...GatsbyDatoCmsFluid
                        }
                    }
                }
            }
        }
    
    `);
    
    const  {titulo,contenido, imagen} = info.allDatoCmsPagina.nodes[0];

    return ( 
        <>
                <h2
                    css={css`
                        text-align: center;
                        font-size: 4rem;
                        margin-top: 4rem;
                        color: yellow;
                    
                    `}
                >{titulo}</h2>
                <TextInicio>
                    <p>{contenido}</p>
                    <Image fluid={imagen.fluid}/>
                </TextInicio>

        </>
     );
}
 
export default ContenidoInicio;


