import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import store from './utils/appStore';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import WatchPage from './components/WatchPage';


function App() {
  return (
    <Provider store={store}>
      
      
      <BrowserRouter>
       <Header/>
         <Routes>     
            <Route path="/" element={<Body/>}/>
            <Route path="/watch" element={<WatchPage/>}/>
         </Routes>
      </BrowserRouter>
    
    </Provider>
  );
}

export default App;
