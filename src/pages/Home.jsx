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
          fontSize: "1.2rem",
        }}
      >
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
        Cicero, written in 45 BC. This book is a treatise on the theory of
        ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
        1.10.32
      </div>
      <div style={{ flex: 1, display: "flex" }}>
        <img src="https://i.ibb.co/VH0RjH8/DALL-E-2023-04-09-10-48-13-An-ultra-modern-state-of-the-art-clothing-store-powered-by-AI-algorithms.png" />
      </div>
    </div>
  );
};

export default Home;
