import React from 'react';
import { css } from '@emotion/react';
import logo from "../images/red.png";
import Navegacion from './nav';

const Header = () => {
    return (
        <header
            css={css`
                background-color: #071644;
                padding: 1rem;

            `}

        >
            <div
                css={css`
                    max-width: 1200px;
                    margin: 0 auto;

                    @media (min-width: 768px){
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                    }
                
                `}

            >
                <div
                    css={css`
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                    `}
                >
                
                    <img src={logo} alt="" width={70}/>
                    <h1
                        css={css`
                            color: white;
                    `}

                    >  Red Bull Racing</h1>

                </div>
                <Navegacion />

            </div>
        </header>
    );
}

export default Header;
