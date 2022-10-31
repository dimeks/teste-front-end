import axios from 'axios'

const request = axios.create({
   baseURL: 'https://youtube.googleapis.com/youtube/v3/',
   params: {
      key: 'AIzaSyBlaqQenXOAxoa6VPjiZq3kagES3bngwAY',
   },
})

export default request




