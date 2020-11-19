import { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EditedImageList from "./Components/Dashboard/EditedImageList/EditedImageList";
import ImageUpload from "./Components/Dashboard/ImageUpload/ImageUpload";
import GoogleLogin from "./Components/GoogleLogin/GoogleLogin";
import Home from "./Components/Home/Home/Home";
import UploadTask from "./Components/Home/UploadTask/UploadTask";

export const userInformationData = createContext();

function App() {
  const [userData, setUserData] = useState({});
  return (
    <>
      <userInformationData.Provider value={[userData, setUserData]}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/google-login" component={GoogleLogin} />
            <Route
              exact
              path="/edited-image-list"
              component={EditedImageList}
            />
            <Route exact path="/upload-task" component={UploadTask} />
            <Route exact path="/image-upload" component={ImageUpload} />
          </Switch>
        </Router>
      </userInformationData.Provider>
    </>
  );
}

export default App;
