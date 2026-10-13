import './App.css'
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage'
import { useAuth } from './context/useAuth'
import { DashboardPage } from './pages/Dashboard'
import { BrowserRouter, Navigate, Outlet, Routes, Route } from 'react-router-dom'
import { MainLayout } from './components/MainLayout'
import {  CategoriesPage } from './pages/CategoriesPage'
import { ProductCreatePage } from './pages/ProductCreatePage'
//GUARDAR LA RUTA PRIVADA
const ProtectedRoute = () => {
  const { isAuthenticated, isHydrated } = useAuth()
  if (!isHydrated) return null
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />
}
//GUARDAR LA RUTA PUBLICA 
const PublicRoute = () => {
  const { isAuthenticated, isHydrated } = useAuth()
  if (!isHydrated) return null
  return !isAuthenticated ? <Outlet /> : <Navigate to="/catalog" replace />
}
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/**RUTAS PUBLICAS */}
        <Route element={<PublicRoute />}>
          <Route path='/login' element={<LoginPage onNavigateToRegister={() => { }} />} />
          <Route path='/register' element={<RegisterPage onNavigateToLogin={() => { }} />} />

        </Route>
        <Route element={<ProtectedRoute/>}>
          <Route element={<MainLayout/>}>
            <Route path='/' element={<Navigate to={"/catalog"}/>}/>
            <Route path='/catalog' element={<DashboardPage/>}/>
            <Route path='/categories/create' element={<CategoriesPage/>}/>
            <Route path='/products/create' element={<ProductCreatePage/>}/>
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App