import React, { Component } from 'react';
import firebase from 'firebase';
import FileUpload from './FileUpload';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      user: null
    };

    this.handleAuth = this.handleAuth.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  //Cambio del estado de la aplicación
  componentWillMount(){
    firebase.auth().onAuthStateChanged(user=>{
      this.setState({user});
    });
  }

  handleAuth(){
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
      .then( result => console.log(`${result.user.email} ha iniciado sesión`))
      .catch( error => console.log(`Error ${error.code}: ${error.message}`));
  }

  handleLogout(){
    firebase.auth().signOut()
      .then( result => console.log(`${result.user.email} ha Salido`))
      .catch( error => console.log(`Error ${error.code}: ${error.message}`));
  }

  renderLoginButton(){
    //si el user está logeado haga alg
    if(this.state.user){
      return(
        <div>
          <img className="main_img" src={this.state.user.photoURL} alt={this.state.user.displayName}/>
          <p>Hola {this.state.user.displayName}</p>

          <button className="btn  red darken-3" onClick={this.handleLogout}>Salir</button>
          <FileUpload></FileUpload>
        </div>
      );
    }else{
    //si no lo está que haga otra cosa
      return(
        <button className="btn  red darken-3" onClick={this.handleAuth}>Ingresar con Google</button>
      );
    }
  }

  render() {
    return (
      // render con Jsx
      <div className="App">
        <div className="App-header">
          <h2 className="main-title">Ingram</h2>
        </div>
        <p className="App-intro">
          {this.renderLoginButton()}
        </p>
      </div>
    );
  }
}

export default App;
