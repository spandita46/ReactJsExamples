import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import StreamCreate from "../streams/StreamCreate";
import StreamDelete from "../streams/StreamDelete";
import StreamEdit from "../streams/StreamEdit";
import StreamShow from "../streams/StreamShow";
import StreamList from "../streams/StreamList";
import Header from "../header/Header";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/show" exact component={StreamShow} />
          <Route path="/streams/edit" exact component={StreamEdit} />
          <Route path="/streams/new" exact render={() => <StreamCreate />} />
          <Route path="/streams/delete" exact component={StreamDelete} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
