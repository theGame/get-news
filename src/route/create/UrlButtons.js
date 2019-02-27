import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { SIZES } from './../../constants/index.js';
import { Button, Icon } from 'semantic-ui-react';

class UrlButtons extends PureComponent {
    // probably should be just function not PureComponent, will do it later on
    render() {
        const { isAddUrlDisabled, isTestUrlDisabled } = this.props;
        return (
            <Button.Group className="url-group-buttons">
                <Button disabled={isTestUrlDisabled} animated='fade' size={SIZES.HUGE} >
                    <Button.Content visible>Test URL</Button.Content>
                    <Button.Content hidden>
                        <Icon name='heartbeat' size={SIZES.LARGE} />
                    </Button.Content>
                </Button>
                <Button.Or text='or' />
                <Button disabled={isAddUrlDisabled} animated='fade' size={SIZES.HUGE} positive>
                    <Button.Content visible>Add Url</Button.Content>
                    <Button.Content hidden>
                        <Icon name='save' size={SIZES.LARGE} />
                    </Button.Content>
                </Button>
            </Button.Group>
        );
    }
}

UrlButtons.defaultProps = {
    isAddUrlDisabled: true,
    isTestUrlDisabled: false,
};

UrlButtons.propTypes = {
    isAddUrlDisabled: PropTypes.bool.isRequired,
    isTestUrlDisabled: PropTypes.bool.isRequired
};

export default UrlButtons;
