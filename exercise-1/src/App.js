import Navbar from "./components/Navbar";
import Banners from "./components/Banners";
import "./index.css";
import NewsContainer from "./components/NewsContainer";
function App() {
  
  return (
    <div className="app-container">  
      <Navbar/>  
      <Banners />
      <NewsContainer />
    </div>
  );
}

export default App;
