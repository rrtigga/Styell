var RepeatModule = React.createClass({
	getInitialState: function() {
    	return { items: this.props.items || [] }
   },
   componentWillMount: function() {
     console.log("componentWillMount()")
     this.setState({ items : data })
    },
   handleClick: function (e, item) {
    this.setState({afterClick: 'afterClick'});
    console.log("afterClick");
   },
   render: function() {
      var listItems = this.state.items.map((item, index) => {
         return (
            <ListItem key={index} handleClick={this.handleClick} item={item} />
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
            <div onClick={props.handleClick} style={backgroundImage} className="this.state.afterClick card-img-wrap m-xs-0 placeholder placeholder-landscape">
            
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
		"storeURL": "../profile/adidas"
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
		"storeName": "Etsy",
		"pictureURL": "../images/stores/etsy.jpeg",
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
		"storeName": "RedBubble",
		"pictureURL": "../images/stores/redbubble.jpg",
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


