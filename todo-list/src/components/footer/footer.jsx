import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './footer.css';
import FILTERS_BUTTONS from '../../shared/filter-buttons';

class Footer extends Component {
    render() {
        const { activeFilter, amount, changeFilter } = this.props;

        return (
            <div className="footer">
                <span className="amount">{`${ amount } Tasks left`}</span>
                <div className="btn-group">
                    { FILTERS_BUTTONS.map(({ text, id }) => (
                        <button
                            key={ id }
                            className={ id === activeFilter ? "filter-btn active" : 'filter-btn' }
                            onClick={ () => changeFilter(id) }
                        >{ text }</button>
                    )) }
                </div>
            </div>
        )
    }
}

Footer.propTypes = {
    activeFilter: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    changeFilter: PropTypes.func
}

Footer.defaultProps = {
    changeFilter: () => {}
}

export default Footer;
