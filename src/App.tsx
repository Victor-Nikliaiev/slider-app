import data from "./data";
import { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Card from "./components/Card";

const App = () => {
  const [people] = useState(data);
  const [index, setIndex] = useState(0);

  const setPosition = (personIndex: number): string => {
    let position: string = "nextSlide";
    if (personIndex === index) {
      position = "activeSlide";
    }
    if (
      personIndex === index - 1 ||
      (index === 0 && personIndex === people.length - 1)
    ) {
      position = "lastSlide";
    }
    return position;
  };

  const checkAndSetIndex = (): void => {
    const maxIndex: number = people.length - 1;
    if (index < 0) {
      setIndex(maxIndex);
    }
    if (index > maxIndex) {
      setIndex(0);
    }
  };

  useEffect(checkAndSetIndex, [people, index]);

  useEffect(() => {
    const moveSlideInterval: number = 5;
    const slider = setInterval(() => {
      setIndex(index + 1);
    }, moveSlideInterval * 1000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="container">
      <div className="title">
        <h2>
          <span>/</span> Reviews
        </h2>
      </div>
      <div className="center-slider">
        {people.map((person, personIndex: number) => {
          const position: string = setPosition(personIndex);
          return <Card key={person.id} {...person} position={position} />;
        })}
      </div>
      <button className="prev" onClick={() => setIndex(index - 1)}>
        <FiChevronLeft />
      </button>
      <button className="next" onClick={() => setIndex(index + 1)}>
        <FiChevronRight />
      </button>
    </section>
  );
};

export default App;
