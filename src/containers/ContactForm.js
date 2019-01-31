import React from 'react';
import { TextField, Grid, FormControl, Button, withTheme } from '@material-ui/core';

class ContactForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            subject: "",
            body: ""
        }
    }

    onFormSubmit(e){
        e.preventDefault();
        // TODO: Send the message to will@wtaylor.tech
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <Grid container direction="column" justify="center" spacing={8}>
                    <Grid item>
                        <Grid container direction="row" spacing={8}>
                            <Grid item>
                                <FormControl>
                                    <TextField label="Name" variant="outlined" />
                                </FormControl>
                            </Grid>
                            <Grid item>
                                <FormControl>
                                    <TextField label="Email" variant="outlined" />
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <TextField variant="outlined" fullWidth={true} multiline={true} rows={10} label="Body" placeholder="What's on your mind?" />
                    </Grid>
                    <Grid item>
                        <Button size="large" color="primary" variant="outlined" type="submit">Send!</Button>
                    </Grid>
                </Grid>
            </form>
        )
    }
}

export default withTheme()(ContactForm);