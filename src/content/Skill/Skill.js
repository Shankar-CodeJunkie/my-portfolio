import React, { useState } from "react";
import { Button, Row, Column, Tile, Grid, Tag, Layer, RadioTile, TileGroup } from "@carbon/react";
import AOS from "aos";
import '../../../node_modules/aos/dist/aos.css';
import reactpicture from './react.png';
import js from './js.png';
import expressjs from './expressjs.png'
import typescript from './typescript.png';
import nextjs from './next.png';
import docker from './docker1.png';
import kubernetes from './kubernetes.png';
import heroku from './heroku.png';
import mongodb from './mongodb.png';
import nodejs from './nodejs.png';
import ibm_cloud from './IBM_Cloud_logo.png';
import travis_ci from './travis-ci.png';

const Skills = () => {
    return (
        <>
            <Grid >
                    <Column lg={5} md={8} sm={4} >
                        <Tile >
                            <div className={'tile-headerv1'}>
                                FrontEnd
                            </div>
                            <hr />
                            <div className={'tile-body'}>
                                <img src={reactpicture} alt={'react'} />
                                <img src={js} alt={'javascript'} />
                                <img src={nextjs} alt={'NextJS'} />
                                <img src={typescript} alt={'typescript'} />
                            </div>

                        </Tile>

                    </Column>



                    <Column lg={5} md={8} sm={4}>
                        <Tile >
                            <div className={'tile-headerv1'}>
                                BackEnd
                            </div>
                            <hr />

                            <div className={'tile-body'}>
                                <img src={expressjs} alt={'express-js'} onHover={'expressjs'} />
                                <img src={mongodb} alt={'mongodb'} />
                                <img src={nodejs} alt={'nodejs'} />


                            </div>

                        </Tile></Column>

                    <Column lg={5} md={8} sm={4}>
                        <Tile className={'skill-tile'}>
                            <div className={'tile-headerv1'}>
                                Cloud / CI-CD
                            </div>
                            <hr />
                            <div className={'tile-body'}>
                                <img src={docker} alt={'Docker'} />
                                <img src={kubernetes} alt={'Kubernetes'} />
                                <img src={heroku} alt={'Heroku'} />
                                <img src={ibm_cloud} alt={'IBM Cloud'} />
                            </div>

                        </Tile>
                </Column>
            </Grid>

        </>
    )
}

export default Skills;