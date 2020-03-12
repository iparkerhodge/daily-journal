/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { useJournalEntries, deleteEntry } from "./JournalDataProvider.js"
import JournalEntryComponent from "./JournalEntry.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".entryContainer")

const EntryListComponent = () => {
    // Use the journal entry data from the data provider component
    const entries = useJournalEntries()

    for (const entry of entries) {
        /*
            Invoke the component that returns an
            HTML representation of a single entry
        */
        contentTarget.innerHTML += JournalEntryComponent(entry)
    }
}

export default EntryListComponent

contentTarget.addEventListener("click", clickEvent => {
    const entryID = clickEvent.target.id.split("--")[1]

    if (clickEvent.target.id.includes("deleteEntry--")) {
        deleteEntry(entryID)
    }
})

eventHub.addEventListener("noteStateChanged", reRender => {
    contentTarget.innerHTML = ""
    EntryListComponent()
})