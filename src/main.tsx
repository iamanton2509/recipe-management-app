import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import {Provider} from 'react-redux';
import store from './store/store.ts';
import './firebase';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
        <App />
    </Provider>
)