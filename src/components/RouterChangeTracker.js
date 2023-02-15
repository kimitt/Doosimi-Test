import React from 'react';
import { withRouter } from 'react-router-dom';
import ReactGA4 from 'react-ga4';
import gtag from 'react-ga4/src/gtag';
const RouteChangeTracker = ({ history }) => {
  history.listen((location, action) => {
    ReactGA4.send({
      hitType: 'first_visit',
      path: location.pathname,
      location: location.pathname,
      title: location.pathname,
    }); //new
    //ReactGA4.send({hitType: "pageview", path: location.pathname, location: location.pathname, title: location.pathname, page_referrer: "(self)"});
  });

  return <div></div>;
};

export default withRouter(RouteChangeTracker);
