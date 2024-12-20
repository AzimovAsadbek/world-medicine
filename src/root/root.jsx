import React, { useEffect } from "react";
import { MainContainer } from "./style";

import Router from "../router/router";
import "./fonts.css";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import AddMeneger from "../components/AddMeneger";
import Profile from "../components/Profile";
import Analiktika from "../pages/analiktika/analiktika";
import Reports from "../components/Reports";
import ChildRoot from "../components/Asadbek/root";

const Root = () => {
  const nav = useNavigate();

  useEffect(() => {
    const token = Cookies.get("access_token");
    console.log("11212");

    if (token) {
      const role = jwtDecode(token)?.role;
      Cookies.set("role", role);
      nav("/");
    }
  }, []);

  // return <Router />;
  // return <AddMeneger />;
  // return <Profile />;
  // return <Reports />;
  return <ChildRoot />;
};

export default Root;
