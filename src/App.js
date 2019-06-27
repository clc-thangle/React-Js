import './App.css';
import React, { Component } from 'react';
import Nav from './Nav';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
import {noteData} from './firebaseConnect'
import {connect} from 'react-redux';
class App extends Component {

  showForm   = () => {
    if(this.props.isEdit)
    {
      return <NoteForm/>
    }
  }

  constructor(props) {
    super(props);
    this.state = {}
  }
  
  addData  = (item) => {
    noteData.push(item);
  }

  render() {
    // noteData.once('value').then(function(snapshot){
    //   console.log(snapshot.val());
      
    // });
    
    return (

      <div>
      <Nav/>
      <div className="container">
        <div className="row">
          <NoteList/>
          {this.showForm()}
        </div>
      </div>

    </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    isEdit: state.isEdit
  }
}
export default connect(mapStateToProps)(App)