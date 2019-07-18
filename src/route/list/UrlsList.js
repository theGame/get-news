import React, { Component } from 'react';
import { connect } from "react-redux";
import { getUrlList } from "./../../actions/urlListActions";
import UrlsTable from "./Components/UrlsTable";
import HeaderBar from "../../common/HeaderBar/HeaderBar"; //todo: common component!

class UrlsList extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount() {
        this.props.getUrlList();
    }

    render() {
        const { isLoading, list, history } = this.props;
        return (
            <section className="list-url-wrapper">
                <HeaderBar history={history} />
                {list && !!list.length && <UrlsTable list={list} />}
            </section>
        );
    }
}


const mapStateToProps = ({listUrls}) => ({
    isLoading: listUrls.isLoading,
    list: listUrls.list,
});
const mapDispatchToProps = dispatch => ({
    getUrlList: () => dispatch(getUrlList())
});

export default connect(mapStateToProps, mapDispatchToProps)(UrlsList);
