import React, { useEffect, useState } from "react";
import { navigate } from "gatsby";
import { Router } from "@react/router";
import IdentityModal from "react-netlify-identity-widget";
import Layout from "../components/layout";
import Profile from "../components/profile";
import PrivateRoute from "../components/private-route";
import RouteBase from "../components/route-base";
import RouteSecret from "../components/route-secret";
import RouteLogin from "../components/route-login ";
import { navigate } from "gatsby";
import "react-netlify-identity-widget/styles.css";

const Dashboard = () => {
  const [isVisible, setVisibility] = useState(false);

  useEffect(({ location }) => {
    if (location.pathname.match(/^\/dashboard\/?$/)) {
      navigate("/dashboard/login", { replace: true });
    }
  }, []);

  const showModal = () => setVisibility(true);

  return (
    <Layout>
      <Profile showModal={showModal} />
      <Router>
        <PrivateRoute path="/dashboard/base" component={RouteBase} />
        <PrivateRoute path="/dashboard/secret" component={RouteSecret} />
        <RouteLogin path="/dashboard/login" showModal={showModal} />
      </Router>
      <IdentityModal
        showDialog={isVisible}
        onCloseDialog={() => setVisibility(false)}
      ></IdentityModal>
    </Layout>
  );
};

export default Dashboard;
