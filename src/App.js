import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
import Body from './components/body/body';
import Front from './components/front/front';
import Farm from './components/farm to fork/farm';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import Card from './components/card/card';
import data from './data';

import bootstrap from 'bootstrap';

function App() {
  const cards = data.map(item => {
    return (
        <Card
            {...item}
            
        />
    )
})        
  return (
    <div>
      <Navbar/>
      <Body/>
      <Front/>
      <Farm/>
      <Contact/>
      <div style={{marginBottom:'5%'}}>
        <div className="border1"></div>
        <div className="text1"> Testimonial</div>
      </div>
      
      <section className="cards-list">
                {cards}
      </section>
      
      <Footer/>
      

    </div>
  );
};

export default App;
