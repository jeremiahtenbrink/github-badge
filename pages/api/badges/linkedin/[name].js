import { runCoors } from "../../utils/cors";

async function handler( req, res ){
  const { name } = req.query;
  // Run the middleware
  runCoors( req, res )
    .then( result => {
      debugger;
      const svg = getLinkedInSvg( name );
      res.setHeader( "content-type", "image/svg+xml" );
      res.send( svg );
    } ).catch( err => {
    
    // Rest of the API logic
    res.status( 400 ).json( { message: err.message } );
  } );
  
}

const getLinkedInSvg = ( name, height = 30 ) => {
  return `
  <svg width="118" height="${ height }" viewBox="0 0 118 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="linkedInBadge">
<g clip-path="url(#clip0)">
<rect width="118" height="15" rx="2" fill="#006699"/>
<g id="linkedin-icon-2 1" clip-path="url(#clip1)">
<g id="Group">
<path id="Vector" d="M0.928711 1.80722C0.928711 1.27979 1.40257 0.851685 1.9867 0.851685H14.186C14.7703 0.851685 15.2439 1.27979 15.2439 1.80722V13.2356C15.2439 13.7632 14.7703 14.191 14.186 14.191H1.9867C1.40262 14.191 0.928711 13.7632 0.928711 13.2358V1.80706V1.80722Z" fill="white"/>
<path id="Vector_2" d="M5.27963 12.0068V6.00139H3.1375V12.0068H5.27986H5.27963ZM4.20901 5.18159C4.95586 5.18159 5.42083 4.72045 5.42083 4.14415C5.40685 3.55472 4.95586 3.10645 4.22322 3.10645C3.49006 3.10645 3.01123 3.55472 3.01123 4.1441C3.01123 4.7204 3.47603 5.18154 4.19498 5.18154H4.20884L4.20901 5.18159ZM6.46534 12.0068H8.60731V8.65346C8.60731 8.47421 8.62129 8.2945 8.67788 8.16647C8.83266 7.80772 9.18512 7.43635 9.77702 7.43635C10.5519 7.43635 10.8621 7.98702 10.8621 8.79441V12.0068H13.004V8.56347C13.004 6.71895 11.9474 5.8606 10.5381 5.8606C9.38262 5.8606 8.87516 6.46238 8.59322 6.87225H8.60748V6.0016H6.46545C6.49341 6.56497 6.46528 12.007 6.46528 12.007L6.46534 12.0068Z" fill="#006699"/>
</g>
</g>
<text id="@jeremiahtenbrink" fill="white" xml:space="preserve" style="white-space: pre" font-family="Roboto" font-size="9" font-weight="bold" letter-spacing="0em"><tspan x="28.8787" y="10.5762">${ name }</tspan></text>
</g>
</g>
<defs>
<clipPath id="clip0">
<rect width="118" height="15" rx="2" fill="white"/>
</clipPath>
<clipPath id="clip1">
<rect width="14.3727" height="13.3929" fill="white" transform="translate(0.919678 0.816772)"/>
</clipPath>
</defs>
</svg>
`;
};

export default handler;
