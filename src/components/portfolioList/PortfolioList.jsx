import "./portfolioList.scss";

export default function PortfolioList({ id, title, active, setSelected }) {
  return (
    <li
      key={id}
      className={active ? "portfolioList active" : ""}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}
