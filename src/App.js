import React, { Component } from 'react';
// import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
	componentWillMount() {
		const config = {
    apiKey: 'AIzaSyCnIlvBx-2zSzVXqbGDpcZrpmN-10YHfMQ',
    authDomain: 'employee-manager-4bf9c.firebaseapp.com',
    databaseURL: 'https://employee-manager-4bf9c.firebaseio.com',
    storageBucket: 'employee-manager-4bf9c.appspot.com',
    messagingSenderId: '587927539593'
  };
    firebase.initializeApp(config);
	}
	render() {
		return (
			<Provider store={createStore(reducers)}>
				<LoginForm />
			</Provider>
		);
	}
}

export default App;
