import React from 'react';
import { connect } from 'react-redux';
import { addArticle } from '../../store/users/actions';     
import {withRouter} from "react-router-dom"                 //1

class ArticleAdd extends React.Component {
  state = { title: '', content: '' };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addArticle(this.state,this.props.history);                        //4          
  };

  render() {
    return (
      <div>
        <h4>Add Article</h4>
        <form onSubmit={ this.handleSubmit }>
          <div className="form-group">
            <input type="text" name="title" required value={this.state.title} onChange={this.handleChange} 
              className="form-control" placeholder="Title" />
          </div>
          <div className="form-group">
            <textarea name="content" rows="5" required value={this.state.content} onChange={this.handleChange} 
              className="form-control" placeholder="Content" />
          </div>
          <button type="submit" className="btn btn-dark">Create</button>
        </form>
      </div>
    );
  }
}

 export default connect(null, {addArticle})(withRouter(ArticleAdd)) 