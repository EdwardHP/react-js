import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Content from '../pages/Content/Content'

function Router() {

  return (
    <section>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} ></Route>
          <Route path="/Content" element={<Content />} ></Route>
        </Routes>
      </BrowserRouter>
    </section>
  )
}

export default Router
