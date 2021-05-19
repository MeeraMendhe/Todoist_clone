import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Paper } from '@material-ui/core';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  flex:{
      display:"flex"
  },
  margin:{
      width:"30%",
     // fontFamily:"Verdana, Geneva, sans-serif",
      paddingLeft:"2%",
      paddingRight:"2%",
      padding:"1%",
      marginRight:"10%",
      marginLeft:"10%",
      height:"280px",
      marginTop:"5%",
      fontSize:"12px",
      boxShadow:"0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      borderRadius:"10px"
  },
  img:{
      height:"550px",
      width:"550px"
  },
  color:{
      backgroundColor:"white",
      color:"#575757",
      width:"70%",
      margin:"auto",
      marginBottom:"30px"
  }
}));

export default function LastDiv() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
     
      <TabPanel value={value} index={0}>
        <div className={classes.flex}>
              <Paper className={classes.margin}>
                  <h1 >“ <br/>I literally couldn’t do my job or even manage all the business of being a fully functioning parent and spouse without Todoist.</h1>
                  <h5>Khoi Vinh</h5>
                  <p>Principal Designer at Adobe</p>
              </Paper>
              <img className={classes.img} src="https://todoist.com/_next/static/images/creatives@2x_982573afe55d7d685457e8739cad1564.webp" alt=""/>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div className={classes.flex}>
              <Paper className={classes.margin}>
                  <h1 >“<br/>
As a software engineer, it’s useful to break down big projects into smaller tasks, and Todoist is perfect for that purpose.</h1>
               <h5>Tigran Hakobyan</h5>
               <p>Senior Product Engineer at Buffer</p>
           </Paper>
              <img className={classes.img} src="https://todoist.com/_next/static/images/developers@2x_afa5cccd3899b95eaeeadf1b1428f04e.webp" alt=""/>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <div className={classes.flex}>
              <Paper className={classes.margin}>
                  <h1 >“<br/>
I kept track of all my school tasks in Todoist and, in 2016, I became the first one in my family to obtain a bachelor’s degree.</h1>
                <h5>Samantha Houston</h5>
                <p>Software Engineer</p>
              </Paper>
              <img className={classes.img} src="https://todoist.com/_next/static/images/students@2x_f3428555b6fdc8fd7b6f2be4accaf4bd.webp" alt=""/>
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <div className={classes.flex}>
              <Paper className={classes.margin}>
                  <h1 >“<br/>
Todoist has revolutionized the way we run our small business by helping us simplify projects and coordinate tons of details.</h1>
             <h5>Trevor Stephens</h5>
             <p>General Manager at Topline Builders</p>
              </Paper>
              <img className={classes.img} src="https://todoist.com/_next/static/images/small-businesses@2x_0f94ac4d45a80b3a9799d6b50a118b87.webp" alt=""/>
        </div>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <div className={classes.flex}>
              <Paper className={classes.margin}>
                  <h1 >“<br/>
Todoist gave us the focus to scale our company from 2 to 75 employees, $12M in VC financing, and 350+ happy enterprise customers.</h1>
             <h5>Andrew Montalenti</h5>
             <p>CTO at Parse.ly</p>
              </Paper>
              <img className={classes.img} src="https://todoist.com/_next/static/images/entrepreneurs@2x_7a88f9f8faf22929603ed3d4cc1d625f.webp" alt=""/>
        </div>
      </TabPanel>
      <TabPanel value={value} index={5}>
      <div className={classes.flex}>
              <Paper className={classes.margin}>
                  <h1 >“<br/>
Todoist helps me organize all my writing projects. And that makes it an indispensable tool both in business and in life.</h1>
            <h5>Jennifer Mattern</h5>
            <p>Freelancer Writer</p>
              </Paper>
              <img className={classes.img} src="https://todoist.com/_next/static/images/freelancers@2x_b25168b8c7fa10539ac8c3d747a8cf51.webp" alt=""/>
        </div>
      </TabPanel>
      <AppBar className={classes.color} position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Creatives" {...a11yProps(0)} />
          <Tab label="Developers" {...a11yProps(1)} />
          <Tab label="Students" {...a11yProps(2)} />
          <Tab label="Small Business" {...a11yProps(3)} />
          <Tab label="Entrepreneurs" {...a11yProps(4)} />
          <Tab label="Freelancers" {...a11yProps(5)} />

        </Tabs>
      </AppBar>
    </div>
  );
}
