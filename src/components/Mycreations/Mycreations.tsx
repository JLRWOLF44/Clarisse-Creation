import "../Header/Header";
import "../Footer/Footer";
import "./Mycreations.css";
import Cards from "../Cards/Cards";
import data from "../../assets/data";
import { useState } from "react";

function Mycreations() {
  const [value, setValue] = useState("...");

  function handleSelect(event: React.ChangeEvent<HTMLSelectElement>) {
    setValue(event.target.value);
  }

  const filterdArray =
    value !== "..." ? data.filter((el) => el.type.includes(value)) : data;
  return (
    <>
      <select onChange={handleSelect}>
        <option>...</option>
        <option>Mariage</option>
        <option>enfant</option>
        <option>robe</option>
      </select>

      <section className="card-section">
        {filterdArray.map((el) => {
          return <Cards key={el.imgSrc} imgSrc={el.imgSrc} />;
        })}
      </section>
    </>
  );
}

export default Mycreations;
