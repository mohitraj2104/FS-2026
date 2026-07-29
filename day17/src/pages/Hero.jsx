import "react";
import hero from "../assets/hero.jpg"; // Adjust the path if needed

export default function Hero() {
  return (
    <section id="hero">
      <img
        src={hero}
        alt="Hero"
        style={{
          width: "100%",
          maxHeight: "500px",
          objectFit: "cover",
        }}
      />

      <h1>This is Hero Section</h1>
      <p>Welcome to our platform. Discover amazing features and services.</p>
    </section>
  );
}