import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ImageUpload from "./Components/Dashboard/ImageUpload/ImageUpload";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={ImageUpload} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
