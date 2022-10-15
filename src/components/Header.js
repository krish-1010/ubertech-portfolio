import {Link} from 'react-scroll';
import sticker from './../imgs/sticker.png'
export default function Header() {
  return (
    <div className="Header-wrapper">
      <header className="header">
        <div className="first-flex">
          <div className="logo">
            <img src={sticker} alt="logo" className='sticker'/>
          </div>
          <div className='logo-text'>KRISHNA</div>
        </div>
        <div className="second-flex">
        <ul className='navbar'>
            <li><Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link></li>
            <li><Link to="skill" spy={true} smooth={true}>About</Link></li>
            <li><Link>Contact</Link></li>
        </ul>
        </div>
        {/* <ul style={{display: 'flex', listStyle: 'none', justifyContent: 'space-around'}}>
            <li><Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link></li>
            <li><Link to="skill" spy={true} smooth={true}>About</Link></li>
            <li><Link>Contact</Link></li>
        </ul> */}
      </header>
     
    </div>
  );
}
