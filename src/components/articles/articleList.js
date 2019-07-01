import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getArticles } from '../../store/users/actions';

class ArticleList extends Component {
componentDidMount() {
    this.props.getArticles();
  }
  render() { 
    console.log("props articles",this.props.articles.articles)                                                      
    if(this.props.articles.articles.length) {                                
      return (
        <div>
          <h4>Articles</h4>
          {this.props.articles.articles.map(article => {                     
            return (
              <div key={ article._id }>                              
                <hr/>          
                <h4><Link to={`/articles/${article._id}`}>{article._id}: {article.title}</Link></h4> 
                <p>{article.content}</p>
              </div>
            );
          })}
        </div>
      )   
    } else {
        return (<div>No Articles</div>)
      }
    }
  }
  
  const mapStateToProps = (state) => ({ articles: state.articlesReducer }); 
  
  export default connect(mapStateToProps, {getArticles})(ArticleList); 