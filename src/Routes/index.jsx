import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { useState } from "react";
import { UserContext, InitalUserContext } from "../Context/User";
import Header from "../Components/Header";
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/Login";
import NotFound from "../Pages/NotFound";

const Routes = () => {
    const [user, setUser] = useState(InitalUserContext)

    return (
      <Router>
        <UserContext.Provider value={[user, setUser]}>
            <Header />
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route exact path="/dashboard" component={Dashboard}/>
                <Route component={NotFound}/>
            </Switch>
        </UserContext.Provider>
      </Router>
    );
  }
  
  export default Routes;