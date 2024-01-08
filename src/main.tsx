import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom"
import { Index } from './component/routes/AllRoutes.tsx'
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Store } from './Global/Store.tsx'
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Provider store={Store}>
        <QueryClientProvider client={queryClient}>
        <RouterProvider router={Index}/>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </Provider>
   
  </React.StrictMode>,
)
