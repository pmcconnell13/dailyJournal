import React from 'react';

const PreviousEntries = ({date, keyword, handleChange, findEntrySubmit}) => {
  return(
    <div>
      <h3>View previous entries</h3>
      <label>Entry Keyword:</label>
      <input
      id="keyword"
      type="text"
      name="keyword"
      value={keyword}
      onChange={handleChange}
      />
      <label>Entry Date:</label>
      <input
      id="dateSearch"
      type="date"
      name="date"
      max={new Date().toISOString().split("T")[0]}
      onChange={handleChange}
      />
      <button onClick={findEntrySubmit}>Find Entries</button>
    </div>
  )
}

export default PreviousEntries;