// TODO
var App = () => (
<div>
<h2>Grocery List</h2>
		<GroceryListItem groceryItem={['Kale', 'Cheese']} />
</div>
);


class GroceryListItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			done: false
		}
	}

	moveOverItem() {
		this.setState({
			done: !this.state.done
		});
	}

	render() {

		var style = {
			fontWeight: this.state.done ? 'bold' : 'none'
		};

		return (
				<ul>
					<li style={style} onMouseOver={this.moveOverItem.bind(this)} onMouseOut={this.moveOverItem.bind(this)}>{this.props.groceryItem[0]}</li>
					<li style={style} onMouseOver={this.moveOverItem.bind(this)} onMouseOut={this.moveOverItem.bind(this)}>{this.props.groceryItem[1]}</li>
				</ul>
		)
	}

}

var GroceryList = (props) => {
	<ul>
		{props.groceryItem.map(groceryItem => 
				<GroceryListItem groceryItem = {groceryItem}/>
			)}
	</ul>
}

ReactDOM.render(<App />, document.getElementById('app'));
