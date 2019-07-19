import React, { Component } from 'react';
import { connect } from "react-redux";
import { getUrlList, removeUrl } from "./../../actions/urlListActions";
import UrlsTable from "./Components/UrlsTable";
import { HeaderBar } from "../../common";

class UrlsList extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount() {
        this.props.getUrlList();
    }

    render() {
        const { isLoading, list, history, removeUrl } = this.props;
        return (
            <section className="list-url-wrapper">
                <HeaderBar history={history} />
                {list && !!list.length && <UrlsTable list={list} onRemove={removeUrl}/>}
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
