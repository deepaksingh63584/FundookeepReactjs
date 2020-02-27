import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import { useStyles } from '../CSS/NoteCardCss'
import { Paper, Popper, Typography, FormControl, FormGroup, FormControlLabel, Popover } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVertOutlined';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { updatePinStatus, updateTrash } from '../FirebaseServices';
import { addLabelsInNote, removeLabelsInNote } from '../FirebaseServices';
import { Checkbox } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    root: {}

}));

export default function MoreOption(props) {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const [addLabel, setAddlabel] = React.useState(false);

    const labels = props.labels
    // const Nkey = React.useContext(UserContext)

    const handleToggle = () => {
        if (addLabel === false) {
            setOpen(prevOpen => !prevOpen);
        }
    };

    const handleMoreClose = event => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }
        prevOpen.current = open;
    }, [open]);

    const openAddLabel = () => {
        setAddlabel(prevOpen => !prevOpen);
    };

    const closeAddLabel = event => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setAddlabel(false);
    };

    const renderMorePopper = (
        <Popper
            open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal
            style={{ backgroundColor: "#fff", zIndex: 1 }}
        >
            {({ TransitionProps, placement }) => (
                <Grow
                    {...TransitionProps}
                    style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                >
                    <Paper>
                        <ClickAwayListener onClickAway={handleMoreClose}>
                            <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                <MenuItem
                                    onClick={() => {
                                        updateTrash(props.Nkey, true)
                                    }}
                                    dense
                                >
                                    Delete note
                        </MenuItem>
                                <MenuItem
                                    dense
                                    onClick={openAddLabel}
                                >
                                    {
                                        props.NoteObj.NoteLabel !== undefined && props.NoteObj.NoteLabel !== null
                                            ? 'Change label' : 'Add label'
                                    }

                                </MenuItem>
                                <MenuItem onClick={handleMoreClose} dense>Add drawing</MenuItem>
                                <MenuItem onClick={handleMoreClose} dense>Make a copy</MenuItem>
                                <MenuItem onClick={handleMoreClose} dense>Show checkboxes</MenuItem>
                                <MenuItem onClick={handleMoreClose} dense>Copy to google docs</MenuItem>
                            </MenuList>
                        </ClickAwayListener>
                    </Paper>
                </Grow>
            )}
        </Popper>
    );

    const renderAddLabel = (
        <Popover
            className={(classes.morePopper)}
            open={addLabel}
            anchorEl={anchorRef.current}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            onClose={closeAddLabel}
        >
            <Paper className={classes.addLabelPaper}>
                <Typography>Label Note</Typography>
                {
                    labels !== null &&
                    <FormControl component="fieldset">
                        <FormGroup>
                            {
                                Object.getOwnPropertyNames(labels).map((key) => (
                                    <LabelCheckBoxes
                                        labelData={labels[key]}
                                        labelId={key}
                                        NoteObj={props.NoteObj}
                                        Nkey={props.Nkey}
                                    />
                                ))
                            }
                        </FormGroup>
                    </FormControl>
                }
            </Paper>
        </Popover>

    );

    return (
        <React.Fragment>
            <IconButton className={classes.iconButton}
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
            >
                <MoreVertIcon fontSize="small" />
                {renderMorePopper}
            </IconButton>
            {renderAddLabel}
        </React.Fragment>
    );
}

export function removeLabelUncheck(labeledNotes, noteKey, labelId, callback) {
    let labeledNoteKey;
    if (labeledNotes !== null && labeledNotes !== undefined) {
        Object.getOwnPropertyNames(labeledNotes).map((key) => (
            labeledNotes[key].NoteId === noteKey ? labeledNoteKey = key : null
        ))
    }
    removeLabelsInNote(noteKey, labelId, labeledNoteKey);
    if (callback !== null && callback !== undefined) callback()
}

function LabelCheckBoxes(props) {

    const [check, setCheck] = React.useState(false)

    // const noteKey = React.useContext(UserContext)
    const labelName = props.labelData.Label

    React.useEffect(() => {
        if (props.NoteObj.NoteLabel !== null && props.NoteObj.NoteLabel !== undefined) {
            Object.getOwnPropertyNames(props.NoteObj.NoteLabel).map((key) => (
                key === props.labelId &&
                setCheck(true)
            ))
        }
        else {
            setCheck(false)
        }
    }, [props.NoteObj.NoteLabel, props.labelId])


    return (
        <React.Fragment>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={check}
                        value={labelName}
                        onChange={() => {
                            !check ?
                                addLabelsInNote(props.Nkey, props.labelId, labelName)
                                : removeLabelUncheck(props.labelData.LabeledNotes, props.Nkey, props.labelId,
                                    () => {
                                        setCheck(false)
                                    }
                                )
                        }}
                        size="small"
                        color="default"
                    />
                }
                label={labelName}
            />
        </React.Fragment>
    );
}












































// import React from 'react';
// import { Dialog, InputBase, Paper, ListItem, ListItemText, List, Checkbox } from '@material-ui/core';
// import { makeStyles } from "@material-ui/core/styles";

// const useStyle = makeStyles(theme => ({
//     root: {
//         display: 'flex',
//         flexDirection: 'column',
//         padding: theme.spacing(2),
//         border: 'none',
//         boxShadow: 'none',
//     },

//     paper: {
//         border: 'none',
//         boxShadow: 'none',
//         marginBottom: theme.spacing(0.5),
//         marginTop: theme.spacing(0.5),
//     },

//     paper2: {
//         border: 'none',
//         boxShadow: 'none',
//         marginBottom: theme.spacing(0),
//         marginTop: theme.spacing(0),
//     }
// }))

// function EditLabels(props) {
//     const classes = useStyle();

//     return (
//         <div>
//             <Dialog open={props.DialogState} onClose={props.CloseDialog} >
//                 <Paper className={classes.root}>
//                     <Paper className={classes.paper}>
//                         Edit note
//                     </Paper>

//                     <Paper className={classes.paper}>
//                         <List
//                             dense={true}
//                             disablePadding={true}
//                         >
//                             <ListItem dense={true} disableGutters={true}>
//                                 <ListItemIcon>
//                                     <IconButton
//                                         className={classes.iconButton}
//                                         onClick={() => setBtnState(!btnState)}
//                                     >
//                                         {btnState ? <ClearIcon fontSize="small" /> : <AddIcon fontSize="small" />}
//                                     </IconButton>
//                                 </ListItemIcon>
//                                 <ListItemText>
//                                     <InputBase
//                                         placeholder="Enter label Name"
//                                         className={classes.inputBase}
//                                         style={{ borderBottom: btnState ? '1px solid lightgray' : 'none' }}
//                                     />
//                                 </ListItemText>
//                             </ListItem>
//                         </List>
//                     </Paper>

//                     {
//                         labels !== null &&
//                         Object.getOwnPropertyNames(labels).map((key, index) => (
//                             <Labelnote
//                                 label={labels[key].Label}
//                                 labelvalue={key}
//                             />
//                         ))
//                     }
//                 </Paper>
//             </Dialog>
//         </div>
//     );
// };

// function Labelnote(props) {

//     const classes = useStyle();

//     return (
//         <Paper className={classes.paper2}>
//             <List
//                 dense={true}
//             >
//                 <ListItem dense={true} disableGutters={true}>
//                     <ListItemText>
//                         <InputBase
//                             placeholder="Enter Label Name"
//                             className={classes.inputBase}
//                         />
//                     </ListItemText>
//                 </ListItem>
//             </List>
//         </Paper>
//     );
// }

// export default EditLabels;


