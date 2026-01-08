require("dotenv").config();
import * as contentful from 'contentful'
import UploadToContentfulButton from '../components/uploadToContentfulButton';

const client = contentful.createClient({
  space: `${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`,
  accessToken: `${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
});


async function getData() {
    let data: any;

    await client.getEntries({
        content_type: 'title',
        locale: 'fr-CA'
    }).then(function (entries) {
       data = entries
    });

    return data?.items[0].fields;
}

const Page =  async () => {
    let data = await getData()

    return (
      <>
      on this page, we will upload/edit an entry from contentful

      <UploadToContentfulButton />
      </>
    )
}

export default Page