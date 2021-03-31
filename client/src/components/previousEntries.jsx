import React from 'react';

const PreviousEntries = ({date, keyword, handleChange, findEntrySubmit}) => {
  return(
    <div id="previousEntriesDiv">
      <div id="keywordSearch">
        <label>Entry Keyword: </label>
        <input
        id="keywordInput"
        type="text"
        name="keyword"
        value={keyword}
        onChange={handleChange}
        />
      </div>
      <div id="dateSearch">
        <label>Entry Date: </label>
        <input
        id="dateInput"
        type="date"
        name="date"
        max={new Date().toISOString().split("T")[0]}
        onChange={handleChange}
        />
      </div>
      {/* <div id="searchEntriesButton">
        <button onClick={findEntrySubmit}>Search Entries</button>
      </div> */}
    </div>
  )
}

export default PreviousEntries;