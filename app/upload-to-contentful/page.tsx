require("dotenv").config();
import * as contentful from 'contentful'
import UploadToContentfulButton from '../../components/UploadToContentfulButton';

const Page =  async () => {

    return (
      <>
      on this page, we will upload/edit an entry from contentful

      <UploadToContentfulButton />
      </>
    )
}

export default Page