import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SIZES, PROTOCOL_TYPE, COLORS, REG_EXPS } from './../../constants';
import UrlButtons from './UrlButtons';
import UrlSatus from './UrlStatus';
import TransferProtocol from './TransferProtocol';
import { Input, Grid, Loader, Form, Label } from 'semantic-ui-react';
import { addUrl, testUrl  } from "./../../actions/urlActions";

class CreateUrl extends Component {
    constructor(props) {
        super(props);

        this.state = {
            url: '',
            protocolType: PROTOCOL_TYPE.HTTP,
            isAbleToSaveUrl: false,
            isUrlValid: true,
        };

        this.searchInput = React.createRef();
    }

    static getDerivedStateFromProps(props, state) {
        if(props.statuses !== state.statuses) {
            return { statuses: props.statuses };
        }

        return null;
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.statuses.length !== this.state.statuses.length && this.state.statuses[0].statusCode === 200){
            this.setState({isAbleToSaveUrl: true});
        }
    }

    componentDidMount() {
        this.searchInput.current.focus();
    }

    handleInputChange = (e) => {
        this.setState({
            url: e.target.value,
            isAbleToSaveUrl: false,
            isUrlValid: true,
        });
    };

    handleTestUrl = () => {
        const url = this.getUrlFromInput();
        const re = new RegExp(REG_EXPS.URL, "gm");

        if(re.test(url)) {
            this.setState(
                {isUrlValid: true},
                () => this.props.testUrl(url),
            );
            return;
        }

        this.setState({
            isUrlValid: false,
            isAbleToSaveUrl: false,
        });
    };

    handleAddUrl = () => {
        const url = this.getUrlFromInput();
        this.props.addUrl(url);
    };

    handleKeyPress = (event) => {
        /*debugger*/
        const { url } = this.state;

        if(event.key === "Enter" && url){
            this.handleTestUrl();
        }
    };

    getUrlFromInput = () => `${this.state.protocolType.toLowerCase()}://${this.state.url}`;
    isTestDisabled = () => {
        const { isLoading } = this.props;
        const { url } = this.state;

        return isLoading || !url;
    };
    isAddDisabled = () => {
        const { isAbleToSaveUrl } = this.state;

        return this.isTestDisabled() || !isAbleToSaveUrl;
    };

    handleProtocolUpdate = (protocolType) => this.setState({ protocolType });

    render() {
        const { url, protocolType, statuses, isUrlValid } = this.state;
        const { isLoading } = this.props;

        return (
            <section className="add-url-wrapper">
                <Grid divided className="url-wrapper">
                    <Grid.Row centered>
                        <TransferProtocol type={protocolType} onUpdate={this.handleProtocolUpdate} />
                        <span className={`${SIZES.HUGE} ui label transparent url-helper`}>://</span>
                        <Form>
                            <Form.Field>
                                {!isUrlValid && <Label basic color={COLORS.RED} pointing="below">
                                    URL not valid
                                </Label>}
                                <Input
                                    onKeyPress={this.handleKeyPress}
                                    ref={this.searchInput}
                                    size={SIZES.HUGE}
                                    icon='search'
                                    placeholder='Want more news?'
                                    value={url}
                                    onChange={e => {this.handleInputChange(e)}}
                                />
                            </Form.Field>
                        </Form>
                        <UrlButtons
                            isAddUrlDisabled={this.isAddDisabled()}
                            isTestUrlDisabled={this.isTestDisabled()}
                            onTestUrl={this.handleTestUrl}
                            onSaveResponse={this.handleAddUrl}
                        />
                    </Grid.Row>

                    <Grid.Row className="statuses-wrapper">
                        {isLoading && (
                            <div className="loader-wrapper">
                                <Loader active={true} size={SIZES.HUGE} />
                            </div>
                        )}
                        {!isLoading && !!statuses.length && <UrlSatus statuses={statuses}/>}
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
