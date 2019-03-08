import React, { memo } from 'react';
import { SIZES } from './../../constants/index.js';
import { Button, Icon } from 'semantic-ui-react';

const UrlButtons = ({
    isAddUrlDisabled,
    isTestUrlDisabled,
    onTestUrl,
    onSaveResponse
}) => {
    return (
        <Button.Group className="url-group-buttons">
            <Button disabled={isTestUrlDisabled} animated='fade' size={SIZES.HUGE} onClick={onTestUrl}>
                <Button.Content visible>Test URL</Button.Content>
                <Button.Content hidden>
                    <Icon name='heartbeat' size={SIZES.LARGE}/>
                </Button.Content>
            </Button>
            <Button.Or text='or'/>
            <Button disabled={isAddUrlDisabled} animated='fade' size={SIZES.HUGE} positive onClick={onSaveResponse}>
                <Button.Content visible>Add Url</Button.Content>
                <Button.Content hidden>
                    <Icon name='save' size={SIZES.LARGE}/>
                </Button.Content>
            </Button>
        </Button.Group>
    );
};

export default memo(UrlButtons);
