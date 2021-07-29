import React from "react"
import Layout from '../components/layout';
import ImageCar from "../components/imageCar";
import ContenidoInicio from "../components/contenidoInicio";
import useCars from "../hooks/useCars";
import { css } from '@emotion/react';
import AutoPreview from "../components/autoPreview";
import styled from 'styled-components';






const Lista = styled.ul`
  max-width: 1200px;
  width: 95%;
  margin: 4rem auto 0 auto;
  @media (min-width: 768px){
        display: grid;
        grid-template-columns: repeat(3,1fr);
        column-gap: 5rem;
    }
`;



const IndexPage = () => {
  const cars = useCars();

  console.log(cars)
  return (
    <Layout>
      <ImageCar/>
      <ContenidoInicio />

      <h2
        css={
          css`
            text-align: center;
            margin-top: 5rem;
            font-size: 3rem;
          `
        }
      >Autos</h2>

      <Lista>
        {cars.map(auto => (
            <AutoPreview
              key={auto.id}
              auto={auto}
            />
        ))}
      </Lista>

    </Layout>

  )

}

export default IndexPage;
