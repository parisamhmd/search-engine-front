import React from 'react';

import { makeStyles } from '@mui/styles';
import Skeleton from '@mui/material/Skeleton';
import {useLocation} from 'react-router-dom';
import {useQuery} from 'react-query'
import axios from 'axios'; 

import SearchInput from '../components/SearchInput';
import SearchResult from '../components/SearchResult';

const useStyles = makeStyles({
    root:{
        height:'100vh',
        background:'#2B3956', 
        display:'flex', 
        flexDirection:'column',
        justifyContent: 'flex-start', 
        alignItems: 'flex-start', 
        padding:'0rem 8rem'
    }, 
    resultContainer: {
        width: '100%',
    },
    notFoundContainer:{
        height:'100%',
        margin:'8rem 0rem 0rem',
        fontSize: '1.875rem', 
        color:'#fff'
    },
    searchText:{
        marginTop:'8rem',
        fontSize: '4rem', 
        color:'#e8464e'
    }
}); 

const MainPage = () => {
    const classes= useStyles()
    const {search} = useLocation();

    function getSearchData() {
        return  axios.get(`http://0e89-5-219-206-237.ngrok.io/?query=${search.slice(1 , search.length)}`);    
    }

    const {data, status} = useQuery(`result${search}`, getSearchData, {retry:3})
    const results = data?.data?.data || []

    return (
        <div className={classes.root}>
            <SearchInput searchValue={search.slice(1 , search.length)} />
            <div className={classes.resultContainer}>
                {!status || status ==='loading' 
                    ?[1,2,3].map(e=><Skeleton variant='rectangular' width='full' height={140} animation="wave" sx={{bgcolor:'#435170',borderRadius:'0.5rem',  margin:'2rem 0rem'}}/>)
                    :results.length>0 
                        ? results.map((item) => <SearchResult key={item.id} {...item}/>)
                        : (
                            <div className={classes.notFoundContainer}>
                                Your search - <span className={classes.searchText}>{search.slice(1 , search.length)}</span> - did not match any documents.
                            </div>
                        )
                }
            </div>
        </div>
    );
};
    
export default MainPage;
    