import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SIZES } from './../../constants/index.js';
import UrlButtons from './UrlButtons';
import UrlSatus from './UrlStatus';
import TransferProtocol from './TransferProtocol';
import { Input, Grid, Loader } from 'semantic-ui-react';
import { addUrl, testUrl,  } from "./../../actions/urlActions";

class CreateUrl extends Component {
    constructor(props) {
        super(props);

        this.state = {
            url: '',
            isTested: false,
            protocolType: '',
        }
    }

    handleInputChange = (e) => {
        this.setState({
            url: e.target.value,
            isTested: false,
        });
    };

    handleTestUrl = () => {
        // this.props.testUrl(this.state.url);
        this.props.testUrl("https://github.com/jsdom/jsdom/tree/master/scripts/webidl");
    };

    handleAddUrl = () => {
        // this.props.addUrl(this.state.url);
        this.props.addUrl("https://github.com/jsdom/jsdom/tree/master/scripts/webidl");
    };

    handleProtocolUpdate = (protocolType) => this.setState({ protocolType });

    render() {
        const { url, isTested, protocolType } = this.state;
        const { isLoading, statuses } = this.props;

        return (
            <section className="add-url-wrapper">
                <Grid divided>
                    <Grid.Row centered>
                        <TransferProtocol type={protocolType} onUpdate={this.handleProtocolUpdate} />
                        <span className={`${SIZES.HUGE} ui label transparent url-helper`}>://</span>
                        <Input
                            size={SIZES.HUGE}
                            icon='search'
                            placeholder='Want more news?'
                            value={url}
                            onChange={e => {this.handleInputChange(e)}}
                        />
                        <UrlButtons
                            isAddUrlDisabled={isTested}
                            isTestUrlDisabled={isLoading}
                            onTestUrl={this.handleTestUrl}
                            onSaveResponse={this.handleAddUrl}
                        />
                    </Grid.Row>
                    <Grid.Row centered>
                        {isLoading && (
                            <div className="loader-wrapper">
                                <Loader active={true} size={SIZES.HUGE} />
                            </div>
                        )}

                        {!isLoading && !!statuses.length && <UrlSatus statuses={this.props.statuses}/>}
                    </Grid.Row>
                </Grid>
            </section>
        );
    }
};

const mapStateToProps = ({ url }) => ({
    isLoading: url.isLoading,
    statuses: url.statuses,
});
const mapDispatchToProps = dispatch => ({
    testUrl: url => dispatch(testUrl(url)),
    addUrl: url => dispatch(addUrl(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateUrl);
