import React from 'react';

const JournalListEntry = ({ entry }) => {
  return(
    <div>
      <div>{new Date(entry.entry_date).toDateString()}</div>
      <div>{entry.entry_body}</div>
    </div>
  )
}

export default JournalListEntry;