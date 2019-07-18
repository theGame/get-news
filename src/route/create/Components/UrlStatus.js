import React from "react";
import { Card, Label, Divider } from "semantic-ui-react";
import { COLORS } from "../../../constants";
import urlHelper from "../../../utils/urlHelper";

function getThreeLatestUrls(list) {
    return list.slice(0, 3);
}

export default function UrlStatus({ statuses }) {
    const list = getThreeLatestUrls(statuses);
    return (
        <Card.Group>
            {list.map( (item, index)  => {
                if(!item) return null;

                const color = item.statusCode === 200
                    ? COLORS.GREEN
                    : item.statusCode === 404
                        ? COLORS.RED
                        : COLORS.YELLOW;
                const msg = item.statusMessage || "WARNING";

                return (
                    <Card color={color} fluid key={index}>
                        <Card.Content textAlign="left">
                            {(item.isSaved || item.isFailed) && (
                                <Label color={item.isSaved ? COLORS.BLUE : COLORS.RED} className="float-right">
                                    {item.isSaved ? "Saved" : "Failed"}
                                </Label>
                            )}
                            <Card.Header onClick={() => urlHelper.openUrlInNewTab(item.url)}>{item.url}</Card.Header>
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
                )})
            }
            {statuses.length > 3 && (
                <Card
                    fluid
                    textAlign="center"
                    color={COLORS.BLUE}
                    header="Show all list"
                    onClick={() => console.log("show list of URLs: not implemented")} />
            )}
        </Card.Group>
    );
};