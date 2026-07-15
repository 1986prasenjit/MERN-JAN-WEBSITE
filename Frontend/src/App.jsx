import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import NewArrival from "./pages/NewArrival"
import Collections from "./pages/Collections"
import About from "./pages/About"
import Layout from "./components/Layout"
import CollectionsDetails from "./pages/CollectionsDetails"

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/new-arrival" element={<NewArrival />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/collections/:id" element={<CollectionsDetails />} />
        <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
