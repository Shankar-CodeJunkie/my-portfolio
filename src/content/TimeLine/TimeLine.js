import react from 'react';
import {Column, Grid, Tile} from '@carbon/react';
import './_timeline.scss'



const TimeLine = () => {
  return (
      <div >
        <Grid className={'timelinelayout'}>
            <Column lg={{offset:1, span:5}}  sm={4} md={4} >
              <Tile className={'experience-box '}>
                <h3 className="vertical-timeline-element-title">Fullstack Developer</h3>
                <h4 className="vertical-timeline-element-subtitle">IBM</h4>
                <h6>2019 - present</h6>
                <div className={'roles'} >
                  <ul>
                    <li>
                      Co-created a React based profile UI for external users in www.ibm.com.
                    </li>
                    <li style={{paddingTop: '1vh'}}>
                      Created 3 slack bots to automate some of the manual tasks that we had to do every day in our team.
                    </li>
                    <li style={{paddingTop: '1vh'}}>
                      Created and Managing 5-6 enterprise web applications on IBM Cloud running on multi-region Kubernetes cluster
                    </li>

                  </ul>
                </div>

              </Tile>
            </Column>

            <Column lg={{span:5}} sm={4} md={4}>

            </Column>

           <Column lg={{offset:1, span:5}} sm={4} md={4}>

           </Column>


          <Column lg={{span:5}} sm={4} md={4}>
              <Tile className={'experience-box '}>
                <h3 className="vertical-timeline-element-title">Staff Software Engineer</h3>
                <h4 className="vertical-timeline-element-subtitle">IBM</h4>
                <h6>2014 - 2019</h6>
                <div className={'roles'} >
                  <ul>
                    <li>
                      L3 Support Software Engineer for Lotus Domino servers and  Lotus Notes Client
                    </li>
                    <li style={{paddingTop: '1vh'}}>
                      Handle PMR's from worldwide Clients and also assist escalations from L2 support teams
                    </li>

                  </ul>
                </div>
              </Tile>
            </Column>

          <Column lg={{offset:1, span:5}} style={{paddingTop:'1vh'}} sm={4} md={4} >
            <Tile className={'experience-box '}>
              <h3 className="vertical-timeline-element-title">Software Engineer</h3>
              <h4 className="vertical-timeline-element-subtitle">IBM</h4>
              <h6>2009 - 2014</h6>
              <div className={'roles'} >
                <ul>
                  <li>
                    L2 Support Software Engineer for Lotus Domino servers and  Lotus Notes Client
                  </li>
                  <li style={{paddingTop: '1vh'}}>
                    Handle PMR's from worldwide Clients for Crash, Hang and Performance issues on Lotus Domino Servers.
                  </li>

                </ul>
              </div>
            </Tile>
          </Column>


          <Column lg={{offset:0, span:5}} sm={4} md={4}>


          </Column>

          <Column lg={{offset:1, span:5}} sm={4} md={4}>

          </Column>


          <Column lg={{span:5}} sm={4} md={4}>
            <Tile className={'experience-box '}>
              <h3 className="vertical-timeline-element-title">System Administrator</h3>
              <h4 className="vertical-timeline-element-subtitle">IBM</h4>
              <h6>2007 - 2009</h6>
              <div className={'roles'} >
                <ul>
                  <li>
                    Manage around 100 domino servers running on Windows and UNIX platforms
                  </li>
                  <li style={{paddingTop: '1vh'}}>
                    Work on Lotus Notes Client and Server related problems
                  </li>

                </ul>
              </div>
            </Tile>
          </Column>
        </Grid>


      </div>
  )
}

export default TimeLine;
