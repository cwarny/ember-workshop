import Ember from "ember";

export default Ember.Route.extend({
	model: function(params) {
		return Ember.$.get("api/campaigns/" + params.election_year).then(function(data) {
			return data.features;
		});
	}
});