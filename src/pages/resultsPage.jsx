import React from 'react';

import { makeStyles } from '@mui/styles';
import {useParams, useLocation} from 'react-router-dom';

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
    const {search} = useLocation();
    
    const data= [
        {
            id:1,
            link:'https://en.wikipedia.org' , 
            title:'Parisa - Wikipedia' , 
            snippet:'Fātemeh Vāezi better known as Parisā (Persian: پریسا), is a Persian classical singer, Avaz master, and one of the foremost female vocalists from Iran.'
        },
        {
            id:2,
            link:'https://en.wikipedia.org' , 
            title:'Parisa - Wikipedia' , 
            snippet:'Fātemeh Vāezi better known as Parisā (Persian: پریسا), is a Persian classical singer, Avaz master, and one of the foremost female vocalists from Iran.'
        },
        {
            id:3,
            link:'https://en.wikipedia.org' , 
            title:'Parisa - Wikipedia' , 
            snippet:'Fātemeh Vāezi better known as Parisā (Persian: پریسا), is a Persian classical singer, Avaz master, and one of the foremost female vocalists from Iran.'
        },
        {
            id:4,
            link:'https://en.wikipedia.org' , 
            title:'Parisa - Wikipedia' , 
            snippet:'Fātemeh Vāezi better known as Parisā (Persian: پریسا), is a Persian classical singer, Avaz master, and one of the foremost female vocalists from Iran.'
        },
        {
            id:5,
            link:'https://en.wikipedia.org' , 
            title:'Parisa - Wikipedia' , 
            snippet:'Fātemeh Vāezi better known as Parisā (Persian: پریسا), is a Persian classical singer, Avaz master, and one of the foremost female vocalists from Iran.'
        },
    ]
    return (
        <div className={classes.root}>
            <SearchInput searchValue={search.slice(1 , search.length)} />
            <div className={classes.resultContainer}>
                {data.map((item) => <SearchResult key={item.id} {...item}/>)}
            </div>
        </div>
    );
};
    
export default MainPage;
    