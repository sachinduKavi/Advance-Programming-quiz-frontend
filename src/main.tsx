import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Toaster } from 'react-hot-toast'
import  {Provider} from 'react-redux'
import store from './redux/store.tsx'

import './index.css'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <Toaster/>
     <App />
  </Provider>
   
  ,
)
