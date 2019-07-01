import { constants } from './actions';                          

const initialState = { 
articles: [] ,
article:{}

}


const articlesReducer = (state = initialState, action)  => {  
  switch (action.type) {
    case constants.GET_ARTICLES:                                               
      //return action.articles;
      return {
          ...state,
          articles:action.articles
        }
    
    case constants.ADD_ARTICLE:
      return{...state,...action.articles}

    case constants.GET_ARTICLE:

      return { ...action.article}

    case constants.DELETE_ARTICLE:
      return state.filter(article => article._id !== action.article._id)

    case constants.UPDATE_ARTICLE:
      return {}

      default:                                                             
      return state;
  }
}

export default articlesReducer;