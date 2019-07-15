import React from "react";
import { Card, Label, Divider } from "semantic-ui-react";
import { COLORS } from "./../../constants";

export default function UrlStatus({ statuses }) {
    return statuses.map( (item, index)  => {
        const color = item.statusCode === 200
            ? COLORS.GREEN
            : item.statusCode === 404
                ? COLORS.RED
                : COLORS.YELLOW;
        const msg = item.statusMessage || "WARNING";

        return (
            <Card.Group key={index}>
                <Card color={color}>
                    <Card.Content textAlign="left">
                        <Card.Header href={item.url}>{item.url}</Card.Header>
                        {item.serverName && <Card.Meta>Server name: {item.serverName}</Card.Meta>}
                        <Divider inverted />
                        <Card.Description>
                            Status code: <Label color={color} tag className="float-right">{item.statusCode}</Label>
                        </Card.Description>
                        <Divider inverted />
                        <Card.Description>
                            Status message: <Label color={color} tag className="float-right">{msg}</Label>
                        </Card.Description>
                    </Card.Content>
                </Card>
            </Card.Group>
        );
    });
};