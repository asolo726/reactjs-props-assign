import React from 'react';
import Navbar from './components/Navbar.js';
import Intro from './components/Intro.js';
import './style.css';

const images = [
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
];

export default function App() {
  return (
    <div>
      <Navbar />
      <Intro />
    </div>
  );
}
