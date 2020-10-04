import React from 'react';
import Header from "./Components/headerComponent/header";
import Footer from "./Components/footerComponent/footer";
import Background from "./Components/backgroundComponent/background";
import Homepage from "./Components/pages/homepage";
import Blog from "./Components/pages/blog";
import Projects from "./Components/pages/Projects";
import Blog1 from "./Components/pages/blog_pages/blog_1"
import Blog2 from "./Components/pages/blog_pages/blog2"
import{
	BrowserRouter as Router,
	Route,
	Link,
  HashRouter
}from 'react-router-dom';

function App() {
  return (
  	<HashRouter>
    <div className="App">
    <Footer />
    <Header />


    <Route exact path='/' component={Homepage} />
    <Route exact path='/Blog' component={Blog} />
    <Route exact path='/Projects' component={Projects} />
    <Route exact path='/Blog1' component={Blog1} />
    <Route exact path='/Blog2' component={Blog2} />


    <Background/>


    </div>
    </HashRouter>
  );
}

export default App;