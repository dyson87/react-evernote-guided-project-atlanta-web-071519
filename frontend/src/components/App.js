import React, { Component } from 'react';
import Header from './Header';
import NoteContainer from './NoteContainer';

const App = ()  => {



  // listNotes = () => {
  //   return [...this.state.noteList]
  // }
  
    return (
      <div className="app">
        <Header />
        <NoteContainer />
      </div>
    );
  
}

export default App;
