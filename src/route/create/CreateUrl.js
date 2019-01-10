import React, { Component } from 'react';
import UrlButtons from './UrlButtons';
import UrlSatus from './UrlStatus';
import { Input, Grid } from 'semantic-ui-react';

class CreateUrl extends Component {
    constructor(props) {
        super(props);

        this.state = {
            url: '',
            isTested: false
        }
    }

    onInputChange = (e) => {
        this.setState({
            url: e.target.value,
            isTested: false,
            isLoading: false
        });
    };

    render() {
        const { url, isLoading, isTested } = this.state;
        return (
            <section className="add-url-wrapper">
                <Grid divided>
                    <Grid.Row>
                        <Input
                            size='big'
                            icon='search'
                            placeholder='Want more news?'
                            value={url}
                            onChange={e => {this.onInputChange(e)}}
                        />
                        <UrlButtons
                            isAddUrlDisabled={isTested}
                            isTestUrlDisabled={false}
                        />
                    </Grid.Row>
                    <Grid.Row>
                        <UrlSatus />
                    </Grid.Row>
                </Grid>
            </section>
        );
    }
}

export default CreateUrl;
