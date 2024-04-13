import { useState } from "react";

const Greeting: React.FC<{ messages: string[] }> = ({ messages }) => {
  const [activeMessageIndex, setActiveMessageIndex] = useState(0);

  const handleNewGreeting = () => {
    setActiveMessageIndex(Math.floor(Math.random() * messages.length));
  };

  return (
    <div>
      <h3>{messages[activeMessageIndex]}! Thank you for visiting!</h3>
      <button onClick={handleNewGreeting}>New Greeting</button>
    </div>
  );
};

export default Greeting;
