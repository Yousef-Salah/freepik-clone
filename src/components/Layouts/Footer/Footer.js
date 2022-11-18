
import React from "react";
import './footer.css'

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
						<div className="col-md-3 col-sm-6">
							<h4> SOCIAL MEDIA</h4>
							<ul className="list-unstyled">
								<li>aaas</li>
								<li>bbbb</li>
								<li>cccc</li>
								<li>dddd</li>
							</ul>
						</div>

						{/*Footer-button*/}
						<div className="footer-button">
							<img src="https://freepik.cdnpk.net/img/logos/freepikcompany-footer.svg" alt="Freepik Company" width="191" height="27"></img>
							<p className="text-xs-center">
								Freepik Company - Copyright ©  2010-2022 Freepik Company S.L. All rights reserved.
							</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
export default Footer;
