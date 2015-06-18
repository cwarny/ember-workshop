import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.route("campaigns", {path:"/"}, function() {
		this.route("campaign", {path: "/campaign/:election_year"}, function() {
			this.route("candidate", {path: "/candidate/:candidate_id"});
		});
	});
});

export default Router;
