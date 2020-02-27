import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import AddAlertOutlinedIcon from "@material-ui/icons/AddAlertOutlined";
import Popover from "@material-ui/core/Popover";
import '../Css Files/reminder.css';
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import { IconButton } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";
import {
    MuiPickersUtilsProvider,
    TimePicker,
    DatePicker
} from "material-ui-pickers";

const OverRidedIconButton = withStyles({
    root: {
        padding: "4.7px"
    }
})(IconButton);
const styles = theme => ({
    typography: {
        margin: theme.spacing.unit * 2
    }
});
class SimplePopover extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            anchorEl: null,
            anchorElReminderPopover: null,
            selectedDate: new Date()
        };
        this.ReminderButtonRef = React.createRef();
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
        let dateChange = new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit"
        }).format(date);
        this.setState({ selectedDate: date });
    };

    handleSetReminder = () => {
    };
    render() {
        const { anchorEl, anchorElReminderPopover } = this.state;
        const open = Boolean(anchorEl);
        const openReminderPopover = Boolean(anchorElReminderPopover);
        console.log(this.state.selectedDate);
        console.log(this.state.selectedTime);

        return (
            <div>
                <OverRidedIconButton
                    aria-owns={open ? "simple-popper" : undefined}
                    aria-haspopup="true"
                    variant="contained"
                    ref={this.ReminderButtonRef}
                    onClick={this.handleClick}
                    aria-label="Reminder"
                >
                    <AddAlertOutlinedIcon fontSize="small" />
                </OverRidedIconButton>
                <Popover
                    id="simple-popper"
                    open={open}
                    anchorEl={anchorEl}
                    onClose={this.handleClose}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left"
                    }}
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "left"
                    }}
                >
                    <div className="main">
                        <Typography>Reminder :</Typography>
                        <div className="today">
                            <Typography style={{ fontSize: 14 }}>Later Today</Typography>
                            <Typography style={{ fontSize: 14 }}>8:00 PM</Typography>
                        </div>
                        <div className="today">
                            <Typography style={{ fontSize: 14 }}>Tomorrow</Typography>
                            <Typography style={{ fontSize: 14 }}>8:00 PM</Typography>
                        </div>
                        <div className="today">
                            <Typography style={{ fontSize: 14 }}>Next week</Typography>
                            <Typography style={{ fontSize: 14 }}>Mon 8:00 PM</Typography>
                        </div>
                        <div
                            className="pickDateAndTime"
                            aria-owns={openReminderPopover ? "Reminder-Popover" : undefined}
                            aria-haspopup="true"
                            variant="contained"
                            onClick={this.handleClickReminderPopover}
                        >
                            <AccessTimeIcon style={{ height: 18, width: 18, marginTop: 1 }} />
                            <Typography style={{ fontSize: 14, marginLeft: 15 }}>
                                Pick date & time
              </Typography>
                        </div>
                    </div>
                </Popover>
                <Popover
                    id="Reminder-Popover"
                    open={openReminderPopover}
                    anchorEl={this.ReminderButtonRef.current}
                    onClose={this.handleCloseReminderPopover}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left"
                    }}
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "left"
                    }}
                >
                    <div
                        style={{
                            padding: "10px",
                            display: "flex",
                            flexDirection: "column"
                        }}
                    >
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid
                                container
                                style={{ display: "flex", flexDirection: "column" }}
                            >
                                <DatePicker
                                    margin="normal"
                                    label="Date picker"
                                    value={this.state.selectedDate}
                                    onChange={this.handleDateChange}
                                />
                                <TimePicker
                                    margin="normal"
                                    label="Time picker"
                                    value={this.state.selectedDate}
                                    onChange={this.handleDateChange}
                                />
                            </Grid>
                        </MuiPickersUtilsProvider>
                        <Typography
                            onClick={this.handleSetReminder}
                            style={{ marginLeft: 130, paddingTop: 10, cursor: "pointer" }}
                        >
                            Save
            </Typography>
                    </div>
                </Popover>
            </div>
        );
    }
}

SimplePopover.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimplePopover);






































































































































































































































// import React from "react";
// import PropTypes from "prop-types";
// import Typography from "@material-ui/core/Typography";
// import AddAlertOutlinedIcon from "@material-ui/icons/AddAlertOutlined";
// import Popover from "@material-ui/core/Popover";
// import '../Css Files/reminder.css';
// import AccessTimeIcon from "@material-ui/icons/AccessTime";
// import { IconButton, TextField } from "@material-ui/core";
// import Grid from "@material-ui/core/Grid";
// import { withStyles } from "@material-ui/core/styles";
// import DateFnsUtils from "@date-io/date-fns";
// import {
//     MuiPickersUtilsProvider,
//     TimePicker,
//     DatePicker
// } from "material-ui-pickers";

// const moment = require("moment");
// const mm1 = require("moment-timezone");

// const OverRidedIconButton = withStyles({
//     root: {
//         padding: "4.7px"
//     }
// })(IconButton);
// const styles = theme => ({
//     typography: {
//         margin: theme.spacing.unit * 2
//     }
// });
// class SimplePopover extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             anchorEl: null,
//             anchorElReminderPopover: null,
//             selectedDate: new Date()

//             // selectedTime: moment().format('HH:mm')
//         };
//         this.ReminderButtonRef = React.createRef();
//     }

//     handleClickReminderPopover = event => {
//         this.setState(
//             {
//                 anchorElReminderPopover: event.currentTarget
//             },
//             () => {
//                 this.handleClose();
//             }
//         );
//     };

//     handleCloseReminderPopover = () => {
//         this.setState({
//             anchorElReminderPopover: null
//         });
//     };
//     handleClick = event => {
//         this.setState({
//             anchorEl: event.currentTarget
//         });
//     };

