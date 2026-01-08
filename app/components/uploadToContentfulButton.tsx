"use client"

import { uploadEntryToContentful } from "../fetches/uploadEntryToContentful"

const UploadToContentfulButton = () => {
    return (
      <>
         <button onClick={uploadEntryToContentful}>test uploads!</button>
      </>
    )
}

export default UploadToContentfulButton