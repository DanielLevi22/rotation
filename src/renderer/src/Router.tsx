import { Route } from 'react-router-dom'
import { Blank } from './pages/blank'
import { Document } from './pages/document'
import { Router } from "../../lib/electron-router-dom"

export function AppRoutes() {
  return (
    <Router
      main={
        <>
          <Route path="/" element={<Blank />} />
          <Route path="/document" element={<Document />} />
        </>
      }
    />
  )
}
