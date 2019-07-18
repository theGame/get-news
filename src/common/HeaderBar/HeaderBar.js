import React, { memo } from "react";
import { Button, Icon } from "semantic-ui-react";
import {ROUTES, SIZES} from "./../../constants";

const shouldShowBtn = (path) => {
    console.log(path);
    console.log(window.location.pathname);
    return path !== window.location.pathname;
};

const headerBar = ({ history }) => {
    return (
        <section className="header-bar">
            {shouldShowBtn(ROUTES.HOME) && (
                <Button animated size={SIZES.LARGE} onClick={() => history.push(ROUTES.HOME)}>
                    <Button.Content visible>Add URL</Button.Content>
                    <Button.Content hidden>
                        <Icon name="save" />
                    </Button.Content>
                </Button>
            )}

            {shouldShowBtn(ROUTES.LIST) && (
                <Button animated size={SIZES.LARGE} onClick={() => history.push(ROUTES.LIST)}>
                    <Button.Content visible>List of URLs</Button.Content>
                    <Button.Content hidden>
                        <Icon name="arrow right" />
                    </Button.Content>
                </Button>
            )}

            {shouldShowBtn("") && (
                <Button animated="fade" size={SIZES.LARGE}>
                    <Button.Content visible>Test</Button.Content>
                    <Button.Content hidden>TODO</Button.Content>
                </Button>
            )}

            {shouldShowBtn(ROUTES.LOGIN) && (
                <Button animated="fade" size={SIZES.LARGE} onClick={() => history.push(ROUTES.LOGIN)}>
                    <Button.Content visible>Log out</Button.Content>
                    <Button.Content hidden>
                        <Icon name="log out" />
                    </Button.Content>
                </Button>
            )}
        </section>
    );
};

export default memo(headerBar);