import React, { Component } from "react";

class AddBlog extends Component {
  render() {
    return (
      <div className="container">
        <form>
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Titre"
              name="title"
              // value={this.state.lastName}
              // onChange={this.onChange}
              type="text"
            />
          </div>

          <div className="form-group">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              placeholder="Titre"
              name="title"
              // value={this.state.lastName}
              // onChange={this.onChange}
              type="text"
              rows={3}
              defaultValue={""}
            />
          </div>

          <div className="form-group form-check">
            <input
              className="form-check-input"
              id="exampleCheck1"
              type="checkbox"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              enregistrer comme brouillon
            </label>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default AddBlog;
