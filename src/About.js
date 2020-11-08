import React from 'react';
import {NavLink} from 'react-router-dom';

class About extends React.Component {

  render() {
    return (
      <div className="about">
      <p>
        FADE skincare makes simple, effective, research-backed skincare products. I (Jeremy) started FADE because I was not happy with the acne skincare products on the market, and decided to formulate my own.
      </p>
      <p>
        The three problems I saw in the current market were the abundance of overpriced, ineffective, and/or unsafe skincare products. To try to solve these problems, FADE does 3 things:
      </p>
      <ol>
        <li>We are brutally honest about pricing, giving you the numbers on all of our products' costs and markups.</li>
        <li>We heavily research each potential ingredient, with particular focus to medical/dermatological journals. We link to many of these journal articles so you can read them for yourself.</li>
        <li>We also ensure each and every ingredient is considered safe (both for you and the environment) by the <a href="https://ewg.org/skindeep">Environmental Working Group</a>. Stay tuned for our products to become EWG Verified! :)</li>
      </ol>
      <br />
      <p>
        <NavLink to="/terms">return policy &amp; terms</NavLink>
      </p>
      </div>
    )
  }

}

export default About;
