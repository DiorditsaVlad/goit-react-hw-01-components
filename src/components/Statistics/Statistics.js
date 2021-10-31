import s from './Statistics.module.css';
export default function Statistics({ title, stats }) {
  return (
    <section className={s.container}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.list}>
        {stats.map(item => (
          <li
            key={item.id}
            className={s.listItem}
            style={{ backgroundColor: getRandomRGB() }}
          >
            <span className={s.label}>{item.label}</span>
            <span className={s.percentage}>{item.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
function getRandomRGB() {
  return `rgb(${Math.floor(Math.random() * 235)}, ${Math.floor(
    Math.random() * 235,
  )}, ${Math.floor(Math.random() * 235)})`;
}
