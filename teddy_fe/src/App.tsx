import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '~/routes'
import { route } from './models'
import MainLayout from '~/layouts/MainLayout'
import { useEffect } from 'react'
function App() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])
  const isLoggedIn = getAccessTokenFromLocalStorage()
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route: route, index: number) => {
            let Layout: React.ComponentType<any> = MainLayout
            if (route.layout) {
              Layout = route.layout as React.ComponentType<any>
            }

            const Page = route.element

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            )
          })}
          {privateRoutes.map((route: route, index: number) => {
            let Layout: React.ComponentType<any> = MainLayout
            if (route.layout) {
              Layout = route.layout as React.ComponentType<any>
            }

            const Page = route.element

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  isLoggedIn ? (
                    <Layout>
                      <Page />
                    </Layout>
                  ) : (
                    <Navigate to="/login" replace />
                  )
                }
              />
            )
          })}
        </Routes>
      </div>
    </Router>
  )
}

export default App
