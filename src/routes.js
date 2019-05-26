import React from "react";
import Maruko from "./components/Maruko";
import Sazae from "./components/Sazae";
import Conan from "./components/Conan";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import VideoPlayer from "./components/VideoPlayer";

const routes = [
  {
    path: "/home",
    exact: true,
    page: () => <Home />
  },
  {
    path: "/marukochan",
    exact: true,
    page: ({match}) => <Maruko match={match} />
  },
  {
    path: "/sazaesan",
    exact: true,
    page: ({match}) => <Sazae match={match} />
  },
  {
    path: "/conankun",
    exact: true,
    page: ({match}) => <Conan match={match} />
  },
  {
    path: "/all/:id",
    exact: true,
    page: ({match}) => <VideoPlayer match={match} />
  },
  {
    path: "",
    exact: false,
    page: () => <NotFound />
  }
];

export default routes;
