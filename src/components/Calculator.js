

class CalculatorInput extends React.Component {
render=()=> <input type="number">{this.props.value}</input>

}

class CalculatorButton extends React.Component {

render=()=> <button class={this.props.class} id={this.props.id}>{this.props.value}</button>

}

class Calculator extends React.Component{
constructor (props) {
super(props);
}

render () {


}

}