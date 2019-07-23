import React, { Component } from "react";
import { connect } from "react-redux";
import { Segment } from "semantic-ui-react";
import { COLORS } from "./../../constants";
import { removeNotification } from "./../../actions/notificationActions";


class NotificationMessage extends Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.timer = null;
    }

    static getDerivedStateFromProps(props, state) {
        if(props.notifications && props.notifications.length !== state.notifications) {
            return { notifications: props.notifications };
        }

        return null;
    }

    componentDidUpdate(prevState){
        if(prevState.notifications.length !== this.state.notifications.length && !!this.state.notifications.length){
            if(this.timer) {
                this.stopTimer();
            }
            this.startTimer();
        }
    }

    startTimer = () => {
        this.timer = setTimeout(this.handleRemoveNotification, 4000);
    };

    stopTimer = () => {
        clearTimeout(this.timer);
    };

    handleRemoveNotification = () => {
        this.props.removeNotification();
    };

    render() {
        const { notifications } = this.state;

        if(!notifications || notifications.length === 0) return null;

        return (
            <section className="notifications-wrapper">
                {
                    notifications.map( (item, index) =>
                        (<Segment inverted color={COLORS.YELLOW} key={index}>{item}</Segment>)
                    )
                }
            </section>
        );
    }
};


const mapStateToProps = ({ notifications }) => ({
    notifications: notifications.notifications,
});
const mapDispatchToProps = dispatch => ({
    removeNotification: () => dispatch(removeNotification()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NotificationMessage);