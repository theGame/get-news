import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'semantic-ui-react';

class UrlButtons extends PureComponent {
    render() {
        const { isAddUrlDisabled, isTestUrlDisabled } = this.props;
        return (
            <Button.Group className="url-group-buttons">
                <Button disabled={isTestUrlDisabled} animated='fade' size='large'>
                    <Button.Content visible>Test URL</Button.Content>
                    <Button.Content hidden>
                        <Icon name='heartbeat' size='large' />
                    </Button.Content>
                </Button>
                <Button.Or text='and' />
                <Button disabled={isAddUrlDisabled} animated='fade' size='large' positive>
                    <Button.Content visible>Add Url</Button.Content>
                    <Button.Content hidden>
                        <Icon name='save' size='large' />
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
