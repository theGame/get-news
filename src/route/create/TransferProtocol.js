import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { SIZES, PROTOCOL_TYPE } from './../../constants';
import { Dropdown } from 'semantic-ui-react';

class TransferProtocol extends PureComponent {

    handleChange = (e, { value }) => this.props.onUpdate(value);
    render() {
        const { type, transferOptions } = this.props;
        return (
            <Dropdown
                className={`${SIZES.HUGE} compact`}
                options={transferOptions}
                size={SIZES.HUGE}
                search
                selection
                defaultValue={type}
                onChange={this.handleChange}
            />
        );
    }
}

TransferProtocol.defaultProps = {
    transferOptions: [{
        key: 1,
        value: PROTOCOL_TYPE.HTTP,
        text: PROTOCOL_TYPE.HTTP,
    }, {
        key: 2,
        value: PROTOCOL_TYPE.HTTPS,
        text: PROTOCOL_TYPE.HTTPS,
    }]
};

TransferProtocol.propTypes = {
    type: PropTypes.string.isRequired,
    onUpdate: PropTypes.func.isRequired
};

export default TransferProtocol;
