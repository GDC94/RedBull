import { graphql, useStaticQuery } from 'gatsby';


const useCars = () => {

    const cars = useStaticQuery(graphql`
    
    query{
        allDatoCmsAuto{
            nodes{
                titulo
                id
                slug
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

    return cars.allDatoCmsAuto.nodes.map(auto => ({
        titulo: auto.titulo,
        id: auto.id,
        contenido: auto.contenido,
        imagen: auto.imagen

    }));


}

export default useCars;