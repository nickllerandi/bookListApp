import React, {Component} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { selectedBook } from "../actions/index";

class BookList extends Component {
    renderBookList() {
        return this.props.books.map((book) => {
            return (
                <li
                    key={book.title}
                    onClick={() => this.props.selectedBook(book)}
                    className="list-group-item">
                    { book.title }
                </li>
            )
        })
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                { this.renderBookList() }
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        books: state.books
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectedBook: selectedBook}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);