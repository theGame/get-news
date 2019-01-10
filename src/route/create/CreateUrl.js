import React, { Component } from 'react';
import { Input } from 'semantic-ui-react'

class CreateUrl extends Component {
    render() {
        return (
            <section className="centered">
                <Input size='big' icon='search' placeholder='Search...' />
            </section>
        );
    }
}

export default CreateUrl;
