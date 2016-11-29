import Ember from 'ember';

export default Ember.Route.extend({
	ajax: Ember.inject.service(),
	session: Ember.inject.service('session'),
	// flashMessages: Ember.inject.service(),

		actions:{
		doLogin: function(username, password){

			var usernameInput = document.getElementById('username');
			var passwordInput = document.getElementById('password');

			if(usernameInput.value == ''){
				alert('El username no puede estar vacio');
				// flashMessages.danger('Something went wrong!');
        		//handleError(err);
			}else{
				this.set('username', usernameInput.value );
			}

			if(passwordInput.value == ''){
				alert('El password no puede estar vacio');
			}else{
					//alert('Datos Incorrectos');
			}
		this.get('session').authenticate('authenticator:oauth2', username, password).catch(()=>{
			//this.set('errorMessage', result.error || result);
			alert('Datos Incorrectos');
		}).then(()=>{
			this.transitionTo('home');
		})

		},
		doRedirectRegister: function(){
			this.transitionTo('users.new'); // El boton de registro solo me redirige a una pantalla llamada 'register'

		}
	}

});
