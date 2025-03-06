import { useState } from "react";
import axios from "axios";

const GreetingForm = () => {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");

  const fetchGreeting = async () => {
  if (!name) {
    setGreeting("Name is required.");
    return;
  }

  try {
    // ✅ Use the correct API URL
    const API_URL = "https://greet-backend.onrender.com";
    
    const response = await axios.get(`${API_URL}/api/greet?name=${name}`);
    setGreeting(response.data.message);
  } catch (error) {
    setGreeting("Error fetching greeting.");
  }
};


  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to Younglabs!</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: "10px", fontSize: "16px", marginRight: "10px" }}
      />
      <button
        onClick={fetchGreeting}
        style={{ padding: "10px 20px", fontSize: "16px" }}
      >
        Get Greeting
      </button>
      {greeting && <p style={{ marginTop: "20px", fontSize: "18px" }}>{greeting}</p>}
    </div>
  );
};

export default GreetingForm;
