import React from 'react';
import JournalListEntry from './journalListEntry.jsx';

const JournalList = ({ previousEntries, keyword, date }) => {
  console.log(previousEntries)
  console.log(date)
  console.log(keyword)
  return(
    <div>
      {
        previousEntries.map((entry) => {
          console.log(entry.entry_date)
          if (entry.entry_body.indexOf(keyword) !== -1 || (entry.entry_date && entry.entry_date.toString().split("T")[0] === date)) {
            return <JournalListEntry key={entry.journal_id} entry={entry}/>
          }
        })
      }
    </div>
  )
}

export default JournalList;