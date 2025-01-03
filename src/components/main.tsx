import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import  {Provider} from 'react-redux'
import store from './redux/store.tsx'

import './index.css'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
     <App />
  </Provider>
   
  ,
)