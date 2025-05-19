import { Product } from "./components/Products";

function App() {
    return (
      <div className="m-auto-row border-1 text-sm border-gray-200">
        <h1 className="font-semibold text-center font-small text-neutral-800">You might like these great products:</h1>
        <Product />
      </div>
    )
  }
  
  export default App
