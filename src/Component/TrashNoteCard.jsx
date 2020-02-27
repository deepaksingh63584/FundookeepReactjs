import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Typography, Paper } from '@material-ui/core/';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import RestoreFromTrashOutlinedIcon from '@material-ui/icons/RestoreFromTrashOutlined';
import { updateTrash, deleteNotes } from '../FirebaseServices';


const useStyles = makeStyles(theme => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        width: '240px',
        marginBottom: "20px",
        height: 'fit-Content',
        marginLeft: '20px',
        border: '1px solid lightgray',
        borderRadius: '8px',
        [theme.breakpoints.down('xs')]: {
            width: 240,
        }
    },
    paper: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: 240,
        [theme.breakpoints.down('xs')]: {
            width: 240,
        }
    },

    input: {
        whiteSpace: 'preWrap',
        wordBreak: 'break-all',
        letterSpecing: '.00625em',
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 9,
        color: "#202124",

        [theme.breakpoints.down('xs')]: {
            marginRight: theme.spacing(-1),
        }
    },
}));

export default function CustomizedInputBase(props) {
    const classes = useStyles();
    return (
        <div>
            <Paper component="div" className={classes.root}>
                <Paper className={classes.paper}>
                    <Typography
                        className={classes.input}
                    >{props.NoteObj.Title}</Typography>
                </Paper>
                <Paper className={classes.paper}>
                    <Typography
                        className={classes.input}
                    >{props.NoteObj.Content}</Typography>
                </Paper>
                <Paper className={classes.paper}>
                    <IconButton className={classes.iconButton}
                        onClick={() => {
                            updateTrash(props.Nkey, false)
                        }}>
                        <RestoreFromTrashOutlinedIcon />
                    </IconButton>
                    <IconButton className={classes.iconButton}
                        onClick={() => {
                            deleteNotes(props.Nkey, false)
                        }}>
                        <DeleteForeverOutlinedIcon />
                    </IconButton>
                </Paper>
            </Paper >
        </div>
    );
}