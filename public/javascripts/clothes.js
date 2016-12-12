var RepeatModule = React.createClass({
   getInitialState: function() {
      return { items: this.props.items || [] }
   },
   componentWillMount: function() {
     console.log("componentWillMount()")
     $.get("http://localhost:3000/getProducts", function( data ) {
         this.setState({ items : data })
         console.log(data,"data is here");
      }.bind(this));
   },
   render: function() {
      var listItems = this.state.items.map(function(item) {
         return (
            <ListItem item={item}/>
         );
      });

      return (
         <div>
             {listItems}
         </div>
      );
   }
});
/* make the items stateless */
var ListItem = function(props) {
     return (
         <div className='brick' key={props.item._id}>
         <div>
             <a target='_blank' href={props.item.productURL}><img src={props.item.imageURL}/></a>
             <p className='itemName'>Short Sleeve Oxford Dress Shirt, White, Large</p>
             <p className='storeName'>Nike Factory Store</p>
             <img className='foundPicture' src='../images/rohit.png'/>
         </div>
         </div>
     );
}
var data = []
ReactDOM.render(<RepeatModule items={data} />, document.getElementById('clothing-content'));