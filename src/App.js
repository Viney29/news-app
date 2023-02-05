import './App.css';
import Header from './components/Header';
import News from './components/News';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from './components/Footer';

const App = ()=> {
  const apiKey = process.env.REACT_APP_NEWS_API
  const pageSize = 5;
  return (
    <Router>
    <div className="newsApp">
      <Header/>
        <Routes>
          <Route exact path="/" element={<News key="home" apiKey={apiKey} pageSize={pageSize} country="in" category="general" />}/>
          <Route exact path="/business" element={<News key="business" apiKey={apiKey} pageSize={pageSize} country="in" category="business" />}/>
          <Route exact path="/entertainment" element={<News key="entertainment" apiKey={apiKey} pageSize={pageSize} country="in" category="entertainment" />}/>
          <Route exact path="/general" element={<News key="general" apiKey={apiKey} pageSize={pageSize} country="in" category="general" />}/>
          <Route exact path="/health" element={<News key="health" apiKey={apiKey} pageSize={pageSize} country="in" category="health" />}/>
          <Route exact path="/science" element={<News key="science" apiKey={apiKey} pageSize={pageSize} country="in" category="science" />}/>
          <Route exact path="/sports" element={<News key="sports" apiKey={apiKey} pageSize={pageSize} country="in" category="sports" />}/>
          <Route exact path="/technology" element={<News key="technology" apiKey={apiKey} pageSize={pageSize} country="in" category="technology" />}/>
        </Routes>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;