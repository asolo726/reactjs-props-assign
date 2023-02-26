import React from 'react';
import { useState } from 'react';

import Navbar from './components/Navbar.js';
import Intro from './components/Intro.js';
import TechSkills from './components/TechSkills.js';
import './style.css';

export default function App() {
  const [images, setImage] = useState([
    {
      name: 'Java',
      img: 'https://ctechhosting.com/images-354/java.png',
    },
    {
      name: 'Python',
      img: 'https://ctechhosting.com/images-354/python.png',
    },
    {
      name: 'React',
      img: 'https://ctechhosting.com/images-354/react.png',
    },
    {
      name: 'SQL',
      img: 'https://ctechhosting.com/images-354/sql.png',
    },
  ]);
  return (
    <div>
      <Navbar />
      <Intro />
      <TechSkills imageList={images} />
    </div>
  );
}
