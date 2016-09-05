var React = require("react");
var ListItem = require("./ListItem.jsx");

var ingredients = [{"id":1,"name":"Hasmukh Makwana"}, {"id":2,"name":"Sumitra Makwana"}, {"id":3,"name":"Nidhi Makwana"}];

var List = React.createClass({
    render : function() {
      var listitems = ingredients.map(function(item){
        return <ListItem key={item.id} ingredient={item.name} />
      });

      return (<ul>{listitems}</ul>);
    }
});

module.exports = List;
