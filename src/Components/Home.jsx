import "./Home.css";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  let navigate = useNavigate();
  return (
    <>
      <div style={{ display: "flex", gap: -10 }}>
        <section id="main"></section>
        <section id="hero">
          <div className="hero-title">
            <span className="span-1"> Make your </span>
            <span className="span-2"> MENTAL</span>
            <span className="span-3"> HEALTH </span>
            <span className="span-4"> a Priority</span>
          </div>
          <button
            className="home-get-started-btn"
            onClick={(e) => {
              navigate("/RegisterPage");
            }}
          >
            Get Started
          </button>
        </section>
      </div>
      <br></br>
      <br></br>
      <section id="banner">
        <div className="banner-box">
          <div className="banner-1">
            <img
              src="https://img.freepik.com/premium-vector/strong-powerful-brain-holding-heavy-barbell_74669-429.jpg?w=740"
              alt="brain-img"
            ></img>
            <p>
              You are not Alone
              <br></br>
              <br></br>
              <br></br>
              <span>
                The brain is a muscle. The more you use it, the stronger it gets
              </span>
            </p>
          </div>
        </div>

        <div className="banner-box">
          <div className="banner-1">
            <img
              src="https://img.freepik.com/premium-vector/young-man-sits-lotus-position-meditating-home-concept-yoga-meditation-relax-health-benefits-body-mind-emotions-flat-illustration_222438-24.jpg"
              alt="brain-img"
            ></img>
            <p>
              Change Your Life Style
              <br></br>
              <br></br>
              <br></br>
              <span>
                Your brain is the most powerful tool you have. Use it to change
                your life.
              </span>
            </p>
          </div>
        </div>
      </section>
      <br></br>
      <footer>
        <div className="col">
          <h4> Contact Information</h4>
          <p>
            <b>Address:</b> Jerusalem
          </p>
          <p>
            <b>Phone:</b> 052365214
          </p>
          <p>
            <b>Email</b> MentalHealth@gmail.com
          </p>
        </div>
        <div className="col">
          <h4> Account</h4>
          <p>Login Page</p>
          <p> Create an Acount </p>
          <p>our Services </p>
        </div>
        <div className="col install">
          <h4> Install App</h4>
          <p> From App store or Google play </p>
          <div className="row">
            <img
              src="https://img.freepik.com/premium-vector/download-app-store-get-it-google-play-button-icons-with-neumorphism-design_659151-351.jpg?w=1380"
              alt=""
              width="200px"
            />
          </div>
        </div>
      </footer>
    </>
  );
}
