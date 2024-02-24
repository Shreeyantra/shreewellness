import Landing from "./pages/Landing";
import Book from "./pages/Book"
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
   <div>
    <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="/book" element={<Book />} />
    
    </Routes>
   </div>
  );
};

export default App;
