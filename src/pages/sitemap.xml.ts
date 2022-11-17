const EXTERNAL_DATA_URL = 'https://www.pousadaempipa.com.br/quartos';

function generateSiteMap(rooms) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>https://www.pousadaempipa.com.br</loc>
     </url>
     <url>
       <loc>https://www.pousadaempipa.com.br/localizacao</loc>
     </url>
     <url>
      <loc>https://www.pousadaempipa.com.br/como_chegar</loc>
    </url>
     ${rooms
       .map(({ page }) => {
         return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}/${page}`}</loc>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const request = await fetch(EXTERNAL_DATA_URL);
  const rooms = await request.json();

  // We generate the XML sitemap with the rooms data
  const sitemap = generateSiteMap(rooms);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;