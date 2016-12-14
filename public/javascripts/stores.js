var RepeatModule = React.createClass({
   getInitialState: function() {
      return { items: this.props.items || [] }
   },
   componentWillMount: function() {
     console.log("componentWillMount()")
     this.setState({ items : data })
     console.log(data,"data is here");
   },
   render: function() {
      var listItems = this.state.items.map(function(item) {
         return (
            <ListItem item={item}/>
         );
      });

      return (
         <div className="flex-container">
             {listItems}
         </div>
      );
   }
});
/* make the items stateless */
var ListItem = function(props) {
	var backgroundImage = {
	  backgroundImage: 'url(' + props.item.pictureURL + ')'
	};
     return (
         <div className="block-grid-item">
		  <a href={props.item.storeURL} className="display-block card text-gray-darker">
		    <div style={backgroundImage} className="card-img-wrap m-xs-0 placeholder placeholder-landscape">
		    </div>
		    <div className="card-meta">
		      <div className="vesta-hp-gifts-card-title text-gray-darker">{props.item.storeName}</div>
		    </div>
		  </a>
		</div>
     );
}
var data = [
	{	
		"storeName": "Adidas",
		"pictureURL": "http://www.rohittigga.com/img/realfriends.jpg",
		"storeURL": "http://www.rohittigga.com/img/realfriends.jpg"
	},
	{	
		"storeName": "Adidas",
		"pictureURL": "http://www.rohittigga.com/img/realfriends.jpg",
		"storeURL": "http://www.rohittigga.com/img/realfriends.jpg"
	},
	{	
		"storeName": "Adidas",
		"pictureURL": "http://www.rohittigga.com/img/realfriends.jpg",
		"storeURL": "http://www.rohittigga.com/img/realfriends.jpg"
	},
	{	
		"storeName": "Adidas",
		"pictureURL": "http://www.rohittigga.com/img/realfriends.jpg",
		"storeURL": "http://www.rohittigga.com/img/realfriends.jpg"
	},
	{	
		"storeName": "Adidas",
		"pictureURL": "http://www.rohittigga.com/img/realfriends.jpg",
		"storeURL": "http://www.rohittigga.com/img/realfriends.jpg"
	}
];
ReactDOM.render(<RepeatModule items={data} />, document.getElementById('stores-content'));