/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */
const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const noteStateChangedEvent = new CustomEvent("noteStateChanged")

    eventHub.dispatchEvent(noteStateChangedEvent)
}


let entries = []

export const getEntries = () => {
    return fetch('http://localhost:3000/entries')
    .then(resp => resp.json())
    .then(parsedEntries => {
        entries = parsedEntries
    })
}

export const useJournalEntries = () => {
    const sortedByDate = entries.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate.slice()
}

export const saveEntry = entry => {
    return fetch('http://localhost:3000/entries', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
    })
    .then(getEntries)
    .then(dispatchStateChangeEvent)
}

export const deleteEntry = id => {
    return fetch(`http://localhost:3000/entries/${id}`, {
        method: "DELETE",
    })
    .then(getEntries)
    .then(dispatchStateChangeEvent)
}