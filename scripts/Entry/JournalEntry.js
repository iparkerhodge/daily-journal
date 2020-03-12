/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
const JournalEntryComponent = (entry) => {
    return `
        <section class="entry" id="${entry.id}">
            <button id="deleteEntry--${entry.id}">x</button>
            <div>Date: <span class="entry__date">${entry.date}</span></div>
            <div>Concept: ${entry.concept}</div>
            <div>Entry: ${entry.entry}</div>
            <div>Mood: ${entry.mood}</div>
        </section>
    `    
}

export default JournalEntryComponent

