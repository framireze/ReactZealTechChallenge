
import { AppRouter } from 'components/routers/AppRouter';
import { Provider } from 'react-redux';
import { store } from './store/store';
const App = () => (
  <Provider store={store}>
    <AppRouter />    
  </Provider>
)

export default App
