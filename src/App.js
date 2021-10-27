import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Header from './components/Header';
import Footer from './components/Footer';
import ListSoldier from './components/ListSoldier';
import AddSoldier from './components/AddSoldier';
import UpdateSoldier from './components/UpdateSoldier';
import DeleteSoldier from './components/DeleteSoldier';
import ViewSoldier from './components/ViewSoldier';

function App() {
    return (
        <div>
          <Router>
          <Header />
            <div className="container">
              <Switch>
                  <Route path="/" exact component={ListSoldier}></Route>
                  <Route path="/soldiers" component={ListSoldier}></Route>
                  <Route path="/add-soldier" component={AddSoldier}></Route>
                  <Route path="/update-soldier/:id" component={UpdateSoldier}></Route> 
                  <Route path="/delete-soldier/:id" component={DeleteSoldier}></Route> 
                  <Route path="/view-soldier/:id" component={ViewSoldier}></Route> 
                  
              </Switch>
            </div>
            <Footer />
            
          </Router>
        </div>
  );
}

export default App;