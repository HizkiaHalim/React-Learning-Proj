import reactImg from '../assets/react-core-concepts.png';
import './Header.css';

const words = ['Fundamental', 'Core', 'Crucial'];

function generateRandomWord(max){
  return Math.floor(Math.random() * (max+1));
}

export default function Header() {
  const description = words[generateRandomWord(2)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}