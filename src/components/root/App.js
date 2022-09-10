import Dashboard from "./Dashboard";
import { Container } from 'reactstrap'
import Navi from '../navi/Navi'
import { Route, Routes } from 'react-router-dom'
import CartDetail from "../catagories/CartDetail";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct"
import NotFound from "../common/NotFound";





function App() {
  return (
    <div className="App">
      <Container>
        <Navi />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/product" element={<Dashboard />} />
          <Route path="/cart" element={<CartDetail />} />
          <Route path="/saveproduct" element={<AddOrUpdateProduct />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

      </Container>
    </div>
  );
}

export default App;
