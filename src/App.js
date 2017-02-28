import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
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
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

		return (
			<Provider store={store}>
				<LoginForm />
			</Provider>
		);
	}
}

export default App;
