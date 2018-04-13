import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const getAuthorsQuery = gql`
  {
    authors{
      name,
      age,
      id
    }
  }
`

class AddBook extends Component {

  renderAuthor() {
    const { data } = this.props;
    if (data.loading) {
      return (<option disabled>Loading...</option>)
    }
    return data.authors.map(item => {
      return (
        <option key={item.id}>{item.name}</option>
      )
    })
  }

  render() {
    return(
      <React.Fragment>
        <form>
          <div className="field">
            <label>Book name</label>
            <input type="text" />
          </div>
          <div className="field">
            <label>Genre</label>
            <input type="text" />
          </div>
        </form>
        <div className="field">
          <label>Author</label>
          <select>
            { this.renderAuthor() }
          </select>
        </div>
      </React.Fragment>
    )
  }
}

export default graphql(getAuthorsQuery)(AddBook)