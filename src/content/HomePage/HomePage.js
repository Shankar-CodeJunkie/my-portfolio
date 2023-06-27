import {
  Grid,
  Column,
  Tile, Tag,
} from '@carbon/react';
import { InfoSection, InfoCard } from '../../components/Info';
import { Globe, Application, PersonFavorite, Enterprise } from '@carbon/react/icons';
import images2 from './../../images/images2.png'
import {CardHeader} from "@carbon/ibm-products/lib/components/Card";
import {ListItem, UnorderedList} from "@carbon/ibm-security";
import developer from './../../images/developer.svg'
import Timeline from "../../components/Timeline";
import TimeLine from "../TimeLine/TimeLine";
import ContributionGraph from '../ContributionGraph/ContributionGraph';
import AOS from "aos";
import '../../../node_modules/aos/dist/aos.css';
import { useEffect } from 'react';
import Skills from '../Skill/Skill';
import Offerings from '../offerings/offering';

const HomePage = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
        <>
          <Grid className="landing-page" fullWidth  className={'landing-page__background'}>

            <Column lg={8} md={8} sm={4} style={{paddingTop: '50px'}}   >

              <p>Hello, I am </p>

              <div className={'ds-heading-md-3'} >Shankar Venkatachalam</div>

              <div className={'landing-page__designation'}>Software Engineer |  Fullstack Developer</div>

              <Tile style={{ marginRight: '20px', marginTop: '40px'}} className={'landing-page__description'}>
                I'm a passionate full stack developer, specialized in React (Frontend) and several javascript frameworks
                for backend. I also like to contribute to open source development and active contributor to
                many open source development projects.
              </Tile>

            </Column>

            <Column lg={6} md={8} sm={4}>
              <img data-aos={'fade-left'} data-aos-once="false" data-aos-duration={3000} className={'responsive'} src={developer} alt={'fj'}/>

            </Column>

            <Column lg={16} md={8} sm={4} style={{paddingTop: '50px'}}>
               <h1 className='experience-header'>Skills</h1>
            </Column>

            <Column lg={{span:16, offset:1}} md={8} sm={4} style={{paddingTop: '25px'}}>
              <Skills />
            </Column>

            <Column lg={16} md={8} sm={4} style={{paddingTop: '50px'}}>
              <h1 className={'experience-header'}>My Offerings</h1>
            </Column>

            <Column lg={{span:16, offset:1}} md={8} sm={4}>
              <Offerings />
            </Column>


            <Column lg={16} md={8} sm={4} className={'experience-layout'}>

              <Grid>
                <Column lg={3} md={8} sm={4}>
                  <div className={'experience-header'}>
                    Experience
                  </div>
                </Column>

                <Column lg={12} md={8} sm={4}>
                  {
                    /**
                     * <div className={'dotted-line center'}>

                     <div><Enterprise /></div>

                     </div>
                     <div className={'dotted-line center'}>

                     <div><Enterprise /></div>

                     </div>
                     <Timeline />
                     */
                    <TimeLine />
                  }


                </Column>
              </Grid>




            </Column>

            {
              /**
               * <Column lg={16} md={8} sm={4} className={'experience-layout'}>
              <Grid>
                <Column lg={3} md={8} sm={4}>
                <div className={'experience-header'}>
                    OpenSource Contributions
                  </div>
                </Column>
                <Column lg={12} md={8} sm={4}>
                  <ContributionGraph />
                
                </Column>
              </Grid>
            </Column>
               */
            }
            <Column lg={16} md={8} sm={4}>
              <h1 className={'experience-header'}>OpenSource Contributions</h1>
            </Column>

            <Column lg={{span:16, offset:1}} md={8} sm={4}>
              <ContributionGraph />
            </Column>

          </Grid>
        </>
  )
};


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
