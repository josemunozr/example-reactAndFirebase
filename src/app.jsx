import React from 'react'
import ReactDOM from 'react-dom'
import firebase from 'firebase'

// Initialize Firebase
const config = {
  apiKey: "AIzaSyCj5EgHo_FtEZG7VNm70FdKf_zuCac-zPA",
  authDomain: "react-firebase-8fbf0.firebaseapp.com",
  databaseURL: "https://react-firebase-8fbf0.firebaseio.com",
  storageBucket: "react-firebase-8fbf0.appspot.com",
  messagingSenderId: "220634524969"
}

firebase.initializeApp(config);


class App extends React.Component{
  constructor() {
    super()
    this.state = { name: 'Data firebase' }
  }

  componentWillMount() {
    const nameRef = firebase.database().ref().child('object').child('name')
    nameRef.on('value', (snapshot) => {
      this.setState({
        name: snapshot.val()
      })
    })
  }

  render () {
    return <h2>{this.state.name}</h2>
  }



}

ReactDOM.render(<App />, document.getElementById('app') )
