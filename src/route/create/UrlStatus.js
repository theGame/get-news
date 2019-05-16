import React from "react";
import { Card } from "semantic-ui-react";
import { COLORS } from "./../../constants";

export default function UrlStatus({ statuses }) {
    return statuses.map( (item, index)  => {
        return (
            <Card.Group key={index}>
                {item.error && <Card color={COLORS.RED} header={item.serverName} />}
                {!item.error && <Card color={COLORS.BLUE} header={item.serverName} />}
            </Card.Group>
        );
    });
};
