import React from 'react';

import { Link } from 'react-router-dom';
import { Listavideo } from './styles';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getVideosBySearch2, getVideosBySearch } from '../store/actions/searchAC';
import { ContainerLista } from './styles';
import { Item } from './styles';
import Loader from '../loader'
import { ContainerLista2 } from './styles';
import { Button } from './styles';

               



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
         
 
         

                <div>
                  <Button id="ButtonSearch" onClick={buscainput} Text="Buscar">Buscar</Button><br></br>
                <InfiniteScroll className='scroll'               
                  dataLength={videos.length}
                  next={fetchData}
                  hasMore={true}>
                  
                     {videos.map(video => (
                     <Item>
                     <div>
                     <img src={video.snippet.thumbnails.medium.url} alt="" />
                     <h2>{video.title}</h2><br></br>
                     <p>{video.snippet.description}</p><br></br>
                     <Link to={`/Details/${video.id}`}>Detalhes</Link>
                     </div>
                     </Item>
                     ))}
                  
               </InfiniteScroll></div>
         
         
          
        )
     }
     
export default HomeScreen





