import Header from './components/Header'
import Footer from './components/Footer'
import Article from './components/Article'
import './App.css'
import Button from './components/ButtonComp/Button'
import Product from './components/Product'
import ConditionalRender from './components/ConditionalRender'
import ListRender from './ListRender'
import UseState from './components/UseState'
import ProToDo from './ProToDo'
import UseEffectComp from './components/UseEffectComp'

import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About'
function App() {
  let product = 'mobile';
  let productPrice = 250;
    const values = [
        {name:'Orange',price:75}, 
        {name:'Banan',price:55}, 
        {name:'Kiwi',price:65}, 
        {name:'Salad',price:100}
    ];
  return (
    <>
      <Router>
      <Header></Header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
      {/* <Header></Header>
      <UseEffectComp></UseEffectComp>
      <ProToDo></ProToDo> */}
      {/* <UseState></UseState>
      <Button></Button>
      <ListRender products={values}></ListRender> */}
      {/* <ConditionalRender></ConditionalRender>

      <ConditionalRender username='Testerenko' isLogin={true}></ConditionalRender>
      <Product name='Laptop' price={500}></Product>
      <Product name={product} price={productPrice}></Product>
      <Product></Product> */}
      {/* 
      <button className='btn'>
        Hello btn
      </button>
      <Article></Article> */}
      <Footer></Footer>
    </>
  )
}

export default App
