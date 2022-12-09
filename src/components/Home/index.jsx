import React from 'react';
import { Link } from 'react-scroll';
import perfil from '../../images/perfil/perfil.png';

import Container from './styles';

function Home() {
  return (
    <Container id="Home">
      <div>
        <img src={perfil} alt="perfil" />
      </div>
      <section>
        <h2>Hi, I am a</h2>
        <h1>
          Developer
          <span> Full Stack</span>
        </h1>
        <article>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Aliquid dignissimos itaque fugiat officiis asperiores dicta
          maxime reiciendis quo consequuntur, sunt quae, et cum
          sadfkjefeijfeifjiejfijis iefes iefmes foi feim i i i oijfei
          fesfesfesfse.
        </article>
        <Link
          to="Projects"
          spy
          smooth
          offset={0}
          duration={500}
        >
          Show Projects
        </Link>
      </section>
    </Container>
  );
}

export default Home;
