import "../Header/Header";
import "../Footer/Footer";
import "./Mycreations.css";
import Cards from "../Cards/Cards";
import data from "../../assets/data";
import { useState } from "react";

import { Link } from "react-router-dom";

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
        <option>homme</option>
      </select>

      <section className="card-section">
        {filterdArray.map((el) => {
          return (
            <div key={el.imgSrc} className="card">
              <Link to={`/image/${encodeURIComponent(el.imgSrc)}`}>
                <Cards imgSrc={el.imgSrc} />
              </Link>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default Mycreations;
