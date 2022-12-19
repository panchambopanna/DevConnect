import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "../auth/Register";
import Login from "../auth/Login";
import Alert from "../layout/Alert";
import Dashboard from "../dashboard/Dashboard";
import Profiles from "../profiles/Profiles";
import PrivateRoute from "../routing/PrivateRoute";
import CreateProfile from "../profile-form/CreateProfile";
import EditProfile from "../profile-form/EditProfile";
import AddExperience from "../profile-form/AddExperience";
import AddEducation from "../profile-form/AddEducation";
import Profile from "../profile/Profile";
import Posts from "../posts/Posts";
import Post from "../post/Post";
import PageNotFound from "../layout/PageNotFound";

const AllRoute = () => (
  <section className="container">
    <Alert />
    <Routes>
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/profile" element={<Profiles />} />
      <Route exact path="/profile/:id" element={<Profile />} />
      <Route element={<PrivateRoute />}>
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/create-profile" element={<CreateProfile />} />
        <Route exact path="/edit-profile" element={<EditProfile />} />
        <Route exact path="/add-experience" element={<AddExperience />} />
        <Route exact path="/add-education" element={<AddEducation />} />
        <Route exact path="/posts" element={<Posts />} />
        <Route exact path="/posts/:id" element={<Post />} />
      </Route>
      <Route exact path="*" element={<PageNotFound />} />
    </Routes>
  </section>
);

export default AllRoute;
