var items = [
   {
      "productURL": "https://www.etsy.com/listing/261346209/lit-hat-pink?ref=hp_rv",
      "imageURL":"https://img1.etsystatic.com/111/0/11585309/il_570xN.1032498581_dxse.jpg"
   },
   {
      "imageURL":"http://media4.s-nbcnews.com/j/newscms/2015_41/1252321/151007-jennifer-aniston-mbm_f8d9da133d1c610e6f74da6378714832.nbcnews-fp-1200-800.jpg"
   },
   {
      "imageURL":"https://static01.nyt.com/images/2015/10/11/magazine/11mag-minaj-cover/11mag-minaj-cover-facebookJumbo.jpg"
   },
   {
      "imageURL":"http://media4.s-nbcnews.com/j/newscms/2015_41/1252321/151007-jennifer-aniston-mbm_f8d9da133d1c610e6f74da6378714832.nbcnews-fp-1200-800.jpg"
   },
   {
      "imageURL":"http://www.billboard.com/files/styles/article_main_image/public/media/nicki-minaj-bb38-fea-2015-billboard-650.jpg"
   },
   {
      "imageURL":"http://runthetrap.com/wp-content/uploads/2016/01/chi-kanye-west-honorary-doctorate-art-institute-20150317.jpeg"
   },
   {
      "imageURL":"https://images6.alphacoders.com/307/307794.jpg"
   },
   {
      "imageURL":"https://images6.alphacoders.com/307/307794.jpg"
   },
   {
      "imageURL":"https://images6.alphacoders.com/307/307794.jpg"
   },
   {
      "imageURL":"https://nancyicurtis.files.wordpress.com/2015/08/header3.jpg"
   },
   {
      "imageURL":"http://cosmouk.cdnds.net/15/38/1600x800/landscape-1442576280-ellie-goulding.jpg"
   }
];



/*React Code Below */


var RepeatModule = React.createClass({
   getInitialState: function() {
      return { items: [] }
   },
   render: function() {
      var listItems = this.props.items.map(function(item) {
         return (
            <div className='brick'>
               <img src={item.imageURL}/>
            </div>
         );
      });

      return (
         <div>
            {listItems}
         </div>
      );
   }
});

ReactDOM.render(<RepeatModule items={items} />,             
   document.getElementById('clothing-content'));

