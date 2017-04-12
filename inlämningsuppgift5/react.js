var React = require('react');
var ReactDOM = require('react-dom');

class App extends React.Component {
    handlerKeyUp1(event){

}
render(){
return (
    <div className="myform">
    <MyForm handleKeyUp ={this.handlerKeyUp1} />
    <MyForm />
    </div>
);
}
}

/*class SearchResult extends React.Component {
    render(){
        return <p className="searchResult">
			<a href="">JavaScript Tutorial - W3Schools</a> <br/>
			<span className="green">https://www.w3schools.com/js/</span> <br/>
			<span>JavaScript is the programming language of HTML and the Web. JavaScript is easy to learn. This tutorial will teach you JavaScript from basic to advanced.</span>
			</p> ;
    }
}

var result1 = {
    title:
    url:
    description:
}*/

function MyForm(props){
    return <div>
        <input type="text" onkeyup={props.handleKeyUp}/> <br/>
            <span>textmeddelande</span>
        </div>;
}

ReactDOM.render(
//<div className="withReact">Renders med React</div>,
<SearchResult/>,
    document.getElementById('app-root')
)