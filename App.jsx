import { useState } from "react";
import "./App.css";

function App() {
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [finalPrice, setFinalPrice] = useState(null);

  const calculateDiscount = () => {
    const originalPrice = Number(price);
    const discountPercentage = Number(discount);

    if (originalPrice <= 0 || discountPercentage < 0 || discountPercentage > 100) {
      alert("Please enter valid values");
      return;
    }

    const discountAmount =
      (originalPrice * discountPercentage) / 100;

    const priceAfterDiscount =
      originalPrice - discountAmount;

    setFinalPrice(priceAfterDiscount);
  };

  return (
    <div className="calculator">
      <h1>Discount Calculator</h1>

      <label>Original Price</label>
      <input
        type="number"
        placeholder="Enter original price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <label>Discount (%)</label>
      <input
        type="number"
        placeholder="Enter discount percentage"
        value={discount}
        onChange={(e) => setDiscount(e.target.value)}
      />

      <button onClick={calculateDiscount}>
        Calculate
      </button>

      {finalPrice !== null && (
        <div className="result">
          <h2>Final Price</h2>
          <p>₹{finalPrice.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}

export default App;