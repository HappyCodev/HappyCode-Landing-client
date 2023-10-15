
import AppRoutes from './routes/AppRoutes'
import Navigation from './components/Navigation/Navigation'
import Footer from './components/Footer/Footer'

function App() {

  return (

    <div className=" top-0 left-0 w-full h-full bg-gradient-to-tr
     from-gray-950 via-gray-600 to-gray-600 -z-10">

      <Navigation />

      <AppRoutes />

      <Footer />


    </div>

  )
}

export default App
