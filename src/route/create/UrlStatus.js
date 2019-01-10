import React, { PureComponent } from 'react';
import { Card } from 'semantic-ui-react';

class UrlStatus extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Card.Group>
                <Card color='red' header='Option 1' />
            </Card.Group>
        );
    }
}

export default UrlStatus;
