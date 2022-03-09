import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer className="footer" style={{ backgroundColor: 'rgb(37, 39, 46)' }}>
                <div className="container-fluid">
                    <div className="row border-bottom-black">
                        <div className="col-sm-6 col-md-4">
                            <div className="widget dark" style={{ color: '#bbb' }}>
                                <h5 className="widget-title"
                                    style={{ marginLeft: '15%', marginBottom: '-6%', color: '#fff', paddingTop: '30px', marginTop: 0 }}>
                                    Address</h5>
                                <br />
                                <hr />
                                <p
                                    style={{ margin: '0 0 0 15%', paddingTop: '10px', display: 'block', color: '#bbb', marginBottom: '-20px' }}>
                                    Head office,
                                    <br />
                                    A-25, Delicios Food Karachi,
                                    <br />
                                    Pakistan
                                </p>
                                <ul className="list-inline mt-5" style={{ marginLeft: '15%' }}>
                                    <li className="m-0 pl-10 pr-10 ">
                                        <i className="fa fa-phone " style={{ color: '#427900', marginRight: '10px' }}></i>
                                        UAN: 111-222-333
                                    </li>
                                    <li className="m-0 pl-10 pr-10">
                                        <i className="fa fa-globe " style={{ color: '#427900 ', marginRight: '10px' }}></i>
                                        (+0092-123) 12345-67
                                    </li>
                                    <li className="m-0 pl-10 pr-10">
                                        <i className="fa fa-phone-square " style={{ color: '#427900 ', marginRight: '10px' }}></i>
                                        CELL: 92-121-2323456
                                    </li>

                                    <li className="m-0 pl-10 pr-10">
                                        <i className="fa fa-envelope-o " style={{ color: '#427900 ', marginRight: '10px' }}></i>
                                        info @deliciosfood.com
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4">
                            <div className="widget-dark" style={{ color: '#bbb' }}>
                                <h5 className="widget-title line-bottom"
                                    style={{ color: '#fff', paddingTop: '30px', marginTop: 0 }}>
                                    Useful Links</h5>

                                <hr />
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4">
                            <div className="widget-dark" style={{ color: '#bbb' }}>
                                <h5 className="widget-title mb-10" style={{ color: '#fff', paddingTop: '30px', marginTop: 0 }}>
                                    Connect
                                    With Us</h5>
                                <hr />
                                <ul className="styled-icons icon-dark icon-theme-colored icon-circled icon-sm"
                                    style={{ display: 'block', listStyle: 'none', margin: 0, padding: 0 }}>
                                    <li style={{ listStyle: 'none', display: 'inline-block', marginLeft: '10px' }}>
                                        <a href="https://www.facebook.com/"><i className="fa fa-facebook text-white"></i></a>
                                    </li>
                                    <li style={{ listStyle: 'none', display: 'inline-block', marginLeft: '10px' }}>
                                        <a href="https://twitter.com/"><i className="fa fa-twitter text-white"></i></a>
                                    </li>
                                    <li style={{ listStyle: 'none', display: 'inline-block', marginLeft: '10px' }}>
                                        <a href="https://www.instagram.com/"><i className="fa fa-instagram text-white"></i></a>
                                    </li>
                                    <li style={{ listStyle: 'none', display: 'inline-block', marginLeft: '10px' }}>
                                        <a href="https://www.youtube.com/"><i className="fa fa-youtube text-white"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="footer-bottom bg-black-333"
                    style={{ backgroundColor: '#316dc3', paddingTop: '10px', paddingBottom: '10px' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6" style={{ marginLeft: '-80px' }}>
                                <p className="font-11 text-black-777 m-0"
                                    style={{ color: '#fff', paddingTop: '5px', paddingBottom: '5px', fontSize: '14px ', margin: '0 0 10px' }}>
                                    Copyright © 2021 All rights reserved Delicios Food</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {/* back to top */}

            <a href="#" className="scrollToTop" style={{ display: 'block', color: '#808080' }}><i className="fa fa-angle-up"></i></a>
        </div>
    )
}
