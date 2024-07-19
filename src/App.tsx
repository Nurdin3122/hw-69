
import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./container/Home/Home";
import Layout from "./components/Layout/Layout";
function App() {


  return (
      <>
          <Layout>
                  <Routes>
                      <Route path="/" element={<Home/>}/>
                      <Route path="*" element={<h3>Sorry,there is not such page</h3>}/>
                  </Routes>
          </Layout>
      </>
  )
}

export default App
