import React, {Component} from 'react';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import NavBar from "./components/navbar/NavBar.jsx"
import Search from "./components/search/Search.jsx"

class App extends Component {
  render(){
    return(
      <MuiThemeProvider>
        <div>
          <NavBar />
          <Search />
        </div>
      </MuiThemeProvider>
     
    )}
  
};

export default App;
