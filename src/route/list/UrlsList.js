import React, { Component } from 'react';
import { connect } from "react-redux";
import { getUrlList, removeUrl } from "./../../actions/urlListActions";
import UrlsTable from "./Components/UrlsTable";
import { HeaderBar } from "../../common";
import { Segment, Dimmer, Loader } from "semantic-ui-react";

class UrlsList extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount() {
        this.props.getUrlList();
    }

    handleRemoveUrl = id => {
        const { list, removeUrl } = this.props;

        if(list.has(id)){
            removeUrl(id);
        }
    };

    render() {
        const { isLoading, list, history } = this.props;
        return (
            <section className="list-url-wrapper">
                <HeaderBar history={history} />
                {list && !!list.size && (
                    <Segment>
                        {isLoading && (
                            <Dimmer active inverted>
                                <Loader inverted content="Loading" />
                            </Dimmer>
                        )}
                        <UrlsTable list={list} onRemove={this.handleRemoveUrl} />
                    </Segment>
                )}
            </section>
        );
    }
}


const mapStateToProps = ({listUrls}) => ({
    isLoading: listUrls.isLoading,
    list: listUrls.list,
});
const mapDispatchToProps = dispatch => ({
    getUrlList: () => dispatch(getUrlList()),
    removeUrl: id => dispatch(removeUrl(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UrlsList);
