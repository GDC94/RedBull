/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({actions, graphql, reporter}) => {
    const resultado = await graphql(`
        query {
            allDatoCmsAuto {
                nodes {
                    slug
                }
            }
        }
    `);



    if(resultado.errors){
        reporter.panic('Sin resultados', resultado.errors)
    }
    const autos = resultado.data.allDatoCmsAuto.nodes;
    autos.forEach(auto => {
        actions.createPage({
            path: auto.slug,
            component: require.resolve('./src/components/autos.js'),
            context: {
                slug: auto.slug
            }
        })
        
    });

}