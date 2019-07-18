import React, { memo } from "react";
import { Table, Button, Container, Header } from "semantic-ui-react";

const UrlsTable = ({ list }) => {
    return (
        <section className="table-wrapper">
            <Container>
                <Header as='h2'>List of saved URLS</Header>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>ID</Table.HeaderCell>
                            <Table.HeaderCell>URL</Table.HeaderCell>
                            <Table.HeaderCell>Server</Table.HeaderCell>
                            <Table.HeaderCell>Date</Table.HeaderCell>
                            <Table.HeaderCell>Actions</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {list.map( item => {
                            return (
                                <Table.Row key={item.id}>
                                    <Table.Cell>{item.id}</Table.Cell>
                                    <Table.Cell>{item.url}</Table.Cell>
                                    <Table.Cell>{item.serverName}</Table.Cell>
                                    <Table.Cell>{item.createdAt}</Table.Cell>
                                    <Table.Cell>
                                        <Button.Group basic size="small">
                                            <Button icon="delete" onClick={() => console.log("remove")}/>
                                            <Button icon="mail" onClick={() => console.log("mail")} />
                                        </Button.Group>
                                    </Table.Cell>
                                </Table.Row>
                            );
                        })}
                    </Table.Body>
                </Table>
            </Container>
        </section>
    );
};

export default memo(UrlsTable);