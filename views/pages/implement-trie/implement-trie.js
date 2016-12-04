var ReactDOM = require('react-dom');
var React = require('react');
var Trie = require('../../../components/Trie');

var callback = function() {
	$('.orgchart').remove();
	$('#chart-container').orgchart({
		'data': trie.root,
		'depth': trie.depth()
	});
};

var trie = new Trie();

var Input = React.createClass({
	getInitialState: function() {
		return {
			value: 'trie tree'
		};
	},
	handleSubmit: function(event) {
		event.preventDefault();
		trie.addWords(this.state.value.split(" "), callback);
	},
	handleChange: function(event) {
		this.setState({
			value: event.target.value
		});
	},
	render: function() {
		return (
			React.createElement('form', {
					className: 'form-inline',
					onSubmit: this.handleSubmit
				},
				React.createElement('input', {
					type: 'text',
					className: 'form-control',
					placeholder: this.state.value,
					onChange: this.handleChange
				}),
				React.createElement('span', {
						createClass: 'input-group-btn'
					},
					React.createElement('button', {
						className: 'btn btn-default',
						type: 'submit'
					}, 'Build Trie')
				)
			)
		);
	}
});

ReactDOM.render( < Input / > , document.getElementById('input'));