import Ember from 'ember';

export default Ember.Route.extend({
	ajax: Ember.inject.service(),
	session: Ember.inject.service('session'),
	// flashMessages: Ember.inject.service(),

		actions:{
		doLogin: function(username, password){

			 // const flashMessages = Ember.get(this, 'flashMessages');
			// console.log('Llegué a doLogin');
			// console.log(username);
			// console.log(password);
			//

			// let loginPromise = this.get('ajax').post('http://localhost:3000/login.json', {
			// 	data:{
			// 		username: username,
			// 		password: password,
			// 		grant_type: 'password'
			// 	}
			// });

			// loginPromise.then(function(){
			// 	this.transitionTo('home');
			// }.bind(this)).catch(function(){
			// 	alert('Datos invalidos');
			// }.bind(this));
			var usernameInput = document.getElementById('username');
			var passwordInput = document.getElementById('password');

			if(usernameInput.value == ''){
				//alert('El username no puede estar vacio')
				// flashMessages.danger('Something went wrong!');
        		handleError(err);
			}else{
				this.set('username', usernameInput.value );
			}

			if(passwordInput.value == ''){
				//alert('El password no puede estar vacio')
			}else{
				this.set('password', passwordInput.value );
			}
		this.get('session').authenticate('authenticator:oauth2', username, password).catch(()=>{
			//debugger
		}).then(()=>{
			this.transitionTo('home');
		})

		},
		doRedirectRegister: function(){
			this.transitionTo('users.new'); // El boton de registro solo me redirige a una pantalla llamada 'register'

		}
	}

});
