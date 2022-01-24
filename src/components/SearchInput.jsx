import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import { makeStyles } from '@mui/styles';
import InputBase from '@mui/material/InputBase';
import {useNavigate} from 'react-router-dom'

const useStyles = makeStyles({
    root: {
        background: '#E4EFF0',
        border: 0,
        borderRadius: 50,
        color: 'white',
        height: '3.5rem',
        padding: '0 30px',
        width: '100%',
    },
    iconBox: {
        zIndex:1000,
        borderRadius: '0px 50px 50px 0px',
        background: '#e8464e',
        // #FE1631
        position: 'absolute',
        top: 0,
        fontSize:'18px',
        right: 0,
        width: '7rem',
        height: '3.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color:"#fff",
        cursor: 'pointer', 
    },
    inputBox: {
        minWidth:'100%',
        display: 'inline-block',
        position: 'relative',
    },
    clearIcon:{
        color:'#222' ,
        marginRight:'6rem'
    }, 
    container:{
        width:'100%',
    }
  }); 
    
const SearchInput= ({searchValue, onSearch:handleSearch}) => {
    const [value, setValue] =React.useState(searchValue)

     const navigate = useNavigate();
     const goToPosts = () =>{
        navigate({
        pathname: '/search',
        search: `?${value}`,
      });}
 
    const classes = useStyles();  
    return (
        <div className={classes.container}>
            <div className={classes.inputBox}>
                <span className={classes.iconBox} onClick={()=>goToPosts()}>
                    <SearchIcon fontSize='medium' style={{marginRight:'0.5rem'}} />
                    <p>Search</p>
                </span>
                <InputBase
                    placeholder='Search ...' 
                    className={classes.root}
                    endAdornment={value && <ClearIcon cursor='pointer' className={classes.clearIcon} onClick={()=>{setValue('')}} />}
                    value={value}
                    onChange={(e)=>{setValue(e.currentTarget.value)}}
                />
            </div>
        </div>
    );
};
    
export default SearchInput;
    