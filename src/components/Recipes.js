import React from 'react'
import sushi from '../images/sushi.png';
import burger from '../images/burger.png';
import vegan from '../images/vegan.png';
import calabasa from '../images/calabasa.png';
import brkfst from '../images/brkfst.png';
import fruit from '../images/fruit.png';
import soup from '../images/soup.png';
import pecking from '../images/pecking.png';
import masala from '../images/masala.png';
import paella from '../images/paella.png';
import somtam from '../images/somtam.png';
import rice from '../images/rice.png';

export default function Recipes() {
    return (
        <div>
             {/* Our Best Recepies  */}

            <div className="container recepies">
                <div className="row mb-5">
                    <div className="text-center mb-3">
                        <h1>Our Best Recipies</h1>
                        <hr />
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <img src={sushi} alt="" />
                            <p className="text-center pt-3">Sushi Recipe</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <img src={burger} alt="" />
                            <p className="text-center pt-3">Homemade Burger</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <img src={vegan} alt="" />
                            <p className="text-center pt-3">Vegan Smoothie</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <img src={calabasa} alt="" />
                            <p className="text-center pt-3">Calabasa Soup</p>
                        </div>
                    </div>

                </div>


                <div className="row mb-5">
                    <div className="col-md-3">
                        <div className="card">
                            <img src={brkfst} alt="" />
                            <p className="text-center pt-3">Homemade Breakfast</p>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card">
                            <img src={fruit} alt="" />
                            <p className="text-center pt-3">Fruit Dessert</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <img src={soup} alt="" />
                            <p className="text-center pt-3">Onion Soup</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <img src={pecking} alt="" />
                            <p className="text-center pt-3">Pecking Duck</p>
                        </div>
                    </div>

                </div>

                <div className="row mb-5 pb-5">
                    <div className="col-md-3">
                        <div className="card">
                            <img src={masala} alt="" />
                            <p className="text-center pt-3">Masala Dosa</p>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card">
                            <img src={paella} alt="" />
                            <p className="text-center pt-3">Seafood Paella</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <img src={somtam} alt="" />
                            <p className="text-center pt-3">Somtam</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <img src={rice} alt="" />
                            <p className="text-center pt-3">Chicken Rice</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
