import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from 'styled-components';


const ImageBack = styled(BackgroundImage)`
    height: 800px;

`
const  TextImage = styled.div`
   background-image: linear-gradient(to top,rgba(18, 42, 93, .5), rgba(18, 42, 93, .6));
    color: white;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;


    h1 {
        font-size: 2.5rem;
        margin: 0%;
        @media (min-width:992px){
            font-size: 4rem;
        }
    }

`
const ImageCar = () => {

    const { image } = useStaticQuery(graphql`
    
    query{
        image: file(relativePath: {eq: "F1.png"} ){
            sharp: childImageSharp {
                fluid {
                    srcSetWebp
                    }
                }
            }
        }

    `)
    
    
    return ( 
            <ImageBack tag="section" fluid={image.sharp.fluid} fadeIn="soft">
                <TextImage>
                    <h1>Bienvenidos al mundo Red Bull</h1>
                </TextImage>
            </ImageBack>
    );
}

export default ImageCar;