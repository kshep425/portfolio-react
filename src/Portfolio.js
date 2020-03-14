import React from 'react';
import {Card, Carousel} from 'react-bootstrap';
import PropTypes from 'prop-types';
import './Portfolio.css';

/**
 * @returns {object} Portfolio
 */
function Portfolio(props) {
  const projects = props.projects;

  const sidebar = (
    <ul>
      {projects.map((p) =>
        <li key={p.projectId}>{p.projectName}</li>,
      )}
    </ul>
  );

  const content = projects.map((p) =>(
    <Card key={p.projectId} className='m-3'>
      <Card.Title>{p.projectName}</Card.Title>
      <Card.Text>{p.projectDescription}</Card.Text>
      {(p.projectImages.length > 1) ? (
      <Carousel>
        {p.projectImages.map((i)=>(
          <Carousel.Item key={i}>
            <Card.Img src={'./assets/images/portfolio/' + i} width='100%'></Card.Img>
          </Carousel.Item>
        ))}
        </Carousel>
      ) : (<Card.Img src={'./assets/images/portfolio/' + p.projectImages[0]} width='100%'></Card.Img>)}

    </Card>
  ));

  return (
    <div id='portfolio' className='portfolio'>
      <h1>Portfolio</h1>
      <h2>Check out projects I've worked on!</h2>
      <div className='container'>
        {sidebar}
        <hr/>
        {content}
      </div>
    </div>
  );
}

Portfolio.propTypes = {
  projects: PropTypes.array,
};

export default Portfolio;
