import React from 'react';
import JournalListEntry from './journalListEntry.jsx';

const JournalList = ({ previousEntries, keyword, date }) => {
  return(
    <div id="journalList">
      {
        previousEntries.sort((a, b) => b.journal_id - a.journal_id)
          .map((entry) => {
          if (entry.entry_body.toLowerCase().indexOf(keyword.toLowerCase()) !== -1) {
            if (date === '') {
              return <JournalListEntry key={entry.journal_id} entry={entry}/>
            } else if (entry.entry_date.toString().split("T")[0] === date) {
              return <JournalListEntry key={entry.journal_id} entry={entry}/>
            }
          }
          // || (entry.entry_date && entry.entry_date.toString().split("T")[0] === date)) {
          //   return <JournalListEntry key={entry.journal_id} entry={entry}/>
          // }
        })
      }
    </div>
  )
}

export default JournalList;