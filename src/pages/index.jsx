import React from 'react';

import { makeStyles } from '@mui/styles';

import SearchInput from '../components/SearchInput';

const useStyles = makeStyles({
    root:{
        height:'100vh',
        background:'#2B3956', 
        display:'flex', 
        justifyContent: 'center', 
        alignItems: 'center'
    }
}); 

const MainPage = () => {
const classes= useStyles()
  return (
    <div className={classes.root}>
        <div style={{width:'35rem'}}>
            <SearchInput/>
        </div>
    </div>
  );
};
    
export default MainPage;
    