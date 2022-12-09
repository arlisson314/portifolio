import React from 'react';
import Container from './styles';
import images from '../../images/projectImg/index';

function Projects() {
  return (
    <Container id="Projects">
      <section>
        <h1>
          <span>My</span>
          Projects
        </h1>
      </section>
      <main>
        {images.map((image) => (
          <div key={image}>
            <img src={image} alt={image} />
            <button type="button">See more</button>
          </div>
        ))}
      </main>
    </Container>
  );
}

export default Projects;
