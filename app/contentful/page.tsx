require("dotenv").config();
import * as contentful from 'contentful'
import Markdown from 'react-markdown'

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

const Page = async () => {
    let data = await getData()

    return (
      <>
      <h1>{data.title}</h1>
      <Markdown>{data.description}</Markdown>
      </>
    )
}

export default Page