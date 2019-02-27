import React, { Component } from 'react';
import { SIZES } from './../../constants/index.js';
import UrlButtons from './UrlButtons';
import UrlSatus from './UrlStatus';
import TransferProtocol from './TransferProtocol';
import { Input, Grid } from 'semantic-ui-react';

class CreateUrl extends Component {
    constructor(props) {
        super(props);

        this.state = {
            url: '',
            isTested: false,
            isLoading: false,
            status: {},
            protocolType: ''
        }
    }

    onInputChange = (e) => {
        this.setState({
            url: e.target.value,
            isTested: false,
            isLoading: false
        });
    };

    onProtocolUpdate = (protocolType) => this.setState({ protocolType });

    render() {
        const { url, isLoading, isTested, protocolType } = this.state;
        console.log(this.state);
        return (
            <section className="add-url-wrapper">
                <Grid divided>
                    <Grid.Row centered>
                        <TransferProtocol type={protocolType} onUpdate={this.onProtocolUpdate} />
                        <Input
                            size={SIZES.HUGE}
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
                    <Grid.Row centered>
                        <UrlSatus />
                    </Grid.Row>
                </Grid>
            </section>
        );
    }
}

export default CreateUrl;
