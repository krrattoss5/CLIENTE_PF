import React from "react";
import s from './Categories.module.css'
import {
  FaCapsules,
  FaBinoculars,
  FaDumbbell
} from "react-icons/fa";
import { GiWeightLiftingUp } from "react-icons/gi";


const categories = [
  { name: 'Elasticos', icon: <FaDumbbell size={100} style={{ cursor: "pointer" }} />, color: '#0B3D91' },
  {
    name: "Musculacion",
    icon: <FaCapsules size={100} style={{ cursor: "pointer" }} />,
    color: "#0B3D91",
  },
  {
    name: "Fitness",
    icon: <GiWeightLiftingUp size={100} style={{ cursor: "pointer" }} />,
    color: "#0B3D91",
  },
  {
    name: "Kits",
    icon: <FaBinoculars size={100} style={{ cursor: "pointer" }} />,
    color: "#0B3D91",
  },
];

function Categories() {

  return (
    <div>
      <div className={s.container}>
        {categories.map((category, index) => (
          <div
            className={s.container1}
            key={index}
            style={{
              padding: "50px",
              marginRight: index !== categories.length - 1 ? "20px" : "0",
            }}
          >
            {/* <Link href={`/category/${category.name}`}> */}
            <div
              className={s.circle}
            >
              <div
                style={{
                  color: category.color,
                  fontSize: "60px",
                  marginBottom: "0",
                  padding: "20px"
                }}
              >
                {category.icon}
              </div>
            </div>
            {/* </Link> */}
            <span className={s.texts}>{category.name}</span>
          </div>
        ))}
      </div>
      <div className={s.filters}>
      </div>
    </div>
  );
}

export default Categories;
