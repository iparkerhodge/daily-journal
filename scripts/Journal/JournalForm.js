import { saveEntry } from "../Entry/JournalDataProvider.js"

const contentTarget = document.querySelector(".journal")

const render = () => {
    contentTarget.innerHTML = `
    <form class="journal__form" action="entries.html">
    <header class="title">Daily Journal</header>
        <fieldset>
            <label for="journalDate" class="formLabel">Date of entry</label>
            <input type="date" name="journalDate" id="journalDate">
            <label for="journalConcepts" class="formLabel">Concepts covered</label>
            <input type="text" name="journalConcepts" id="journalConcepts" value="React.js"><br>
            <label for="journalEntry" class="formLabel">Journal entry</label><br>
            <textarea name="journalEntry" id="journalEntry" cols="42" rows="5">Today we learned...</textarea><br>
            <label for="journalMood" class="formLabel">Mood for the day</label>
            <select name="journalMood" id="journalMood">
                <option value="utterly despondent">utterly despondent</option>
                <option value="sad">sad</option>
                <option value="ok">ok</option>
                <option value="happy">happy</option>
                <option value="abundantly jolly">abundantly jolly</option>
            </select>
            <button id="saveEntry">Save Entry</button>
        </fieldset>
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