import firebase from './firebase';
const uid = localStorage.getItem('uId')

export function setNoteInFireBase(noteTitleValue, noteItemValue, pinStatus, archive) {
    console.log('uf : ' + uid);
    firebase.database().ref('/users/' + uid + '/Notes/').push({
        Title: noteTitleValue,
        Content: noteItemValue,
        PinStatus: pinStatus,
        Archive: archive,
        Trash: false
    })
}

export function fetchNotesFromFireBase(callback) {
    firebase.database().ref('/users/' + uid + '/Notes/').on('value', (snapshot) => {
        let snapObj = snapshot.val();
        callback(snapObj)
    })
}

export function archiveNotes(callback) {
    firebase.database().ref('/users/' + uid + '/Notes/').orderByChild('Archive').equalTo(true).on('value', (snapshot) => {
        let snapObj = snapshot.val();
        callback(snapObj)
    })
}

export function updatePinStatus(key, status) {
    console.log(key);
    console.log(status);
    firebase.database().ref('/users/' + uid + '/Notes/' + key + '/').update({
        PinStatus: status
    })
}

export function editNotesFromFireBase(key, noteTitleValue, noteItemValue, pinStatus) {
    firebase.database().ref('/users/' + uid + '/Notes/' + key + '/').update({
        Title: noteTitleValue,
        Content: noteItemValue,
        PinStatus: pinStatus
    })
}

export function deleteNotes(key) {
    console.log(key);
    firebase.database().ref('/users/' + uid + '/Notes/' + key + '/').remove()
}

export function updateArchive(key, archive) {
    firebase.database().ref('/users/' + uid + '/Notes/' + key + '/').update({
        pinStatus: false,
        Archive: archive
    })
}

export function trashNotes(callback) {
    firebase.database().ref('/users/' + uid + '/Notes/').orderByChild('Trash').equalTo(true).on('value', (snapshot) => {
        let snapObj = snapshot.val();
        callback(snapObj)
    })
}

export function updateTrash(key, trash) {
    firebase.database().ref('/users/' + uid + '/Notes/' + key + '/').update({
        Trash: trash
    })
}

export function addLabel(labelvalue) {
    firebase.database().ref('/users/' + uid + '/Label/').push({
        Label: labelvalue
    })
}

export function getLabel(callback) {
    firebase.database().ref('/users/' + uid + '/Label/').on('value', (snapshot) => {
        callback(snapshot.val())
    })
}

export function updateLabels(key, label) {
    firebase.database().ref('/users/' + uid + '/Label/' + key + '/').update({
        Label: label
    })
}

export function deleteLabel(key) {
    firebase.database().ref('/users/' + uid + '/Label/' + key + '/').remove()
}


export function getLabelNote(NoteKey, labelKey, labelName) {
    firebase.database().ref('/users/' + uid + '/Notes/' + NoteKey + '/NoteLebel/' + labelKey + '/').set({
        LabelName: labelName
    })
}
export function addLabelsInNote(notekey, labelId, labelName) {
    firebase.database().ref('/users/' + uid + '/Notes/' + notekey + '/NoteLabel/' + labelId + '/').set({
        LabelName: labelName
    });
    // firebase.database().ref('/users/' + uid + '/Label/' + labelId + '/LabelNote/').push({
    //     NoteId: notekey
    // });
}

export function removeLabelsInNote(NoteKey, labelKey, labelNoteKey) {
    firebase.database().ref('/users/' + uid + '/Notes/' + NoteKey + '/NoteLabel/' + labelKey + '/').remove();
    //firebase.database().ref('/users/' + uid + '/Label/' + labelKey + '/LabelNote/' + labelNoteKey + '/').remove();
}

export function getLabelFromNote(labelKey, callback) {
    firebase.database().ref('/users/' + uid + '/Label/' + labelKey + '/LabelNote/').on('value', (snapshot) => {
        callback(snapshot.val())
    })
}