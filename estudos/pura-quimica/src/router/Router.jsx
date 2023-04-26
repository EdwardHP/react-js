import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Lab from '../pages/Lab/Lab'

function Router() {

    return (
        <section>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />}></Route>
                    <Route path="/lab" element={<Lab />}></Route>
                </Routes>
            </BrowserRouter>
        </section>
    )
}

export default Router