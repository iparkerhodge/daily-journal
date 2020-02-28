/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
const JournalEntryComponent = (entry) => {
    return `
        <section class="journalEntry">
            <div>Date: <span class="date">${entry.date}</span></div>
            <div>Concept: ${entry.concept}</div>
            <div>Entry: ${entry.entry}</div>
            <div>Mood: ${entry.mood}</div>
        </section>
    `    
}

export default JournalEntryComponent