import React from 'react';
import styled from 'styled-components';
import Error from '../components/Error';
import { TextField, Grid, Button, withTheme } from '@material-ui/core';

const GrowGrid = styled(Grid)`
    flex-grow: 1 !important;
`

class ContactForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            body: "",
            disabled: false,
            error: "",
            success: false
        }
    }

    onFormSubmit(e) {
        e.preventDefault();
        this.setState({disabled: true});
        fetch('https://ks1ulmlnu0.execute-api.us-east-1.amazonaws.com/Production/sendemail', {
            method: 'POST',
            body: JSON.stringify(this.state)
        })
            .then(() => this.setState({success: true, disabled: false}))
            .catch(() => this.setState({error: "There was an issue sending your message. Try again in a bit.", disabled: false}));
    }

    onChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div id={this.props.id} >
                {this.state.success ?
                    (<div>Thanks for your message! I'll get back to you ASAP.</div>)
                    :
                    (<form onSubmit={this.onFormSubmit.bind(this)} onChange={this.onChange.bind(this)}>
                        {this.state.error ? <Error>{this.state.error}</Error> : null }
                        <Grid container direction="column" alignContent="flex-start" spacing={8}>
                            <Grid item>
                                <Grid container direction="row" spacing={8} >
                                    <GrowGrid item>
                                        <TextField variant="outlined" autoComplete="name" fullWidth label="Name" name="name"  required /></GrowGrid>
                                    <GrowGrid item>
                                        <TextField variant="outlined" autoComplete="email" fullWidth label="Email" name="email" type="email" required />
                                    </GrowGrid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <TextField variant="outlined" name="body" fullWidth={true} multiline={true}
                                    rows={10} label="Body" placeholder="What's on your mind?" required />
                            </Grid>
                            <Grid item>
                                <Button size="large" color="primary" variant="outlined" type="submit" disabled={this.state.disabled}>
                                    Send
                        </Button>
                            </Grid>
                        </Grid>
                    </form>)
                }
            </div>

        )
    }
}

export default withTheme()(ContactForm);