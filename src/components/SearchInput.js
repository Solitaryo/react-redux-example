import React from "react";
import { connect } from 'react-redux'
import * as RecipeActions from "../redux/actions/RecipeActions";
 
class SearchInput extends React.Component {
  constructor() {
    super();
    this.state = {
      search: ""
    }
  }

  handleChange = (ev) => {
    this.setState({search: ev.target.value}, this.sendQuery)
  }

  sendQuery = () => {
    this.props.fetchRecipes(this.state.search);
  }

  render () {
    return (
      <div className="col">
        <div className="input-group mb-3">
          <input type="text"
            className="form-control"
            onChange={this.handleChange}
            placeholder="Search term" />
          <div className="input-group-append">
            <button
              onClick={this.sendQuery}
              className="btn btn-outline-secondary"
              type="button">
                Search
            </button>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchRecipes (data) {
      dispatch(RecipeActions.getRecipes(data));
    }
  }
}

export default connect(null, mapDispatchToProps)(SearchInput);