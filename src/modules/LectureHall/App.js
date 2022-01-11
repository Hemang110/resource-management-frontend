import { Route, Switch, Redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import AllocatedLH from "./components/AllocatedLH";
import AvailableLH from "./components/AvailableLH";
import ShowAllLH from "./components/ShowAllLH";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import AdminDashboard from "./components/AdminDashboard";
import UpdateEmail from "./components/UpdateEmail";
import DeleteUser from "./components/DeleteUser";
import UpdateMobile from "./components/UpdateMobile";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "true") {
      setIsLoggedIn(true);
    }
    if (localStorage.getItem("isAdmin") === "true") {
      setIsAdmin(true);
    }
  }, []);

  return (
    <div>
      {isLoggedIn && (
        <Navbar
          setIsLoggedIn={setIsLoggedIn}
          setIsAdmin={setIsAdmin}
          isAdmin={isAdmin}
        />
      )}
      <Switch>
        <Route exact path="/lecturehall">
          {isLoggedIn ? (
            <Redirect to="/lecturehall/allocated" />
          ) : (
            <Redirect to="/lecturehall/login" />
          )}
        </Route>
        <Route path="/lecturehall/login">
          {!isLoggedIn ? (
            <Login setIsLoggedIn={setIsLoggedIn} setIsAdmin={setIsAdmin} />
          ) : (
            <Redirect to="/lecturehall/allocated" />
          )}
        </Route>
        <Route path="/lecturehall/all">
          {isLoggedIn ? <ShowAllLH /> : <Redirect to="/lecturehall/login" />}
        </Route>
        <Route path="/lecturehall/available">
          {isLoggedIn ? <AvailableLH /> : <Redirect to="/lecturehall/login" />}
        </Route>
        <Route path="/lecturehall/allocated">
          {isLoggedIn ? <AllocatedLH /> : <Redirect to="/lecturehall/login" />}
        </Route>
        <Route path="/lecturehall/profile">
          {isLoggedIn ? <Profile /> : <Redirect to="/lecturehall/login" />}
        </Route>
        <Route path="/UpdateEmail">
            {isLoggedIn ? <UpdateEmail /> : <Redirect to="/lecturehall/login" />}
        </Route>
        <Route path="/UpdateMobile">
            {isLoggedIn ? <UpdateMobile /> : <Redirect to="/lecturehall/login" />}
        </Route>
        <Route path="/lecturehall/admin/delete-user">
          {isAdmin ? <DeleteUser/> : <Redirect to="/lecturehall/login" />}
        </Route>
        <Route exact path="/lecturehall/admin">
          {isAdmin ? <AdminDashboard /> : <Redirect to="/lecturehall/login" />}
        </Route>
      </Switch>
    </div>
  );
}
