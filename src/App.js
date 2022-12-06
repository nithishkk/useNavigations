
import { useNavigate } from "react-router-dom";

function App() {
  let navigate = useNavigate();
  function handleClick() {
    navigate("/home");
  }
  return (
    <div>
      <p>nithish</p>
      <button onClick={handleClick}>go home</button>
    </div>
  );
}