import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    container:{
        width: '100%',
        backgroundColor:'#E4EFF0', 
        borderRadius:'1rem', 
        padding:'1rem 0rem', 
        margin:'2rem 0rem'
    },
    root:{
       borderLeft:'4px solid #e8464e',
       padding:'0.25rem 1.5rem',
       textAlign:'left', 
    },
    link:{
        margin:'0',
        textDecoration:'none',
        color:'#202124',
        fontSize:'1rem', 
        fontWeight:'semi-bold'
    },
    title:{
        color:'#4b7196',
        margin:'0.5rem 0rem', 
        fontSize:'1.625rem', 
        textDecoration:'none',
        cursor:'pointer',
        '&:hover':{
            textDecoration:'underline',
        }
    }, 
    description:{
        color:'#4d5156',
        margin:'0.25rem 0rem', 
        fontSize:'0.875rem'
    }
  }); 
    
const SearchResult= (props) => {
    const {title, link, snippet} = props
    const classes = useStyles();  
    return (
        <div className={classes.container}>
            <div className={classes.root}>
                <a href={link} target="_blank" className={classes.link}>{link}</a>
                <h3 className={classes.title}>
                    <a href={link} target="_blank" className={classes.title}> {title} </a>
                </h3>
                <p className={classes.description}>{snippet} </p>
            </div>
        </div>
    );
};
    
export default SearchResult;
    