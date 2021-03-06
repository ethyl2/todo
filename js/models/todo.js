/*global Backbone */
var app = app || {};

(function () {
	'use strict';

	// Todo Model
	// ----------

	// Our basic **Todo** model has `title`, `order`, and `completed` attributes.
	// We now also have `priority` and `timeSensitive` attributes.
	app.Todo = Backbone.Model.extend({
		// Default attributes for the todo
		// and ensure that each todo created has `title`, `priority`,
		// `timeSensitive` and `completed` keys.
		defaults: {
			title: '',
			completed: false,
			priority: false,
			timeSensitive: false
		},

		// Toggle the 'priority' state of this todo item.

		togglePriority: function () {
			this.save({
				priority: !this.get('priority')
			});
		},

		// Toggle the 'time-sensitive' state of this todo item.

		toggleTimeSensitive: function () {
			this.save({
				timeSensitive: !this.get('timeSensitive')
			});
		},

		// Toggle the `completed` state of this todo item.
		toggle: function () {
			this.save({
				completed: !this.get('completed')
			});
		}
	});
})();
