import React from 'react'
import strawberry from '../images/strawberry.png';
import noodles from '../images/noodles.png';

export default function MainContent() {
    return (
        <div>

            {/* background image */}

            <div class="container-fluid background">
                <div class="row">
                    <div class="col-lg-12 col-sm-12 mb-5">
                        <img class="bg" src={require('../images/6.png').default} alt="" />
                        <div class="back p-5">
                            <h3>Delicios Homemade Burger</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br /> Vitae consectetur, doloribus
                                blanditiis culpa sapiente,<br /> non accusantium consequuntur ea unde fugiat molestiae.</p>
                            <br />
                            <a class="btn" href="#">See Receipe</a>
                        </div>
                    </div>
                </div>
            </div>


            {/* strawberry chinese */}

            <div class="container position-relative end">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12">
                        <img class="strbry" src={strawberry} alt="strawberry" />
                        <div class="strawberry">
                            <h3>Strawberry Cake</h3>
                            <h6>Simple & Delicios</h6>
                            <br />
                            <a class="btn" href="#">See Full Receipe</a>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12">
                        <img class="ndls" src={noodles} alt="noodles" />
                        <div class="chinese">
                            <h3>Chinesse Noodles</h3>
                            <h6>Simple & Delicios</h6>
                            <br />
                            <a class="btn" href="#">See Full Receipe</a>
                        </div>
                    </div>
                </div>
                <hr />
            </div>


        </div>
    )
}
