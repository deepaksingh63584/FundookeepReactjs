import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import AssignmentTurnedInOutlinedIcon from "@material-ui/icons/AssignmentTurnedInOutlined";
import BrushOutlinedIcon from "@material-ui/icons/BrushOutlined";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";

const useStyles = makeStyles(theme => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        width: 570,
        boxShadow: '0.1em 0.1em 0.4em 0.1em black',
        borderRadius: '8px',
        [theme.breakpoints.down('xs')]: {
            width: 300,
        }
    },

    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
        [theme.breakpoints.down('xs')]: {
            marginRight: theme.spacing(-1),
        }
    },
}));
export default function CustomizedInputBase(props) {
    const classes = useStyles();

    return (
        <Paper component="form" className={classes.root}>
            <InputBase
                className={classes.input}
                placeholder="Take a notes..."
                inputProps={{ "aria-label": "notes" }}
                onClick={props.HandleClickChange}
            />
            <IconButton
                type="submit"
                className={classes.iconButton}
                aria-label="New List"
            >
                <AssignmentTurnedInOutlinedIcon />
            </IconButton>
            <IconButton className={classes.iconButton} aria-label="brush">
                <BrushOutlinedIcon />
            </IconButton>
            <IconButton>
                <ImageOutlinedIcon />
            </IconButton>
        </Paper>
    );
}