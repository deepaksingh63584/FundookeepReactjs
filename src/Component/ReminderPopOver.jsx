import React, { Component } from 'react';

class ReminderPopOver extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            anchorElReminderPopover: null,
            selectedDate: new Date(),
            errors: {},
        }
    }

    handleClickReminderPopover = event => {
        this.setState(
            {
                anchorElReminderPopover: event.currentTarget
            },
            () => {
                this.handleClose();
            }
        );
    };


    handleCloseReminderPopover = () => {
        this.setState({
            anchorElReminderPopover: null
        });
    };
    handleClick = event => {
        this.setState({
            anchorEl: event.currentTarget
        });
    };

    handleClose = () => {
        this.setState({
            anchorEl: null
        });
    };

    handleDateChange = date => {
        this.setState({ selectedDate: date });
    };

    render() {
        const { anchorEl, anchorElReminderPopover } = this.state;
        const open = Boolean(anchorEl);
        const openReminderPopover = Boolean(anchorElReminderPopover);
        return (
            <Container style={{ marginTop: '4.1em', backgroundColor: 'deeppink', }}>
                <Card className="mainCard">
                    <div className="textDate">
                        <IconButton>
                            <ArrowBack />
                        </IconButton>
                        <form style={{ marginLeft: '5px', marginTop: '15px' }}>Pick date & time</form>
                    </div>
                    <Divider />
                    <List>
                        <ListItem>
                            <TextField
                                id="date"
                                label="Date"
                                type="date"
                                format={'DD/MM/YYYY'}
                                defaultValue="2020-01-01"
                                className="textField"
                                margin="normal"
                                fullWidth={true}
                                value={this.state.selectedDate}
                                onChange={this.handleDateChange}
                                InputLabelProps={{
                                    shrink: true
                                }}
                            />
                        </ListItem>
                        <ListItem>
                            <TextField
                                id="time"
                                label="Time"
                                type="time"
                                format={'HH:mm'}
                                className="textField"
                                defaultValue="00:01"
                                margin="normal"
                                fullWidth={true}
                                value={this.state.selectedDate}
                                onChange={this.handleDateChange}
                                InputLabelProps={{
                                    shrink: true
                                }}
                            />
                        </ListItem>
                        <ListItem>
                            <Button className="button">
                                Save
                        </Button>
                        </ListItem>
                    </List>

                </Card>
            </Container>
        );
    }
}

export default ReminderPopOver;