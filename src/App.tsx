import data from "./data";
import { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaQuoteLeft } from "react-icons/fa";

const App = () => {
  const [people] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const maxIndex: number = people.length - 1;
    if (index < 0) {
      setIndex(maxIndex);
    }
    if (index > maxIndex) {
      setIndex(0);
    }
  }, [people, index]);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="container">
      <div className="title">
        <h2>
          <span>/</span>Reviews
        </h2>
      </div>
      <div className="center-slider">
        {people.map(
          ({ id, image, name, quote, title }, personIndex: number) => {
            //some extra stuff to do here
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
            return (
              <article key={id} className={position}>
                <img className="person-img" src={image} alt={name} />
                <h4>{name}</h4>
                <p className="title">{title}</p>
                <p className="text">{quote}</p>
                <FaQuoteLeft className="icon" />
              </article>
            );
          }
        )}
      </div>
      <button className="prev" onClick={() => setIndex(index - 1)}>
        <FiChevronLeft className="btn" />
      </button>
      <button className="next" onClick={() => setIndex(index + 1)}>
        <FiChevronRight className="btn" />
      </button>
    </section>
  );
};
export default App;
