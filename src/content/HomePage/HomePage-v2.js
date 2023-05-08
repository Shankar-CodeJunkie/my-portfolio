import {
  Grid,
  Column,
  Tile, Tag
} from '@carbon/react';
import { InfoSection, InfoCard } from '../../components/Info';
import { Globe, Application, PersonFavorite } from '@carbon/react/icons';
import images2 from './../../images/images2.png'
import {CardHeader} from "@carbon/ibm-products/lib/components/Card";
import {ListItem, UnorderedList} from "@carbon/ibm-security";

const HomePage = () => {
  return (
      <>
        <Grid>
          <Column sm={4} md={8} lg={16}>

            <Tile>

              <Grid>

                <Column lg={16} md={6} sm={4} style={{marginTop:'20px'}}>
                  <Tile  className={'whitebackground-tile'} style={{borderRadius: '10px'}}>
                    <Grid>
                      <Column lg={8} md={6} sm={4}>
                        <div className={''}>
                          <h2>Shankar Venkatachalam</h2>
                        </div>
                        <div className={'author designation heading1'}>
                          Software Developer
                        </div>

                        <div className={'description'} >
                          A passionate programmer, who is keen to learn new skills and give back to community
                          by contributing to open-source technologies.
                          <div style={{paddingTop: '10px'}}>
                            I've a good experience in React, Javascript and Typescript.
                          </div>


                        </div>


                      </Column>
                      <Column lg={5} md={6} sm={4}>
                        <img className={'responsive'} src={images2} alt={'fj'}/>

                      </Column>
                    </Grid>

                  </Tile>

                  <Grid>
                    <Column lg={{offset:6, span:4}} md={6} sm={4}>
                      <div className={'author designation'}>
                        My Skills
                      </div>
                    </Column>

                    <Column lg={{offset:4, span:9}} md={4} sm={4}>
                      <div className={'skills-description'}>
                        Below is a quick overview of my main technical skills, but not limited to
                      </div>

                    </Column>

                    <Column lg={{offset:1, span:4}} md={4} sm={4}>
                      <Tile className={'whitebackground-tile rounded-tile'}>
                        <Grid>
                          <Column lg={{offset:1, span:3}} md={4} sm={4}>
                            <h6>Frontend Technologies</h6>
                            <br />

                          </Column>

                          <Column lg={4} md={4} sm={4} >
                            <ul style={{margin: '1px'}}>
                              <li>React</li>
                              <li>Javascript</li>
                              <li>Typescript</li>
                              <li>Angular</li>
                              <li>Carbon</li>
                            </ul>
                          </Column>
                        </Grid>


                      </Tile>
                    </Column>

                    <Column lg={4} md={4} sm={4}>
                      <Tile className={'whitebackground-tile rounded-tile'}>
                        <Grid>
                          <Column lg={{offset:1, span:3}} md={4} sm={4}>
                            <h6>Backend Technologies</h6>
                          </Column>

                          <br />
                          <Column lg={4} md={8} sm={4}>
                            <ul>
                              <li>NodeJS</li>
                              <li>ExpressJS</li>
                              <li>IBM Cloud Actions</li>
                              <li>IBM CodeEngine</li>
                            </ul>
                          </Column>

                        </Grid>

                      </Tile>
                    </Column>

                    <Column lg={{span:4}} md={4} sm={4}>
                      <Tile className={'whitebackground-tile rounded-tile'}>

                        <Grid>
                          <Column lg={{offset:1, span:3}} md={4} sm={4}>
                            <h6>DevOps</h6>
                          </Column>

                          <br />
                          <Column lg={4} md={8} sm={4}>
                            <ul>
                              <li>Kubernetes</li>
                              <li>Tekton</li>
                              <li>TravisCI</li>
                              <li>Shellscript</li>
                              <li>Github CLI /Actions /Bot</li>

                            </ul>
                          </Column>

                        </Grid>

                      </Tile>
                    </Column>



                  </Grid>
                </Column>


              </Grid>

            </Tile>


          </Column>
        </Grid>

      </>
  )
}


const SplitText = (props) => {
  return (
      <>
        {props.copy.split("").map(function(char, index){
          const style = {"animationDelay": (0.5 + index / 10) + "s"};
          return <span
              aria-hidden="true"
              key={index}
              style={style}>
        {char}
    </span>;
        })}
      </>
  )
}

export default HomePage
