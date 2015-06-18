import Ember from "ember";

export default Ember.Route.extend({
	model: function(params, transition) {
		return Ember.$.get("api/campaigns/" + transition.params["campaigns.campaign"].election_year + "/candidates/" + params.candidate_id);
	},
	renderTemplate: function() {
		this.render({into:"application"});
	}
});