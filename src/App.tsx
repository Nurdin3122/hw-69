
import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./container/Home/Home";
import Layout from "./components/Layout/Layout";
import InfoMovie from "./components/InfoMovie/InfoMovie";
function App() {


  return (
      <>
          <Layout>
                  <Routes>
                      <Route path="/" element={<Home/>}/>
                      <Route path="*" element={<h3>Sorry,there is not such page</h3>}/>
                      <Route path="shows/:id" element={<InfoMovie/>}></Route>
                  </Routes>
          </Layout>
      </>
  )
}

export default App
