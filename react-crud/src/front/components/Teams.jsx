import "../styles/main.css";
import "../styles/mainPage.css";
import React from "react";

function Teams() {
  return (
    <div>
      <div className="teams-c">1</div>
      <div className="teams-c">2</div>
      <div className="teams-c">3</div>
      <div className="teams-c">4</div>
      <div className="teams-c">5</div>
      <div className="teams-c">6</div>
      <div className="teams-c">7</div>
      <div className="teams-c">8</div>
      <div className="teams-c">9</div>
      <div className="teams-c">10</div>
    </div>
  );
}

export default function Team() {
  return (
    <section> 
      <div className="HM">
        <h2 className='Heading_matches'>КОМАНДЫ</h2>
        <hr />
      </div>
      <Teams />
    </section>
  );
};