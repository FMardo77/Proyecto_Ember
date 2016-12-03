import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login', {path: '/login'});
  this.route('home', {path: '/'});
  this.route('product', {path: '/:product_id'});
  this.route('register');//Este ya no lo vamos a usar -_-
  this.route('profile');

  this.route('profiles', function() {
   this.route('new');
  });

  this.route('users', function() {
   this.route('new');
  });

  this.route('menus', function() {
    this.route('new');
  });

  this.route('types', function() {
    this.route('new');
  });
  // this.route('product', {path: '/:product_id'});
  this.route('products', function() {
    this.route('new');
    this.route('list');
  });
  this.route('homeadmin');

  this.route('comments', function() {
    this.route('new');
    this.route('list');
  });
  this.route('about');
  this.route('cartshopp');
});

export default Router;
