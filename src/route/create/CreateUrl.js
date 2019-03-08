import React, { Component } from 'react';
import { SIZES } from './../../constants/index.js';
import UrlButtons from './UrlButtons';
import UrlSatus from './UrlStatus';
import TransferProtocol from './TransferProtocol';
import { Input, Grid, Loader } from 'semantic-ui-react';
import urlHelper from './../../utils/urlHelper';
import './createUrl.scss';

class CreateUrl extends Component {
    constructor(props) {
        super(props);

        this.state = {
            url: '',
            isTested: false,
            isLoading: true,
            actions: [],
            status: {},
            protocolType: '',
        }
    }

    handleInputChange = (e) => {
        this.setState({
            url: e.target.value,
            isTested: false,
            isLoading: false
        });
    };

    handleTestUrl = async () => {
        this.setState({isLoading: true});

        try {
            const result = await urlHelper.getWebPage(this.state.url);
            console.log(urlHelper);
            console.log(result);
            //this.props.addUrl(result);
        } catch (err) {
            console.log(err.status);
            //this.props.addUrl(err);
        } finally {
            console.log('finally');
            this.setState({isLoading: false});
        }
    };

    handleSaveUrl = () => {
        this.setState((state) => ({
            actions: [...state, {url: state.url, status: state.status}]
        }));
        // TODO: api save url
    };

    handleProtocolUpdate = (protocolType) => this.setState({ protocolType });

    render() {
        const { url, isLoading, isTested, protocolType, status } = this.state;
        console.log(this.state);
        return (
            <section className="add-url-wrapper">
                <Grid divided>
                    <Grid.Row centered>
                        <TransferProtocol type={protocolType} onUpdate={this.handleProtocolUpdate} />
                        <Input
                            size={SIZES.HUGE}
                            icon='search'
                            placeholder='Want more news?'
                            value={url}
                            onChange={e => {this.handleInputChange(e)}}
                        />
                        <UrlButtons
                            isAddUrlDisabled={isTested}
                            isTestUrlDisabled={false}
                            onTestUrl={this.handleTestUrl}
                            onSaveResponse={this.handleSaveUrl}
                        />
                    </Grid.Row>
                    <Grid.Row centered>
                        <div className="loader-wrapper">
                            <Loader active={isLoading} size={SIZES.HUGE} />
                        </div>

                        {!isLoading && status && <UrlSatus />}
                    </Grid.Row>
                </Grid>
            </section>
        );
    }
};

export default CreateUrl;
