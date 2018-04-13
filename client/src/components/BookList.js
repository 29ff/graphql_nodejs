import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const getBooksQuery = gql`
  {
    books{
      id,
      name,
      genre
    }
  }
`

class BookList extends Component {

  renderBooks() {
    const { data } = this.props;
    if (data.loading) {
      return (<div>Loading...</div>)
    }
    return data.books.map(book => {
      return ( <li key={book.id}>{book.name} - {book.genre}</li> )
    })
  }

  render() {
    return(
      <ul id="book-list">
        {this.renderBooks()}
      </ul>
    )
  }
}

export default graphql(getBooksQuery)(BookList)