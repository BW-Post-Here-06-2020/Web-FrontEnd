// import React from 'react';
// import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
// import { useSelector, useDispatch } from "react-redux";

// function TabPanel( props ) 
// {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`scrollable-auto-tabpanel-${index}`}
//       aria-labelledby={`scrollable-auto-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box p={3}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired,
// };

// function a11yProps( index ) 
// {
//   return {
//     id: `scrollable-auto-tab-${ index }`,
//     'aria-controls': `scrollable-auto-tabpanel-${ index }`,
//   };
// }

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     width: '100%',
//     backgroundColor: theme.palette.background.paper,
//   },
// }));

// export default function ScrollableTabsButtonAuto() {
//   const classes = useStyles();
//   const [value, setValue] = React.useState(0);
//   const posts = useSelector( state => state.savedPosts );

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <div className={classes.root}>
//       <AppBar position="static" color="default">
//         <Tabs
//           value={value}
//           onChange={handleChange}
//           indicatorColor="primary"
//           textColor="primary"
//           variant="scrollable"
//           scrollButtons="auto"
//           aria-label="scrollable auto tabs example"
//         >
          
//           { posts.map.length > 0 ? posts.map( ( post, index ) => <Tab key = { index } label = { post.title } { ...a11yProps( index ) } />  ) : "" }
//         </Tabs>
//       </AppBar>
      

//       { posts.map.length > 0 ? posts.map( ( post, index ) => <TabPanel key = { index } value = { value } index = { index } > { post.post } </TabPanel>  ) : "" }
//     </div>
//   );
// }


import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import MyPost from "./MyPost";

export default function MyPosts() 
{
  const savePosts = useSelector( state => state.savedPosts );
  return (
    <div>
      <div className="center myPost"><h2>My Posts</h2></div>
      <div className = "myPosts row">
        { savePosts.map( ( post, index ) => <MyPost key = { index } id = { 0 }  title = { post.title } post = { post.post } /> ) }
      </div>
    </div>
  )
}
