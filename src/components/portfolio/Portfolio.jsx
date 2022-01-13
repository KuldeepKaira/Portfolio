import PortfolioList from "../portfolioList/PortfolioList";
import { useState, useEffect } from "react";
import "./portfolio.scss";
import {
  worksPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data.js";

export default function Portfolio() {
  const [selected, setSelected] = useState("works");
  const [data, setData] = useState(worksPortfolio);

  const list = [
    { id: "works", title: "Works" },
    { id: "web", title: "Web App" },
    { id: "mobile", title: "Mobile" },
    { id: "design", title: "Design" },
    { id: "content", title: "Content" },
  ];

  useEffect(() => {
    switch (selected) {
      case "works":
        setData(worksPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
      default:
        setData(worksPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            key={item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <a href="https://poemcollection-kuldeep.netlify.app/" target="_blank">
            <div key={d.id} className="item">
              <img src={d.img} alt="" />
              <h3> {d.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
