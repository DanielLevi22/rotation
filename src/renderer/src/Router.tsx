import { Route } from 'react-router-dom'
import { Blank } from './pages/blank'
import { Document } from './pages/document'
import { Router } from "../../lib/electron-router-dom"
import { DefaultLayout } from './pages/layouts/default'

export function AppRoutes() {
  return (
    <Router
      main={
        <Route path='/' element={<DefaultLayout />}>
          <Route path="/" element={<Blank />} />
          <Route path="/document" element={<Document />} />
        </Route>
      }
    />
  )
}
