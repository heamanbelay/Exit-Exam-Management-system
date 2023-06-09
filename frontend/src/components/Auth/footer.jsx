import React from 'react';
import './footer.css'; 

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-column">
          <h3>Column 1</h3>
          <ul>
            <li><a href="#">Link 1</a></li>
            <li><a href="#">Link 2</a></li>
            <li><a href="#">Link 3</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Column 2</h3>
          <ul>
            <li><a href="#">Link 4</a></li>
            <li><a href="#">Link 5</a></li>
            <li><a href="#">Link 6</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Column 3</h3>
          <ul>
            <li><a href="#">Link 7</a></li>
            <li><a href="#">Link 8</a></li>
            <li><a href="#">Link 9</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
// import React from 'react';
// import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

// export default function Footer() {
//   return (
//     <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
//       <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
//         <div className='me-5 d-none d-lg-block'>
//           <span>Get connected with us on social networks:</span>
//         </div>

//         <div>
//           <a href='' className='me-4 text-reset'>
//             <MDBIcon fab icon="facebook-f" />
//           </a>
//           <a href='' className='me-4 text-reset'>
//             <MDBIcon fab icon="twitter" />
//           </a>
//           <a href='' className='me-4 text-reset'>
//             <MDBIcon fab icon="google" />
//           </a>
//           <a href='' className='me-4 text-reset'>
//             <MDBIcon fab icon="instagram" />
//           </a>
//           <a href='' className='me-4 text-reset'>
//             <MDBIcon fab icon="linkedin" />
//           </a>
//           <a href='' className='me-4 text-reset'>
//             <MDBIcon fab icon="github" />
//           </a>
//         </div>
//       </section>

//       <section className=''>
//         <MDBContainer className='text-center text-md-start mt-5'>
//           <MDBRow className='mt-3'>
//             <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
//               <h6 className='text-uppercase fw-bold mb-4'>
//                 <MDBIcon icon="gem" className="me-3" />
//                 Company name
//               </h6>
//               <p>
//                 Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
//                 consectetur adipisicing elit.
//               </p>
//             </MDBCol>

//             <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
//               <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
//               <p>
//                 <a href='#!' className='text-reset'>
//                   Angular
//                 </a>
//               </p>
//               <p>
//                 <a href='#!' className='text-reset'>
//                   React
//                 </a>
//               </p>
//               <p>
//                 <a href='#!' className='text-reset'>
//                   Vue
//                 </a>
//               </p>
//               <p>
//                 <a href='#!' className='text-reset'>
//                   Laravel
//                 </a>
//               </p>
//             </MDBCol>

//             <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
//               <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
//               <p>
//                 <a href='#!' className='text-reset'>
//                   Pricing
//                 </a>
//               </p>
//               <p>
//                 <a href='#!' className='text-reset'>
//                   Settings
//                 </a>
//               </p>
//               <p>
//                 <a href='#!' className='text-reset'>
//                   Orders
//                 </a>
//               </p>
//               <p>
//                 <a href='#!' className='text-reset'>
//                   Help
//                 </a>
//               </p>
//             </MDBCol>

//             <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
//               <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
//               <p>
//                 <MDBIcon icon="home" className="me-2" />
//                 New York, NY 10012, US
//               </p>
//               <p>
//                 <MDBIcon icon="envelope" className="me-3" />
//                 info@example.com
//               </p>
//               <p>
//                 <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
//               </p>
//               <p>
//                 <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
//               </p>
//             </MDBCol>
//           </MDBRow>
//         </MDBContainer>
//       </section>

//       <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
//         © 2021 Copyright:
//         <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
//           MDBootstrap.com
//         </a>
//       </div>
//     </MDBFooter>
//   );
// }
// // import React from 'react';
// // import SimpleReactFooter from 'simple-react-footer';

// // const Footer = () => {
// //   // Define the data for the footer
// //   const columns = [{
// //     title: "Column 1",
// //     resources: [{
// //       name: "Item 1",
// //       link: "/item1"
// //     },{
// //       name: "Item 2",
// //       link: "/item2"
// //     },{
// //       name: "Item 3",
// //       link: "/item3"
// //     },{
// //       name: "Item 4",
// //       link: "/item4"
// //     }]
// //   },{
// //     title: "Column 2",
// //     resources: [{
// //       name: "Item 5",
// //       link: "/item5"
// //     },{
// //       name: "Item 6",
// //       link: "/item6"
// //     }]
// //   },{
// //     title: "Column 3",
// //     resources: [{
// //       name: "Item 7",
// //       link: "/item7"
// //     },{
// //       name: "Item 8",
// //       link: "/item8"
// //     }]
// //   }];

// //   return <SimpleReactFooter
 
// //     columns={columns}
// //     linkedin="lorem_ipsum_on_linkedin"
// //     facebook="lorem_ipsum_on_fb"
// //     twitter="lorem_ipsum_on_twitter"
// //     instagram="lorem_ipsum_live"
// //     youtube="UCFt6TSF464J8K82xeA?"
// //     pinterest="lorem_ipsum_collections"
// //     copyright="black"
// //     iconColor="black"
// //     backgroundColor="lightgrey"
// //     fontColor="black"
// //     copyrightColor="darkgrey"
// //   />;
// // }

// // export default Footer;