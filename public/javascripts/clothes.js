var RepeatModule = React.createClass({
    getInitialState: function() {
      return { items: [] }
    },
    componentWillMount: function() {
        $.get("http://localhost:3000/getProducts", function( data ) {
           ReactDOM.render(<RepeatModule items={data} />,
           this.setState({ items : data }),
           document.getElementById('clothing-content'));
        });
    },
    render: function() {
        var listItems = this.state.items.map(function(item) {
           return (
               <div className='brick'>
               <div>
                   <a target='_blank' href={item.productURL}><img src={item.imageURL}/></a>
                   <p className='itemName'>Short Sleeve Oxford Dress Shirt, White, Large</p>
                   <p className='storeName'>Nike Factory Store</p>
                   <img className='foundPicture' src='../images/rohit.png'/>
               </div>
               </div>
           );
        });
    }
});