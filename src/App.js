import { Route, Switch } from "react-router";
import Navbar from "./components/Navbar/Navbar.component";
import HomePage from "./pages/HomePage.component";
import Products from "./pages/Products.component";
import Services from "./pages/Services.components";
import SignUp from "./pages/SignUp.component";

import "./App.css";
import Footer from "./components/Footer/Footer.component";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/sign-up">
          <SignUp />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
