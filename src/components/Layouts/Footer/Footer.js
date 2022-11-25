
import React from "react";
import './footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
	return (
		<footer>
			<div className="main-footer">
				<div className="container">
					<div className="row">
						{/*column 1*/}
						<div className="col-md-3 col-sm-6">
							<h4>CONTENT</h4>
							<ul className="list-unstyled">
								<li>New assets</li>
								<li>The most popular content</li>
								<li>Search trends</li>
								<li>Blog</li>
							</ul>
						</div>

						{/*column 2*/}
						<div className="col-md-3 col-sm-6">
							<h4>INFORMATION</h4>
							<ul className="list-unstyled">
								<li>Pricing</li>
								<li>Business</li>
								<li>Jobs</li>
								<li>Sell your content</li>
							</ul>
						</div>
						{/*column 3*/}
						<div className="col-md-3 col-sm-6">
							<h4>LEGAL </h4>
							<ul className="list-unstyled">
								<li>Terms and conditions</li>
								<li>License agreement</li>
								<li>Privacy policy</li>
								<li>Copyright information</li>
								<li>Cookies policy</li>
								<li>Cookies settings</li>
							</ul>
						</div>	{/*column 4*/}
						<div className="col-md-3 col-sm-6">
							<h4> SUPPORT</h4>
							<ul className="list-unstyled">
								<li>FAQ</li>
								<li>Contact</li>
							</ul>

						</div>	{/*column 5*/}
						<div className="col-md-6 col-sm-6">
							<h4> SOCIAL MEDIA</h4>
							<ul className="list-unstyled">
								<FacebookIcon className="ficon"/>
								<TwitterIcon className="ticon"/>
								<PinterestIcon className="picon"/>
								<InstagramIcon className="iicon" />
                                <YouTubeIcon className="yicon"/>
							</ul>
						</div>
						</div>
						{/*Footer-button*/}
						
						<div className="footer-button">
							<img src="https://freepik.cdnpk.net/img/logos/freepikcompany-footer.svg" alt="Freepik Company" width="191" height="27"></img>
							<p className="text-xs-center">
								 Copyright ©  2010-2022 Freepik Company S.L. All rights reserved.
							</p>
						</div>
						
						<div className="dropdown show">
  <div className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    English
  </div>

  <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li className="dropdown-item" href="#">English </li>
    <li className="dropdown-item" href="#">Español </li>
    <li className="dropdown-item" href="#">Français</li>
    <li className="dropdown-item" href="#"> 日本語 </li>
    <li className="dropdown-item" href="#"> Polski </li>
    <li className="dropdown-item" href="#">Pусский </li>
    <li className="dropdown-item" href="#">Nederlands</li>
    <li className="dropdown-item" href="#"> Italiano</li>
    <li className="dropdown-item" href="#">한국어 </li>
  </ul>
</div>
				</div>
			</div>
		</footer>
	)
}
export default Footer;
