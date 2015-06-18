import Ember from "ember";

export default Ember.Controller.extend({
	cycle: "P",
	party: "D",
	contributions: function() {
		var cycle = this.get("cycle"),
			party = this.get("party");

		return this.get("model.contributions")[0].timeline
			.filter(function(d) {
				return d.cycle === cycle && d.party === party;
			})
			.map(function(d) {
				return {
					timestamp: new Date(d.yearmonth),
					value: d.value
				};
			});
	}.property("model")
});