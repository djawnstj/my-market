import Nav from "./components/Nav"
import ProductList from "./routes/ProductList"
import ProductDetail from "./routes/ProductDetail";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/product-list" element={ <ProductList /> } />
        <Route path="/product/:productId" element={ <ProductDetail /> } />
      </Routes>
    </Router>
  );
}

export default App;
