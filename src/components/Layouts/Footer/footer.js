import React from 'react';

import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';
import { CDBFooter, CDBFooterLink, CDBBtn, CDBIcon, CDBContainer, CDBBox } from 'cdbreact'
import './FooterStyles.css';

const Footer = () => {
  return (
    <MDBFooter className='text-center text-white my-footer' style={{ backgroundColor: '#374957' }}>
      <CDBFooter className="shadow">
        <CDBBox display="flex" flex="column" className=" mx-auto py-5" style={{ width: '80%' }}>
          <CDBBox display="flex" justifyContent="between" className="flex-wrap">
            <CDBBox>
              <a href="/" className="text-#869FB2">
                <img
                  alt="logo"
                  src={require('../../../assets/images/icons/freepik (1).png')}
                  width="100px"
                />
                <span className="ml-3 h5 font-weight-bold">Devwares</span>
              </a>
            </CDBBox>
            <CDBBox display="flex" style={{ width: '50%' }} justifyContent="between">
              <CDBBox>
                <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                  CONTENT
                </p>
                <CDBBox flex="column" display="flex" style={{ cursor: 'pointer', padding: '0' }}>
                  <CDBFooterLink href="/"> New assets</CDBFooterLink>
                  <CDBFooterLink href="/">The most popular content</CDBFooterLink>
                  <CDBFooterLink href="/">Search trends</CDBFooterLink>
                  <CDBFooterLink href="/">Blog</CDBFooterLink>
                </CDBBox>
              </CDBBox>
              <CDBBox>
                <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                  INFORMATION
                </p>
                <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
                  <CDBFooterLink href="/">Windframe</CDBFooterLink>
                  <CDBFooterLink href="/">Loop</CDBFooterLink>
                  <CDBFooterLink href="/">Contrast</CDBFooterLink>
                </CDBBox>
              </CDBBox>
            </CDBBox>
          </CDBBox>
          <CDBBox display="flex" className="mt-4" justifyContent="between">
            <small className="ml-2">&copy;</small>
            <CDBBox display="flex">
              <CDBBtn flat color="dark" className="p-2">
                <CDBIcon fab icon="facebook-f" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="mx-3 p-2">
                <CDBIcon fab icon="twitter" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="p-2">
                <CDBIcon fab icon="instagram" />
              </CDBBtn>
            </CDBBox>
          </CDBBox>
        </CDBBox>
      </CDBFooter>



      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        Copyright ©  2010-2022 Freepik Company S.L. All rights reserved
        <a className='text-white' href='#'>5
        </a>
      </div>
    </MDBFooter>
  );
}
export default Footer