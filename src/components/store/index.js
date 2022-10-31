import { createStore, applyMiddleware, combineReducers } from 'redux'

import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {

   searchedVideosReducer,

} from './reducers'

const rootReducer = combineReducers({


   searchedVideos: searchedVideosReducer,



})

const store = createStore(
   rootReducer,
   {},
   composeWithDevTools(applyMiddleware(thunk))
)

export default store