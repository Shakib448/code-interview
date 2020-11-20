import { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EditedImageList from "./Components/Dashboard/EditedImageList/EditedImageList";
import ImageUpload from "./Components/Dashboard/ImageUpload/ImageUpload";
import UploadResult from "./Components/Home/UploadResult/UploadResult";
import GoogleLogin from "./Components/GoogleLogin/GoogleLogin";
import Home from "./Components/Home/Home/Home";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import ImageUploadList from "./Components/Dashboard/ImageUploadList/ImageUploadList";
import AddAdmin from "./Components/Dashboard/AddAdmin/AddAdmin";

export const userInformationData = createContext();

function App() {
  const [userData, setUserData] = useState({});
  const [isAdmin, setAdmin] = useState(false);
  return (
    <>
      <userInformationData.Provider
        value={[userData, setUserData, isAdmin, setAdmin]}
      >
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/google-login" component={GoogleLogin} />
            <PrivateRoute exact path="/edited-image-list">
              <EditedImageList />
            </PrivateRoute>
            <PrivateRoute exact path="/admin-upload-task">
              <ImageUploadList />
            </PrivateRoute>
            <PrivateRoute exact path="/upload-result">
              <UploadResult />
            </PrivateRoute>
            <PrivateRoute exact path="/image-upload">
              <ImageUpload />
            </PrivateRoute>
            <PrivateRoute exact path="/add-admin">
              <AddAdmin />
            </PrivateRoute>
          </Switch>
        </Router>
      </userInformationData.Provider>
    </>
  );
}

export default App;
