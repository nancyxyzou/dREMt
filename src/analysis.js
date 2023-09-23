import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


function analysis() {
    return (
      <Router>
        <nav>
          <ul>
            <li>
              
              <LinkContainer to='/apply'>
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
            </LinkContainer>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
  
        <Route path="/" exact component={App} />
        <Route path="/analysis" component={analysis} />
      </Router>
    );
  }
  
  export default analysis;