//     handleClose = () => {
//         this.setState({
//             anchorEl: null
//         });
//     };

//     handleDateChange = date => {
//         let dateChange = new Intl.DateTimeFormat("en-US", {
//             year: "numeric",
//             month: "2-digit",
//             day: "2-digit",
//             hour: "2-digit",
//             minute: "2-digit"
//         }).format(date);
//         this.setState({ selectedDate: date });
//     };

//     handleSetReminder = () => {
//         // let currentDate = this.state.currentDate.toString().substring(0, 10);
//         // let selectedDate = this.state.selectedDate.toString().substring(0, 10);

//         // let currentTime = this.state.currentDate.toString().substring(12, 17);
//         // let selectedTime = this.state.selectedDate.toString().substring(12, 17);

//         // let currentTimeAMPM = this.state.currentDate.toString().substring(18, 21);
//         // let selectedTimeAMPM = this.state.selectedDate.toString().substring(18, 21);

//         // if (currentDate.localeCompare(selectedDate) === 0) {
//         //   if (currentTime.localeCompare(selectedTime) === 0) {
//         //     if (currentTimeAMPM.localeCompare(selectedTimeAMPM) < 0) {
//         //       alert("1");
//         //     }
//         //   }
//         //   if (currentTime.localeCompare(selectedTime) > 0) {
//         //     if (currentTimeAMPM.localeCompare(selectedTimeAMPM) < 0) {
//         //       alert("2");
//         //     }
//         //   }
//         //   if (currentTime.localeCompare(selectedTime) < 0) {
//         //     if (currentTimeAMPM.localeCompare(selectedTimeAMPM) >= 0) {
//         //       alert("3");
//         //     }
//         //   }
//         // }

//         console.log(currentDate);
//         console.log(selectedDate);
//     };
//     render() {
//         const { anchorEl, anchorElReminderPopover } = this.state;
//         const open = Boolean(anchorEl);
//         const openReminderPopover = Boolean(anchorElReminderPopover);
//         console.log(this.state.selectedDate);
//         console.log(this.state.selectedTime);

//         return (
//             <div>
//                 <OverRidedIconButton
//                     aria-owns={open ? "simple-popper" : undefined}
//                     aria-haspopup="true"
//                     variant="contained"
//                     ref={this.ReminderButtonRef}
//                     onClick={this.handleClick}
//                     aria-label="Reminder"
//                 >
//                     <AddAlertOutlinedIcon fontSize="small" />
//                 </OverRidedIconButton>
//                 <Popover
//                     id="simple-popper"
//                     open={open}
//                     anchorEl={anchorEl}
//                     onClose={this.handleClose}
//                     anchorOrigin={{
//                         vertical: "bottom",
//                         horizontal: "left"
//                     }}
//                     transformOrigin={{
//                         vertical: "top",
//                         horizontal: "left"
//                     }}
//                 >
//                     <div className="main">
//                         <Typography>Reminder :</Typography>
//                         <div className="today">
//                             <Typography style={{ fontSize: 14 }}>Later Today</Typography>
//                             <Typography style={{ fontSize: 14 }}>8:00 PM</Typography>
//                         </div>
//                         <div className="today">
//                             <Typography style={{ fontSize: 14 }}>Tomorrow</Typography>
//                             <Typography style={{ fontSize: 14 }}>8:00 PM</Typography>
//                         </div>
//                         <div className="today">
//                             <Typography style={{ fontSize: 14 }}>Next week</Typography>
//                             <Typography style={{ fontSize: 14 }}>Mon 8:00 PM</Typography>
//                         </div>
//                         <div
//                             className="pickDateAndTime"
//                             aria-owns={openReminderPopover ? "Reminder-Popover" : undefined}
//                             aria-haspopup="true"
//                             variant="contained"
//                             onClick={this.handleClickReminderPopover}
//                         >
//                             <AccessTimeIcon style={{ height: 18, width: 18, marginTop: 1 }} />
//                             <Typography style={{ fontSize: 14, marginLeft: 15 }}>
//                                 Pick date & time
//               </Typography>
//                         </div>
//                     </div>
//                 </Popover>
//                 <Popover
//                     id="Reminder-Popover"
//                     open={openReminderPopover}
//                     anchorEl={this.ReminderButtonRef.current}
//                     onClose={this.handleCloseReminderPopover}
//                     anchorOrigin={{
//                         vertical: "bottom",
//                         horizontal: "left"
//                     }}
//                     transformOrigin={{
//                         vertical: "top",
//                         horizontal: "left"
//                     }}
//                 >
//                     <div
//                         style={{
//                             padding: "10px",
//                             display: "flex",
//                             flexDirection: "column"
//                         }}
//                     >
//                         <MuiPickersUtilsProvider utils={DateFnsUtils}>
//                             <Grid
//                                 container
//                                 style={{ display: "flex", flexDirection: "column" }}
//                             >
//                                 <DatePicker
//                                     margin="normal"
//                                     label="Date picker"
//                                     value={this.state.selectedDate}
//                                     onChange={this.handleDateChange}
//                                 />
//                                 @material-ui/core@^3.2.<TimePicker
//                                     margin="normal"
//                                     label="Time picker"
//                                     value={this.state.selectedDate}
//                                     onChange={this.handleDateChange}
//                                 />
//                             </Grid>
//                         </MuiPickersUtilsProvider>
//                         <Typography
//                             onClick={this.handleSetReminder}
//                             style={{ marginLeft: 130, paddingTop: 10, cursor: "pointer" }}
//                         >
//                             Save
//             </Typography>
//                     </div> 
//                 </Popover>
//             </div>
//         );
//     }
// }

// SimplePopover.propTypes = {
//     classes: PropTypes.object.isRequired
// };

// export default withStyles(styles)(SimplePopover);