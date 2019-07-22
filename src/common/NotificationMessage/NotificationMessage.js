import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import {COLORS, SIZES} from "./../../constants";

class NotificationMessage extends Component {
    render() {
        return (
            <section className="header-bar">
                {
                    <Segment color={COLORS.BLUE}></Segment>
                }
            </section>
        );
    }

};

export default NotificationMessage;