import React from 'react';

import { makeStyles } from '@mui/styles';

import SearchInput from '../components/SearchInput';

import SearchResult from '../components/SearchResult';
const useStyles = makeStyles({
    root:{
        height:'100vh',
        height:'100%',
        background:'#2B3956', 
        display:'flex', 
        flexDirection:'column',
        justifyContent: 'flex-start', 
        alignItems: 'flex-start', 
        padding:'4rem', 
    }, 
    resultContainer: {
        width: '100%',
        
    }
}); 

const MainPage = () => {
    const classes= useStyles()

    const data= [
        {
            link:'https://en.wikipedia.org' , 
            title:'Parisa - Wikipedia' , 
            snippet:'Fātemeh Vāezi better known as Parisā (Persian: پریسا), is a Persian classical singer, Avaz master, and one of the foremost female vocalists from Iran.'
        },
        {
            link:'https://en.wikipedia.org' , 
            title:'Parisa - Wikipedia' , 
            snippet:'Fātemeh Vāezi better known as Parisā (Persian: پریسا), is a Persian classical singer, Avaz master, and one of the foremost female vocalists from Iran.'
        },
        {
            link:'https://en.wikipedia.org' , 
            title:'Parisa - Wikipedia' , 
            snippet:'Fātemeh Vāezi better known as Parisā (Persian: پریسا), is a Persian classical singer, Avaz master, and one of the foremost female vocalists from Iran.'
        },
        {
            link:'https://en.wikipedia.org' , 
            title:'Parisa - Wikipedia' , 
            snippet:'Fātemeh Vāezi better known as Parisā (Persian: پریسا), is a Persian classical singer, Avaz master, and one of the foremost female vocalists from Iran.'
        },
        {
            link:'https://en.wikipedia.org' , 
            title:'Parisa - Wikipedia' , 
            snippet:'Fātemeh Vāezi better known as Parisā (Persian: پریسا), is a Persian classical singer, Avaz master, and one of the foremost female vocalists from Iran.'
        },
    ]
    return (
        <div className={classes.root}>
            <SearchInput />
            <div className={classes.resultContainer}>
                {data.map((item) => <SearchResult {...item}/>)}
            </div>
        </div>
    );
};
    
export default MainPage;
    