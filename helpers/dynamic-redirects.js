const { createClient } = require('next-sanity');

const previewClient = createClient({
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2021-03-25',
  useCdn: true
});

const getClient = () => previewClient;

module.exports = async () => {
  const query = `
  *[_type == "admin"][0]{ 
    appAdsTxtFile { 
      asset-> { 
        url
      } 
    }
  }
`;
  const data = await getClient().fetch(query);
  const redirects = Array.from(Array(1), (e, i) => {
    return {
      source: `/app-ads.txt`,
      destination: `${data.appAdsTxtFile.asset.url}`,
      permanent: false,
    };
  });

  redirects.push({
    source: '/general-terms-and-conditions-of-use-of-the-homa-lab-platform-2021-11-10',
    destination: 'https://homagames.com/terms',
    permanent: false,
  })
  return redirects;
};