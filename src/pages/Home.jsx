const Home = () => {
  return (
    <div style={{ display: "flex", height: "100vh", background: "red" }}>
      <div
        style={{
          flex: 1,
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          margin: "120px",
          boxSizing: "border-box",
          fontSize: "2rem",
          color:"white"
        }}
      >
        Swipe for Style!<br></br> Our
        platform offers a personalized shopping experience, with advanced machine
        learning algorithms that recommend outfits based on your preferences and
        style.
      </div>
      <div style={{ flex: 1, display: "flex" }}>
        <img src="https://i.ibb.co/VH0RjH8/DALL-E-2023-04-09-10-48-13-An-ultra-modern-state-of-the-art-clothing-store-powered-by-AI-algorithms.png" />
      </div>
    </div>
  );
};

export default Home;
