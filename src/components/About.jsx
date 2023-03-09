import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'


const About = () => {
  const members = [
    {
      name: 'Tina Yang',
      image: 'https://i.imgur.com/AWFseLi.jpeg',
      linkedin: 'https://www.linkedin.com/in/yang-tina/',
      github: 'https://github.com/tinayang15'
    },
    {
      name: 'Ryan Cho',
      image: 'https://i.imgur.com/ugztVtn.jpeg',
      linkedin: 'https://www.linkedin.com/in/ryan-wongene-cho/',
      github: 'https://github.com/notryancho'
    },
    {
      name: 'Hector Flores',
      image: 'https://i.imgur.com/zBhHZKb.jpeg',
      linkedin: 'https://www.linkedin.com/in/hector-floresm/',
      github: 'https://github.com/hekmaflo/hekmaflo'
    },
    {
      name: 'Dominic Fuentes',
      image: 'https://i.imgur.com/ZZfDl7W.jpeg',
      linkedin: 'https://www.linkedin.com/in/dominicfuentes1/',
      github: 'https://github.com/fuentesdominic'
    },
   
  ];

  return (
    <div className="about">
      <h1>Our Mission</h1>
      <p>CodeUP is an application that encourages people to learn the fundamentals of beginner level coding. Our mission is to give beginner-intermediate level coders a welcoming learning environment that they can pace themselves. Each Language has multiple lessons that allow you have to hands on experience. We strongly encourage users to add notes as they read along. For those who prefer learning through videos we have a link in every lesson covering the overall topic.</p>
      <h2>Our Team</h2>
      <div className="members">
        {members.map((member) => (
          <div className="member" key={member.name}>
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <div className="links">
            <a href={member.linkedin}>
         <FontAwesomeIcon icon={faLinkedin} />
    LinkedIn
  </a>
  <a href={member.github}>
    <FontAwesomeIcon icon={faGithub} />
    GitHub
  </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
