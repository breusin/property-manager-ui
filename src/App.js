import PropertyManager from './components/propertyManager/PropertyManager'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import './App.css'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

function App() {

  return (
    <div>
      <Header/>
      <PropertyManager/>
      <Footer/>
    </div>
  );
}


export default App;
