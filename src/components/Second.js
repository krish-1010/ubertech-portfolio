import mylogo from "./../imgs/sticker.png";
import tick from './../imgs/double-tick.png'

export default function Second() {
  return (
    <div className="Second-wrapper">
      <div className="my-icon">
        <img src={mylogo} alt="my logo" className="my-icon-img" />
      </div>
      <div className="about-wrapper">
        <p className="about-text">About <span className="violet">me</span></p>
        <div className="about-box">
          <p className="p-p-2">
            <img src={tick} alt="tick" className="tick" />
            I am a Self taught programmer, intrestred in various technologies,
            currently pursuing B.Sc. Physics in Loyola college, chennai.
          </p>
          <p className="p-p-2"><img src={tick} alt="tick" className="tick" /> Freelance Teacher - Programming </p>
          <p className="p-p-2"><img src={tick} alt="tick" className="tick" /> Gaming Enthusiast </p>
          <p className="p-p-2"><img src={tick} alt="tick" className="tick" /> Friendly and approachable </p>
        </div>
      </div>
    </div>
  );
}
