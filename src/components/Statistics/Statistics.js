import s from './Statistics.module.css';
import PropTypes from 'prop-types';
import getRandomRGB from '../../getRandomRGB';
import { StyledList } from './Statistics.styled';
export default function Statistics({ title, stats }) {
  return (
    <section className={s.container}>
      {title && <h2 className={s.title}>{title}</h2>}
      <StyledList>
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
      </StyledList>
    </section>
  );
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
