import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        padding: "20px",
        alignItems: "center",
        justifyContent: "space-between",
        background: "rgba(0,0,0,0.08)",
      }}
    >
      <div
        style={{ fontWeight: "bolder", margin: "0 40px", fontSize: "1.5rem" }}
      >
        The Fashion
      </div>
      <div style={{ display: "flex", fontSize: "1.1rem" }}>
        <div style={{ margin: "0 30px", cursor: "pointer" }} onClick={() => navigate("/")}>
          Home
        </div>
        <div style={{ margin: "0 30px", cursor: "pointer" }} onClick={() => navigate("/shop")}>
          Shop
        </div>
        <div style={{ margin: "0 30px", cursor: "pointer" }} onClick={() => navigate("/about")}>
          About
        </div>
      </div>
    </div>
  );
};

export default Navbar;
