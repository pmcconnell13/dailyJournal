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
      <div>
        <button id="clearDateButton" className="x" onClick={findEntrySubmit}>Clear</button>
      </div>
    </div>
  )
}

export default PreviousEntries;