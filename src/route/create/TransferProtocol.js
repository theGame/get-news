import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { SIZES } from './../../constants';
import { Dropdown } from 'semantic-ui-react';

class TransferProtocol extends PureComponent {

    handleChange = (e, { value }) => this.props.onUpdate(value);
    render() {
        const options = this.props.transferOptions;
        return (
            <Dropdown
                className={`${SIZES.HUGE} compact`}
                options={options}
                size={SIZES.HUGE}
                search
                selection
                defaultValue={options[0].value}
                onChange={this.handleChange}
            />
        );
    }
}

TransferProtocol.defaultProps = {
    transferOptions: [{
        key: 1,
        value: 'HTTP',
        text: 'HTTP'
    }, {
        key: 2,
        value: 'HTTPS',
        text: 'HTTPS'
    }]
};

TransferProtocol.propTypes = {
    type: PropTypes.string.isRequired,
    onUpdate: PropTypes.func.isRequired
};

export default TransferProtocol;
