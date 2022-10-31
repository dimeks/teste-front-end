import React from 'react';
import { Link, resolvePath } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getVideosBySearch } from '../store/actions/searchAC';
import { Item } from './styles';
import { ContainerLista } from './styles';
import { Button } from './styles';
import './styles.css';            
import { Grid } from '@mui/material';


       const HomeScreen = () => {
        const dispatch = useDispatch()


         const buscainput = () => {
         const valorInput = document.getElementById('inputx');
         const valor = valorInput.value            
         console.log(valor)
         dispatch(getVideosBySearch(valor))
      }


        
        const { videos } = useSelector(
         state => state.searchedVideos
      )
        
      const fetchData = () => {
         const valorInput = document.getElementById('inputx');
         const valor = valorInput.value            
         console.log(valor)
         dispatch(getVideosBySearch(valor))
     
      }
        return (
         
 
         

                <ContainerLista>
                <Button id="ButtonSearch" onClick={buscainput} Text="Buscar">Buscar</Button><br></br>
                
                <InfiniteScroll className='scroll'               
                  dataLength={videos.length}
                  next={fetchData}
                  hasMore={true}>
                                            <grid id="grid">
                                             {videos.map(video => (
                     
                                                <Item>
                                                <img id="img" src={video.snippet.thumbnails.default.url} alt="" />
                                                <h2>{video.title}</h2><br></br>
                                                <p>{video.snippet.description}</p><br></br>
                                                <Link to={`/Details/${video.id.videoId}`}>Detalhes</Link>
                                                </Item>
                     ))}</grid>
                  
               </InfiniteScroll></ContainerLista>
         
         
          
        )
     }
     
export default HomeScreen





