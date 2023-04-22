import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { useState } from 'react';


function App() {

  const phoneData=[
    {
      image:'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/k/o/m/f21s-pro-5g-cph2455-oppo-original-imaggf5zsq6q29jz.jpeg?q=70',
      Name:'OPPO F21s Pro 5G',
      price:'$ 2000',
      rating:'4.5'
    },
    
    {
      image:'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=70',
      Name:'APPLE iPhone 14 ',
      price:'$ 5000',
      rating:'5'
    },
    {
      image:'https://rukminim1.flixcart.com/image/312/312/l2jcccw0/mobile/i/p/o/-original-imagdu8j9vxscfdh.jpeg?q=70',
      Name:'Poco C50',
      price:'$ 1000',
      rating:'4'
    },
   
    {
      image:'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/b/f/m/-original-imagna3ezkdusyrz.jpeg?q=70',
      Name:'vivo V27 5G',
      price:'$ 2000',
      rating:'4'
    },
    {
      image:'https://rukminim1.flixcart.com/image/612/612/xif0q/mobile/l/6/9/-original-imaggkzydg7zbrys.jpeg?q=70',
      Name:'OPPO A17',
      price:'$ 1000',
      rating:'4'
    },
    
    {
      image:'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/l/j/q/-original-imagkgshx9kfayxq.jpeg?q=70',
      Name:'OnePlus 10 Pro 5G',
      price:'$ 999',
      rating:'4.5'
    },
    {
      image:'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/p/g/k/-original-imageyuud3bey9hh.jpeg?q=70',
      Name:'REDMI 10 Power',
      price:'$ 800',
      rating:'4'
    },
    {
      image:'https://rukminim1.flixcart.com/image/312/312/ktketu80/mobile/6/n/d/iphone-13-mlpg3hn-a-apple-original-imag6vpyghayhhrh.jpeg?q=70',
      Name:'APPLE iPhone 13',
      price:'$ 6000',
      rating:'4.5'
    },
    
    {
      image:'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/4/q/v/-original-imagz3curry7jhsy.jpeg?q=70',
      Name:'Infinix HOT 30i',
      price:'$ 500',
      rating:'4'
    },
    {
      image:'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/x/x/s/-original-imagfhu6dcpdnqkh.jpeg?q=70',
      Name:'SAMSUNG Galaxy F04 ',
      price:'$ 1200',
      rating:'4'
    },
    
    {
      image:'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/y/e/n/-original-imagg84bgeyyhert.jpeg?q=70',
      Name:'IQOO 9 5G ',
      price:'$ 1300',
      rating:'3.5'
    },
    {
      image:'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/r/d/p/-original-imaggcerdxgpxyh3.jpeg?q=70',
      Name:'vivo Y16 ',
      price:'$ 500',
      rating:'4'
    },
    
  ]

  const [count, setCount]=useState(0)
  return (
    <div className="App">
      <div className='cart-value'>
      
        <Badge pg='success'>
        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
         Cart {count}
        </Badge>
      </div>
      <h2>Mobile Frenzy</h2>

      <div className='cart-container'>
        {
         phoneData.map((product,index)=>(
         <Product
         key={index}
         prod={product}
         count={count}
         setCount={setCount}
         />
         )) 
        }

      </div>
    </div>
  );
}

export default App;

function Product({prod,count,setCount}){
  const [show, setShow]=useState(false)

  function addtoCart(){
    setCount(count+1);
    setShow(!show)
  }
  function removeCart(){
    setCount(count-1);
    setShow(!show)
  }
  return (
    <div className='box'>
       <Card style={{ width: '18rem' }}>
       <Card.Img variant="top" src={prod.image} />
       <Card.Body>
        <Card.Title>{prod.Name}</Card.Title>
        <Card.Text>{prod.price}</Card.Text>
        <Card.Text>&#8902;&#8902;&#8902;&#8902;&#8902;{prod.rating}</Card.Text>

        {/* write the cart function here */}
        {!show?
        <Button variant="primary"
        onClick={ addtoCart}
        >Add to Cart</Button>

        :<Button variant="danger"
        onClick={removeCart}
        >Remove Cart</Button>

      }
       </Card.Body>
    </Card>

    </div>
  )
}
