'use strict';

import React from 'react';
import Html from '../components/Html';
import createLocation from 'history/lib/createLocation';
import DocumentTitle from 'react-document-title';
import routes from 'app/router/routes';
import {dehydrate} from 'drator';
import {RoutingContext, match} from 'react-router';
import store from 'app/store';
import {Provider} from 'react-redux';

export default function isomorpher(req, res) {

  let location = createLocation(req.url);

  match({routes, location}, (error, redirectLocation, renderProps) => {


    if (redirectLocation) {
      res.redirect(301, redirectLocation.pathname + redirectLocation.search);
      return;
    }

    if (error) {
      res.send(500, error.message);
      return;
    }

    if (renderProps == null) {
      res.send(404, 'Not found');
      return;
    }

    const wrappers = renderProps.components;
    const withFetch = wrappers.filter((w) => w.WrappedComponent && w.WrappedComponent.fetchTransitionData);
    const promises = withFetch
                      .map((w) => w.WrappedComponent)
                      .map((Component) => Component.fetchTransitionData());

    Promise.all(promises).then(()=>{
      res.send(
        React.renderToStaticMarkup(
          React.createFactory(Html)({
            markup: React.renderToString(
              <Provider store={store}>
                {() => <RoutingContext {...renderProps} />}
              </Provider>
            ),
            state: dehydrate('App', store.getState()),
            title: DocumentTitle.rewind()
          })
        )
      );
    });

  });

}



