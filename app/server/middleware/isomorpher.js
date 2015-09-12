'use strict';

import React from 'react';
import Html from '../components/Html';
import createLocation from 'history/lib/createLocation';
import DocumentTitle from 'react-document-title';
import routes from '../../shared/router/routes';
import {RoutingContext, match} from 'react-router';
import store from '../../shared/store';
import {fetchFollowers} from '../../shared/actions';
import {Provider} from 'react-redux';


function renderPage(props){

  return
}

export default function isomorpher(req, res) {

  let location = createLocation(req.url);

  match({routes, location}, (error, redirectLocation, renderProps) => {

    if (redirectLocation) {
      res.redirect(301, redirectLocation.pathname + redirectLocation.search);
    } else if (error) {
      res.send(500, error.message);
    } else if (renderProps == null) {
      res.send(404, 'Not found');
    } else {
      const model = (
        <Provider store={store}>
          {() => <RoutingContext {...renderProps} />}
        </Provider>
      );
      const unsubscribe = store.subscribe(() => {
        if(store.getState().isLoading) return;
        setTimeout(function(){
          res.send(
            React.renderToStaticMarkup(
              React.createFactory(Html)({
                markup:  React.renderToString(model),
                title: DocumentTitle.rewind()
              })
            )
          );
        }, 100);
        unsubscribe();
      });

      // TODO: This sucks we have to know about the page event that needs to be launched
      // store.dispatch(fetchFollowers());
      React.renderToString(model);

    }
  });

}



