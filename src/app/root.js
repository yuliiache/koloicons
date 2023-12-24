import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {ResourcesProvider} from '@kolo/framework/resourcesProvider/resourcesProvider';

import store from './store';

export const Root = ({children}) => {
  return (
    <Provider store={store}>
      <ResourcesProvider>
        <BrowserRouter>{children}</BrowserRouter>
      </ResourcesProvider>
    </Provider>
  );
};
