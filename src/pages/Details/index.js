import React from "react";
import { Link} from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "./styles";
import { Provider } from "react-redux"; 
import store from "../../components/store";
import * as C from "./styles";
import './styles.css'






const API_KEY = 'AIzaSyCv1pz4VoKVfF4_CQMxDWjkDF3xOWJI05U'
   
  
  
  
    function Details() {
      const { id } = useParams()
      const [loading, setLoading] = useState(true);
      const [items, setVideo] = useState([])
    
    
      useEffect(() => {
        fetch(`https://www.googleapis.com/youtube/v3/videos?id=${id}&part=snippet,statistics&key=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
          
          const items = {
            id,
            title: data["items"][0].snippet.title,
            description: data["items"][0].snippet.description,
            likes: data["items"][0].statistics.likeCount,
            viewcount: data["items"][0].statistics.viewCount,
          }
          console.log(data)
          setVideo(items)
        });
        setLoading(false);
      }, [id])
        if(loading) return <h1>Loading...</h1>
      
      return (
        <Provider store={store}>
          <C.Header1><C.BackButton><Link id='voltar'  to='/home'>Voltar</Link></C.BackButton></C.Header1>
          <Container>
         <div className="video">
         <div className="details">
         <iframe id="iframe" src={`https://www.youtube.com/embed/${id}`}></iframe>
         </div>
         <div className="details2">  
         <h1>{items.id}</h1>
         <h2>Titulo : {items.title}</h2> 
         <h2>Likes : {items.likes}</h2>
         <h2>Vizualizações : {items.viewcount}</h2><br></br>
         <p>Descrição : {items.description}</p>

    

         
         
         
         
        

         </div>
         </div><br></br><br></br>
        </Container>
        </Provider>
      );
    }

export default Details