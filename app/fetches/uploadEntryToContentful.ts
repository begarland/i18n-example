

export const uploadEntryToContentful = () => {
  const raw = JSON.stringify({
    "fields": {
        "title": {
        "en-US": "Hello, World!",
        "fr-CA": "Bonjour"
        },
        "description": {
        "en-US": "this is working! woohoo!",
        "fr-CA": "Ça marche! Youpi!"
        }
    }
    });


    const requestOptions: any = {
        method: "POST",
        body: raw,
        redirect: "follow"
    };

    

    fetch(`/api/upload-entry`, requestOptions)
}

