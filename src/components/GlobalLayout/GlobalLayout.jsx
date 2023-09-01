import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import { selectAuth } from "redux/auth/auth-selector";

export default function GlobalLayout() {
  const { isLoggedIn } = useSelector(selectAuth);

  return (
    <>
      {isLoggedIn ? <UserSideMenu /> : null}

      <Header />

      <main style={{ padding: "20px 0" }}>
        <div className="container">
          <Outlet />
        </div>
      </main>
    </>
  );
}
