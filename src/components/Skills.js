import htmlicon from "./../imgs/html.png";
import css from "./../imgs/css-3.png";
import js from "./../imgs/js.png";
import java from "./../imgs/java.png";
import python from "./../imgs/python.png";
import node from "./../imgs/nodejs.png";
import git from "./../imgs/git.png";
import boot from "./../imgs/bootstrap.png";
import react from "./../imgs/atom.png";
import mysql from "./../imgs/mysql.png";
import vsc from "./../imgs/vsc.png";

export default function Skills() {
  return (
    <div className="Skills-wrapper" id="skill">
      <p className="about-text">My <span className="violet">Skills</span></p>
      <div className="flex-row-1  flex-row">
        <div className="skill-elem">
          <div className="img-elem">
            <img src={python} alt="skill logo" className="skillicon" />
          </div>
          <div className="text-elem">Python</div>
        </div>
        <div className="skill-elem">
          <div className="img-elem">
            <img src={java} alt="skill logo" className="skillicon" />
          </div>
          <div className="text-elem">Java</div>
        </div>
        <div className="skill-elem">
          <div className="img-elem">
            <img src={htmlicon} alt="skill logo" className="skillicon" />
          </div>
          <div className="text-elem">HTML</div>
        </div>
        <div className="skill-elem">
          <div className="img-elem">
            <img src={css} alt="skill logo" className="skillicon" />
          </div>
          <div className="text-elem">CSS</div>
        </div>
      </div>
      <div className="flex-row-2  flex-row">
        <div className="skill-elem">
          <div className="img-elem">
            <img src={js} alt="skill logo" className="skillicon" />
          </div>
          <div className="text-elem">Javascript</div>
        </div>
        <div className="skill-elem">
          <div className="img-elem">
            <img src={react} alt="skill logo" className="skillicon" />
          </div>
          <div className="text-elem">React Js</div>
        </div>
        <div className="skill-elem">
          <div className="img-elem">
            <img src={boot} alt="skill logo" className="skillicon" />
          </div>
          <div className="text-elem">Bootstrap</div>
        </div>
        <div className="skill-elem">
          <div className="img-elem">
            <img src={node} alt="skill logo" className="skillicon" />
          </div>
          <div className="text-elem">Node Js</div>
        </div>
      </div>
      <div className="flex-row-3  flex-row">
        <div className="skill-elem">
          <div className="img-elem">
            <img src={mysql} alt="skill logo" className="skillicon" />
          </div>
          <div className="text-elem">My SQL</div>
        </div>
        <div className="skill-elem">
          <div className="img-elem">
            <img src={vsc} alt="skill logo" className="skillicon" />
          </div>
          <div className="text-elem">Vs code</div>
        </div>
        <div className="skill-elem">
          <div className="img-elem">
            <img src={git} alt="skill logo" className="skillicon" />
          </div>
          <div className="text-elem">Git</div>
        </div>
        <div className="skill-elem">
          <div className="img-elem">
            <img src={react} alt="skill logo" className="skillicon" />
          </div>
          <div className="text-elem">React Native</div>
        </div>
      </div>
    </div>
  );
}
