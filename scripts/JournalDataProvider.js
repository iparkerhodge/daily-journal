/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data. Can't Touch This.
const journal = [
    {
        date: "02/17/2020",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "ok"
    },

    {
        date: "02/24/2020",
        concept: "Modular JavaScript",
        entry: "We talked about using the single responsibility principle to create multiple .js files to perfrom a single function and importing those files into a main.js",
        mood: "sad"
    },

    {
        date: "02/28/2020",
        concept: "JavaScript",
        entry: "Added JS to daily journal in order to render journal entries on the journal entries page",
        mood: "happy"
    }
]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}