import { saveEntry } from "../Entry/JournalDataProvider.js"

const contentTarget = document.querySelector(".journal")

const render = () => {
    contentTarget.innerHTML = `
    <form class="journal__form" action="entries.html">
    <h1 class="title">Daily Journal</h1>
        <fieldset>
            <label for="journalDate">Date of entry</label><br>
            <input type="date" name="journalDate" id="journalDate">
        </fieldset>
        <fieldset>
            <label for="journalConcepts">Concepts covered</label><br>
            <input type="text" name="journalConcepts" id="journalConcepts" value="React.js">
        </fieldset>
        <fieldset>
            <label for="journalEntry">Journal entry</label><br>
            <textarea name="journalEntry" id="journalEntry" cols="42" rows="8">Today we learned...</textarea>
        </fieldset>
        <fieldset>
            <label for="journalMood">Mood for the day</label><br>
            <select name="journalMood" id="journalMood">
                <option value="sad">sad</option>
                <option value="ok">ok</option>
                <option value="happy">happy</option>
            </select>
        </fieldset>
        <button id="saveEntry">Save Entry</button>
    </form>
    `
}

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveEntry") {
        const journalDate = document.getElementById("journalDate")
        const journalConcepts = document.getElementById("journalConcepts")
        const journalEntry = document.getElementById("journalEntry")
        const journalMood = document.getElementById("journalMood")

        // Make a new object representation of a note
        const newEntry = {
            // Key/value pairs here
            date: journalDate.value,
            concept: journalConcepts.value,
            entry: journalEntry.value,
            mood: journalMood.value
        }

        // Change API state and application state
        saveEntry(newEntry)
        location.replace("entries.html")
    }
})


const JournalForm = () => {
    render()
}

export default JournalForm