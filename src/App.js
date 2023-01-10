import logo from './logo.svg';
import './app.css';
import Topbar from './component/topbar/top';
import Sidebar from './component/sidebar/sidebar';


function App() {
  return (
    <div className="App">
      <Topbar/>
     <div className='container'>
      <Sidebar/>
    
     </div>
    
 
    </div>
  );
}

export default App;
