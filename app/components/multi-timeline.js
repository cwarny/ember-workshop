import Ember from "ember";

/* global d3 */

export default Ember.Component.extend({
	tagName: "svg",
	attributeBindings: ["width", "height"],
	width: 600,
	height: 300,

	xScale: function() {
		var data = this.get("data"),
			width = this.get("width");

		var min = d3.min(data, function(d) { return d.timestamp; }),
			max = d3.max(data, function(d) { return d.timestamp; });

		return d3.time.scale().domain([min, max]).range([0, width]);
	}.property("data"),

	yScale: function() {
		var data = this.get("data"),
			height = this.get("height");

		var max = d3.max(data, function(d) { return d.value; });

		return d3.scale.linear().domain([0,max]).range([height, 0]);
	}.property("data"),

	xAxis: function() {
		var xScale = this.get("xScale");
		return d3.svg.axis().scale(xScale);
	}.property("xScale"),

	yAxis: function() {
		var yScale = this.get("yScale");
		return d3.svg.axis().scale(yScale);
	}.property("yScale"),

	didInsertElement: function() {
		var xAxis = this.get("xAxis"),
			yAxis = this.get("yAxis");

		var gx = d3.select(".x-axis-group");
		gx.call(xAxis);
		var gy = d3.select(".y-axis-group");
		gy.call(yAxis);

	}
});