import React from 'react';
import { Provider } from 'react-redux';
import store from './store/index';
import { createBrowserHistory  } from 'history';
import { RouterComponent } from './router';
import { GlobalStyle } from './globalStyle';

function App() {
  const history = createBrowserHistory();
  return (
    <Provider store={store}>
      <GlobalStyle />
      <RouterComponent history={history} />
    </Provider>
  );
}

export default App;
