import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Card, IconButton, Divider } from '@material-ui/core/';
import { ArrowBack, } from '@material-ui/icons/';
import DatePicker from "react-datepicker";

const useStyles = makeStyles(theme => ({
    mainCard: {
        display: 'flex',
        flexDirection: 'column',
        width: '320px',
        padding: theme.spacing(2),
        border: 'none',
        boxShadow: 'none',
    },
    textDate: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',

    }

}))

function Reminder(props) {
    const classes = useStyles();

    return (
        <Container style={{ marginTop: '4.1em', backgroundColor: 'deeppink', }}>
            <Card className={classes.mainCard}>
                <div className={classes.textDate}>
                    <IconButton>
                        <ArrowBack />
                    </IconButton>
                    <form style={{ marginLeft: '5px', marginTop: '15px' }}>Pick date & time</form>
                </div>
                <Divider />


            </Card>
        </Container>
    );
}

export default Reminder;



// // import 'date-fns';
// // import React from 'react';
// // import Grid from '@material-ui/core/Grid';
// // import DateFnsUtils from '@date-io/date-fns';
// // import {
// //     MuiPickersUtilsProvider,
// //     KeyboardDatePicker,
// // } from '@material-ui/pickers';

// // export default function MaterialUIPickers() {
// //     const [selectedDate, setSelectedDate] = React.useState(new Date('2020-01-07T21:11:54'));

// //     const handleDateChange = date => {
// //         setSelectedDate(date);
// //     };

// //     return (
// //         <MuiPickersUtilsProvider utils={DateFnsUtils}>
// //             <Grid>
// //                 <KeyboardDatePicker
// //                     margin="normal"
// //                     id="date-picker-dialog"
// //                     label="Date picker dialog"
// //                     format="MM/dd/yyyy"
// //                     value={selectedDate}
// //                     onChange={handleDateChange}
// //                     KeyboardButtonProps={{
// //                         'aria-label': 'change date',
// //                     }}
// //                 />
// //             </Grid>
// //         </MuiPickersUtilsProvider>
// //     );
// // }


// // import 'date-fns';
// // import React from 'react';
// // import Grid from '@material-ui/core/Grid';
// // import DateFnsUtils from '@date-io/date-fns';
// // import {
// //     MuiPickersUtilsProvider,
// //     KeyboardTimePicker,
// //     KeyboardDatePicker,
// // } from '@material-ui/pickers';

// // export default function MaterialUIPickers() {
// //     // The first commit of Material-UI
// //     const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

// //     const handleDateChange = date => {
// //         setSelectedDate(date);
// //     };

// //     return (
// //         <MuiPickersUtilsProvider utils={DateFnsUtils}>
// //             <Grid container justify="space-around">
// //                 <KeyboardDatePicker
// //                     disableToolbar
// //                     variant="inline"
// //                     format="MM/dd/yyyy"
// //                     margin="normal"
// //                     id="date-picker-inline"
// //                     label="Date picker inline"
// //                     value={selectedDate}
// //                     onChange={handleDateChange}
// //                     KeyboardButtonProps={{
// //                         'aria-label': 'change date',
// //                     }}
// //                 />
// //                 <KeyboardDatePicker
// //                     margin="normal"
// //                     id="date-picker-dialog"
// //                     label="Date picker dialog"
// //                     format="MM/dd/yyyy"
// //                     value={selectedDate}
// //                     onChange={handleDateChange}
// //                     KeyboardButtonProps={{
// //                         'aria-label': 'change date',
// //                     }}
// //                 />
// //                 <KeyboardTimePicker
// //                     margin="normal"
// //                     id="time-picker"
// //                     label="Time picker"
// //                     value={selectedDate}
// //                     onChange={handleDateChange}
// //                     KeyboardButtonProps={{
// //                         'aria-label': 'change time',
// //                     }}
// //                 />
// //             </Grid>
// //         </MuiPickersUtilsProvider>
// //     );
// // }