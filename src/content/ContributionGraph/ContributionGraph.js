import React from 'react';

import "@carbon/styles/css/styles.css";

import "@carbon/charts/styles.css";
import { ComboChart, LineChart, } from "@carbon/charts-react";
import { Grid, Column, Tag, Tile } from "@carbon/react"

// IBM Plex should either be imported in your project by using Carbon
// or consumed manually through an import
//import "./ibm-plex-font.css";

const state = {
  data: [
    {
      "group": "Github Commit",
      "date": "2019-12-31T18:30:00.000Z",
      "value": 4
    },
    {
      "group": "Github Commit",
      "date": "2020-12-31T23:30:00.000Z",
      "value": 10
    },
    {
      "group": "Github Commit",
      "date": "2021-01-01T04:30:00.000Z",
      "value": 6
    },
    {
      "group": "Github Commit",
      "date": "2022-01-01T18:30:00.000Z",
      "value": 300
    },
    {
      "group": "Github Commit",
      "date": "2023-01-01T20:30:00.000Z",
      "value": 34
    }

  ],
  options: {
    "title": "Github Contribution Chart",
    "curve": "curveMonotoneX",
    "axes": {
      "left": {
        "mapsTo": "value",
        "title": "Total Contributions",
        "scaleType": "linear"
      },
      "bottom": {
        "title": "Year",
        "mapsTo": "date",
        "scaleType": "time"
      }
    },
    "height": "400px"
  }
};

const ContributionGraph = () => {
  return (
    <Grid>
      <Column lg={8} md={8} sm={4}>

        <Tile>
          <div className='tile-headerv1'>
            Contributed Organisations

          </div>
          <hr />
          <div className='org'>
            <Grid>
              <Column lg={16} md={8} sm={4}>
              <Tag type={'outline'} size={'md'}>IBM/carbon-design-system</Tag>
              </Column>
              <Column lg={16} md={8} sm={4}>
              <Tag type={'outline'} size={'md'} >Microsoft/VSCode</Tag>
              </Column>
              <Column lg={16} md={8} sm={4}>
              <Tag type={'outline'} size={'md'} >vercel/next.js</Tag>
              </Column>
              <Column lg={16} md={8} sm={4}>
              <Tag type={'outline'} size={'md'} >IBM/VSCode-Cloudant-Explorer</Tag>
              </Column>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
            </Grid>
          </div>
        </Tile>


      </Column>
      <Column lg={8} md={8} sm={4}>
        <LineChart
          data={state.data}
          options={state.options}>
        </LineChart>
      </Column>
    </Grid>
  )
}

export default ContributionGraph;