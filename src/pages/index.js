import { BrowserRouter } from 'react-router-dom';

//pages
import Home from './home';
import QrCurl from './qrcurl';

const Pages = () => {
  <Router>
    <Route exact path="/" component={Home} />
    <Route exact path="/qrcurl" component={QrCurl} />
  </Router>;
};

export default Pages;
