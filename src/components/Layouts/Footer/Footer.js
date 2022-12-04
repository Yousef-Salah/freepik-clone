
import React from "react";
import './footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import{Link} from 'react-router-dom';

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
								<li><Link className="footer-hover"  to="/search/assets" >New assets</Link></li>
								<li><Link className="footer-hover"  to="/search/the most popular content">The most popular content</Link></li>
								<li><Link className="footer-hover"  to="/search/trends">Search trends</Link></li>
								<li><Link className="footer-hover"  to="/search/blog">Blog</Link></li>
							</ul>
						</div>

						{/*column 2*/}
						<div className="col-md-3 col-sm-6">
							<h4>INFORMATION</h4>
							<ul className="list-unstyled">
								<li><Link className="footer-hover"  to="/search/procing">Pricing</Link></li>
								<li><Link className="footer-hover"  to="/search/business">Business</Link></li>
								<li><Link className="footer-hover"  to="/search/jobs">Jobs</Link></li>
								<li><Link className="footer-hover"  to="/search/sell your content">Sell your content</Link></li>
							</ul>
						</div>
						{/*column 3*/}
						<div className="col-md-3 col-sm-6">
							<h4>LEGAL </h4>
							<ul className="list-unstyled">
								<li><Link className="footer-hover"  to="/search/terms">Terms and conditions</Link></li>
								<li><Link className="footer-hover"  to="/search/license">License agreement</Link></li>
								<li><Link className="footer-hover"  to="/search/privacy">Privacy policy</Link></li>
								<li><Link className="footer-hover"  to="/search/copyright information">Copyright information</Link></li>
								<li><Link className="footer-hover"  to="/search/cookies policy">Cookies policy</Link></li>
								<li><Link className="footer-hover"  to="/search/cookies sttings">Cookies settings</Link></li>
							</ul>
						</div>	{/*column 4*/}
						<div className="col-md-3 col-sm-6">
							<h4> SUPPORT</h4>
							<ul className="list-unstyled">
								<li><Link className="footer-hover"  to="/search/faq">FAQ</Link></li>
								<li><Link className="footer-hover"  to="/search/contact">Contact</Link></li>
							</ul>

						</div>	{/*column 5*/}
						<div className="col-md-6 col-sm-6">
							<h4> SOCIAL MEDIA</h4>
							<ul className="list-unstyled">
								<FacebookIcon className="ficon" href="#"/>
								<TwitterIcon className="ticon" href="#"/>
								<PinterestIcon className="picon" href="#"/>
								<InstagramIcon className="iicon" href="#"/>
                                <YouTubeIcon className="yicon" href="#"/>
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
						<div className="dropdown-loc">
						<div className="dropdown">
  <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Engilsh
  </a>

  <ul class="dropdown-menu">
    <li><a className="dropdown-item" href="#">Português</a></li>
    <li><a className="dropdown-item" href="#">Deutsch</a></li>
    <li><a className="dropdown-item" href="#">English</a></li>
	<li><a className="dropdown-item" href="#">Español</a></li>
    <li><a className="dropdown-item" href="#">Français</a></li>
    <li><a className="dropdown-item" href="#">日本語</a></li>
    <li><a className="dropdown-item" href="#">Polski</a></li>
	<li><a className="dropdown-item" href="#">Pусский</a></li>
    <li><a className="dropdown-item" href="#">Nederlands</a></li>
    <li><a className="dropdown-item" href="#">Italiano</a></li>
    <li><a className="dropdown-item" href="#">한국어</a></li>


  </ul>
</div>

				</div>
			</div>
			</div> 

		</footer>
	)
}
export default Footer;