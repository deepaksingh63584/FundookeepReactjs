import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Paper from '@material-ui/core/Paper';
import Unpined from '../Component/image/unpined.svg';
import Pined from '../Component/image/pined.svg';
import Avatar from '@material-ui/core/Avatar';
import InputBase from '@material-ui/core/InputBase';
import { IconButton, MenuItem, MenuList, Popper, ClickAwayListener, Grow } from '@material-ui/core/';
import { AddAlertOutlined, UndoOutlined, RedoOutlined, PersonAddOutlined, ColorLensOutlined, MoreVertOutlined, ImageOutlined, ArchiveOutlined } from '@material-ui/icons';
import { editNotesFromFireBase } from '../FirebaseServices';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        boxShadow: '0.1em 0.1em 0.4em 0.1em black',
        borderRadius: '8px',
        [theme.breakpoints.down('xs')]: {
            width: 300,
        }
    },
    paper: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: 540,
        border: '2px solid white',
        borderRadius: '8px',
        boxShadow: '0.1em 0.1em 0.4em 0em #fff',
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
        color: "#202124",
        [theme.breakpoints.down('xs')]: {
            marginRight: theme.spacing(-1),
        }
    },
    closeButton: {
        marginLeft: theme.spacing(19),
        [theme.breakpoints.down('xs')]: {
            marginLeft: theme.spacing(28),
        }
    },
}));

export default function AlertDialogSlide(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = React.useState(props.noteObj.Title);
    const [content, setContent] = React.useState(props.noteObj.Content);
    const [pin, setPin] = React.useState(props.noteObj.PinStatus);
    // const [archive, setArchive] = React.useState(props.noteObj.Archive);
    const anchorRef = React.useRef(null);

    const updateNotes = async () => {
        console.log("Edit Notes key" + props.key);

        await editNotesFromFireBase(props.Key, title, content, pin)
        props.HandleCloseChange()
    };

    const handleToggle = () => {
        setOpen(prevOpen => !prevOpen);
    };

    const handleClose = event => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };

    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }
        prevOpen.current = open;
    }, [open]);

    const renderMenu = (
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal style={{ backgroundColor: "#fff", zIndex: 1 }}>
            {({ TransitionProps, placement }) => (
                <Grow
                    {...TransitionProps}
                    style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                >
                    <Paper style={{ backgroundColor: "#fff", zIndex: 1 }}>
                        <ClickAwayListener onClickAway={handleClose}>
                            <MenuList autoFocusItem={open} id="menu-list-grow">
                                <MenuItem onClick={handleClose}>Delete Note</MenuItem>
                                <MenuItem onClick={handleClose}>add Level</MenuItem>
                                <MenuItem onClick={handleClose}>add Drawing</MenuItem>
                                <MenuItem onClick={handleClose}>Make a Copy</MenuItem>
                                <MenuItem onClick={handleClose}>Show Checkboxes</MenuItem>
                            </MenuList>
                        </ClickAwayListener>
                    </Paper>
                </Grow>
            )}
        </Popper>
    )
    console.log(" key : " + props.Key);
    console.log("d5eswbcrtf" + JSON.stringify(props));
    return (
        <Dialog open={props.open} onClose={updateNotes}>
            <Paper component="div" className={classes.root}>
                <DialogTitle>
                    {
                        <Paper className={classes.paper}>
                            <InputBase
                                className={classes.input}
                                inputProps={{ "aria-label": "title" }}
                                placeholder="Title"
                                multiline={true}
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                defaultValue={props.noteObj.Title}
                            />
                            <IconButton
                                className={classes.iconButton}
                                onChange={(e) => setPin(!pin)}
                            >
                                <Avatar
                                    src={props.pinStatus ? Pined : Unpined}
                                    style={{ height: "20px", width: "15px" }}
                                />
                            </IconButton>
                        </Paper>
                    }
                </DialogTitle>
                <DialogContent>
                    <Paper className={classes.paper}>
                        <InputBase
                            className={classes.input}
                            placeholder="Take a notes..."
                            multiline={true}
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            defaultValue={props.noteObj.content}
                        >
                            {props.Content}
                        </InputBase>
                    </Paper>
                </DialogContent>
                <DialogActions>
                    <Paper className={classes.paper}>
                        <IconButton className={classes.iconButton}>
                            <AddAlertOutlined fontSize="small" />
                        </IconButton>
                        <IconButton className={classes.iconButton}>
                            <PersonAddOutlined fontSize="small" />
                        </IconButton>
                        <IconButton className={classes.iconButton}>
                            <ColorLensOutlined fontSize="small" />
                        </IconButton>
                        <IconButton className={classes.iconButton}>
                            <ImageOutlined fontSize="small" />
                        </IconButton>
                        <IconButton className={classes.iconButton}>
                            <ArchiveOutlined fontSize="small" />
                        </IconButton>
                        <IconButton
                            className={classes.iconButton}
                            ref={anchorRef}
                            aria-controls={open ? "menu-list-grow" : undefined}
                            aria-haspopup="true"
                            onClick={handleToggle}
                        >
                            <MoreVertOutlined fontSize="small" />
                            {renderMenu}
                        </IconButton>
                        <IconButton className={classes.iconButton}>
                            <UndoOutlined fontSize="small" />
                        </IconButton>
                        <IconButton className={classes.iconButton}>
                            <RedoOutlined fontSize="small" />
                        </IconButton >
                        <Button className={classes.closeButton} onClick={updateNotes}>
                            Close
                        </Button>
                    </Paper>
                </DialogActions>
            </Paper>
        </Dialog>
    );
}