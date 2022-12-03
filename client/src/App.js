import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Alert from "./components/layout/Alert";
import Dashboard from "./components/dashboard/Dashboard";
import Profiles from "./components/profiles/Profiles";
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";
import PrivateRoute from "./components/routing/PrivateRoute";
import CreateProfile from "./components/profile-form/CreateProfile";
import EditProfile from "./components/profile-form/EditProfile";
import AddExperience from "./components/profile-form/AddExperience";
import AddEducation from "./components/profile-form/AddEducation";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Landing />} />
          </Routes>
          <section className="container">
            <Alert />
            <Routes>
              <Route exact path="/register" element={<Register />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/profile" element={<Profiles />} />
              <Route element={<PrivateRoute />}>
                <Route exact path="/dashboard" element={<Dashboard />} />
                <Route
                  exact
                  path="/create-profile"
                  element={<CreateProfile />}
                />
                <Route exact path="/edit-profile" element={<EditProfile />} />
                <Route
                  exact
                  path="/add-experience"
                  element={<AddExperience />}
                />
                <Route exact path="/add-education" element={<AddEducation />} />
              </Route>
            </Routes>
          </section>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
