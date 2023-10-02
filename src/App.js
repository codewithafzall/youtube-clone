import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import store from './utils/appStore';


function App() {
  return (
    <Provider store={store}>
      
      <Header/>
      <Body/>
    
    </Provider>
  );
}

export default App;
