import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import HomePage from './pages/HomePage.tsx'
import ProductPage from './pages/ProductPage.tsx'

import { HelmetProvider } from 'react-helmet-async'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { StoreProvider } from './Store.tsx'
import CartPage from './pages/CartPage.tsx'
import SigninPage from './pages/SigninPage.tsx'
import SignupPage from './pages/SignupPage.tsx'
import ShippingAdressPage from './pages/ShippingAddressPage.tsx'
import PaymentMethodPage from './pages/PaymentMethodPage.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} element={<HomePage />} />
      <Route path="product/:slug" element={<ProductPage />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="signin" element={<SigninPage />} />
      <Route path="signup" element={<SignupPage />} />
      <Route path="shipping" element={<ShippingAdressPage />} />
      <Route path="payment" element={<PaymentMethodPage />} />

      {/* ... etc. */}
    </Route>
  )
)

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreProvider>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </HelmetProvider>
    </StoreProvider>
  </React.StrictMode>
)
