import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Github from './components/github'
import GlobalStyle from "./GlobalStyle"

function App() {
  return (
    <div className="App">
      <Router>
         <GlobalStyle/>

         <Routes>
           
           <Route path="/github" element={<Github/>}/>
          
         </Routes>
       
      </Router>
      
    </div>
  );
}

export default App;
