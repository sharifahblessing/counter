import axios from 'axios';

export const constants = {
    GET_ARTICLES: 'GET_ARTICLES',
    ARTICLES_FAILED:"ARTICLES_FAILED",
    ADD_ARTICLE:"ADD_ARTICLE",
    GET_ARTICLE:"GET_ARTICLE",
    DELETE_ARTICLE:"DELETE_ARTICLE",
    UPDATE_ARTICLE:"UPDATE_ARTICLE"
  
  };
  
//   export const getArticles = () => dispatch => {
//     return axios
//       .get('/articles')
//       .then(response => {
//         dispatch({ type: constants.GET_ARTICLES, articles: response.data });
//       })
//       .catch(error => {
//         throw error;
//       });
//   };
  
  export const getArticles = () => async dispatch => {
    try {
      const res = await axios.get('/articles');
      console.log(res)
      dispatch({ type: constants.GET_ARTICLES, articles: res.data });
    } catch (err) {
      dispatch({ type: constants.ARTICLES_FAILED });
    }
  };

  

export const addArticle = (articleData, history) => dispatch => {                                                      //1
    return axios.post("/articles", articleData)                                                //2
      .then(response => {
        dispatch({type: constants.ADD_ARTICLE, payload: response.data})
      })
      .then(() => {
        history.push("/articles")                                                                        //4
      })
      .catch(error => { throw(error) });
};



export const getArticle = id => async dispatch => {
  try {
    const res = await axios.get(`/articles/${id}`);
    dispatch({ type: constants.GET_ARTICLE, article: res.data });
  } catch (err) {
    dispatch({ type: constants.ARTICLE_ERROR });
  }
};

export const deleteArticle = (id) => async dispatch=> {
   try{
    const res = await axios.delete(`/articles/${id}`);
     dispatch({type: constants.DELETE_ARTICLE, article: id});
  
    } catch(err){
          dispatch({type:constants.ARTICLE_ERROR});
      }
  };
