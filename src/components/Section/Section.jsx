import PropTypes from 'prop-types';
import css from './Section.module.css';

const Section = ({ title, children }) => {
    return (<div>
        <h1 className={css.title}>{title}</h1>
        {children}
    </div>)
};

Section.propTypes = {
    title: PropTypes.string,
};

export default Section;