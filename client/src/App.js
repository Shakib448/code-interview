import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EditedImageList from "./Components/Dashboard/EditedImageList/EditedImageList";
import ImageUpload from "./Components/Dashboard/ImageUpload/ImageUpload";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={EditedImageList} />
          <Route exact path="/image-upload" component={ImageUpload} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
