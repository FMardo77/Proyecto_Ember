import Ember from 'ember';
import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';
//import Base from 'ember-simple-auth/authenticators/base';

export default OAuth2PasswordGrant.extend({
	serverTokenEndpoint: '/oauth/token' //
});
