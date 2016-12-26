var RepeatModule = React.createClass({
   getInitialState: function() {
      return { items: this.props.items || [] }
   },
   componentWillMount: function() {
     console.log("componentWillMount()")
     this.setState({ items : data })
     console.log(data,"data is here");
   },
   handleClick: function (event, item) {
		event.preventDefault();
		window.newActiveItems = this.state.activeItems.slice();
		var index = window.newActiveItems.indexOf(item);
		if(index !== -1){
         //check if array is empty, if so set display:none to the topic-bar
         if(newActiveItems.length <= 3){
            document.getElementById("topic-progress-bar").style.transform="translateY(60px)";
         }
			window.newActiveItems.splice(index, 1);
		}
		else {
         //check if array has more than 3 items
         //if more than 3 items, then show the topic bar
         if(newActiveItems.length >= 2){
            document.getElementById("topic-progress-bar").style.transform="translateY(0px)";
         }
			window.newActiveItems.push(item);
		}
		console.log(window.newActiveItems);
		this.setState({ activeItems: window.newActiveItems});

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
		  <a className="display-block card text-gray-darker">
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
		"pictureURL": "../images/stores/adidas.jpg",
		"storeURL": "http://www.rohittigga.com/img/realfriends.jpg"
	},
	{	
		"storeName": "American Eagle",
		"pictureURL": "../images/stores/americaneagle.jpg",
		"storeURL": "http://www.rohittigga.com/img/realfriends.jpg"
	},
	{	
		"storeName": "ASOS",
		"pictureURL": "../images/stores/asos.jpg",
		"storeURL": "http://www.rohittigga.com/img/realfriends.jpg"
	},
	{	
		"storeName": "H&M",
		"pictureURL": "../images/stores/h&m.jpeg",
		"storeURL": "http://www.rohittigga.com/img/realfriends.jpg"
	},
	{	
		"storeName": "Nike",
		"pictureURL": "../images/stores/nike.jpg",
		"storeURL": "http://www.rohittigga.com/img/realfriends.jpg"
	},
	{	
		"storeName": "Northface",
		"pictureURL": "../images/stores/northface.jpeg",
		"storeURL": "http://www.rohittigga.com/img/realfriends.jpg"
	},
	{	
		"storeName": "Obey",
		"pictureURL": "../images/stores/obey.jpg",
		"storeURL": "http://www.rohittigga.com/img/realfriends.jpg"
	},
	{	
		"storeName": "Pac Sun",
		"pictureURL": "../images/stores/pacsun.jpg",
		"storeURL": "http://www.rohittigga.com/img/realfriends.jpg"
	},
	{	
		"storeName": "Stussy",
		"pictureURL": "../images/stores/stussy.jpeg",
		"storeURL": "http://www.rohittigga.com/img/realfriends.jpg"
	},
	{	
		"storeName": "Super Dry",
		"pictureURL": "../images/stores/superdry.gif",
		"storeURL": "http://www.rohittigga.com/img/realfriends.jpg"
	},
	{	
		"storeName": "Supreme",
		"pictureURL": "../images/stores/supreme.jpg",
		"storeURL": "http://www.rohittigga.com/img/realfriends.jpg"
	},
	{	
		"storeName": "Uniqlo",
		"pictureURL": "../images/stores/uniqlo.jpg",
		"storeURL": "http://www.rohittigga.com/img/realfriends.jpg"
	}
];
ReactDOM.render(<RepeatModule items={data} />, document.getElementById('stores-content'));