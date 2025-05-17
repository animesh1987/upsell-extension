import { Product } from "./components/Products";

function App() {
    return (
      <div className="m-auto-row border-2 border-gray-700 max-w-96">
        <h1 className="font-bold text-center">Add these items</h1>
        <Product />
      </div>
    )
  }
  
  export default App
