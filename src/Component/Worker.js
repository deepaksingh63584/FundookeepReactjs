
export default () => {
    /* eslint-disable-next-line no-restricted-globals */
    self.addEventListener('message', e => {
        const snapObj = e.data
        let pinNotes = {}
        let unPinNotes = {}
        if (snapObj !== null && snapObj !== undefined) {
            Object.getOwnPropertyNames(snapObj).map((key, index) => {
                if (snapObj[key].PinStatus === true && snapObj[key].Archive === false && snapObj[key].Trash === false) {
                    pinNotes[key] = snapObj[key]
                }
                else if (snapObj[key].PinStatus === false && snapObj[key].Archive === false && snapObj[key].Trash === false) {
                    unPinNotes[key] = snapObj[key]
                }
                return 0
            })
        }
        /* eslint-disable-next-line no-restricted-globals */
        self.postMessage([pinNotes, unPinNotes])
    })
}