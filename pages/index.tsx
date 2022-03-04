import type { NextPage } from 'next'
import Head from 'next/head'
import Location from '../components/LocationAndSitzPlan'
import Grid from '@mui/material/Grid';
import SidebarMenuItem from "../components/SideBarMenu"
const Home: NextPage = () => {
  const sideMenuList = [{
    id: "12",
    name: "menu1",
    status: "default",
    href: "http://localhost:3000/",
  }]
  return (

    <div style={{color:"white",backgroundColor:"black",height:"1200px"}}>
      <Head>
        <title>Task of React js</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Grid container spacing={2}  >
          {/* <SidebarMenuItem  navigationList={sideMenuList}/> */}
          <Grid item={true} xs={3}>

          </Grid>
          <Grid item={true} xs={6}>
            <Location />
          </Grid>
          <Grid item={true} xs={3}>
          </Grid>
        </Grid>

      </main>
    </div>
  )
}

export default Home
