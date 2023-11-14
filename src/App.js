import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';
import {
  Route,
  Routes
} from "react-router-dom";


const App =()=>{
const apiKey=process.env.REACT_APP_NEWS_KEY
 const pageSize=12

    return(
      <div>
        <NavBar/>
        <Routes>
          <Route path='/' element={<News key="general" pageSize={pageSize} apiKey={apiKey} country='in' category='general' />} >       </Route>
          <Route path='/business'  element={<News key="business" pageSize={pageSize} apiKey={apiKey} country='in' category='business' />}></Route>
          <Route path='/entertainment'  element={<News key="entertainment" pageSize={pageSize} apiKey={apiKey} country='in' category='entertainment' />}></Route>
          <Route path='/general'  element={<News key="general" pageSize={pageSize} apiKey={apiKey} country='in' category='general' />}></Route>
          <Route path='/health'  element={<News key="health" pageSize={pageSize} apiKey={apiKey} country='in' category='health' />}></Route>
          <Route path='/science' element={<News  key="science" pageSize={pageSize} apiKey={apiKey} country='in' category='science' />}  > </Route>
          <Route path='/sports' element={<News  key="sports" pageSize={pageSize} apiKey={apiKey} country='in' category='sports' />}  > </Route>
          <Route path='/technology'  element={<News key="technology" pageSize={pageSize} apiKey={apiKey} country='in' category='technology' />}></Route>
          
        </Routes>
      </div>
    )
  
}

export default App;

