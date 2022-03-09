import React from 'react';
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

export default function Services() {
    return (
        <div>
            <br />
                <hr />

                    <div class="container recepies">
                        <div class="row mb-5">
                            <div class="text-center mb-3">
                                <h1>Our Best Recipies</h1>
                                <hr />
                            </div>
                            <div class="col-md-3">
                                <div class="card">
                                    <img src={sushi} alt="" />
                                    <p class ="text-center pt-3">Sushi Recipe</p>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="card">
                                    <img src={burger} alt="" />
                                    <p class ="text-center pt-3">Homemade Burger</p>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="card">
                                    <img src={vegan} alt="" />
                                    <p class ="text-center pt-3">Vegan Smoothie</p>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="card">
                                    <img src={calabasa} alt="" />
                                    <p class ="text-center pt-3">Calabasa Soup</p>
                                </div>
                            </div>

                        </div>


                        <div class="row mb-5">
                            <div class="col-md-3">
                                <div class="card">
                                    <img src={brkfst} alt="" />
                                    <p class ="text-center pt-3">Homemade Breakfast</p>
                                </div>
                            </div>

                            <div class="col-md-3">
                                <div class="card">
                                    <img src={fruit} alt="" />
                                    <p class ="text-center pt-3">Fruit Dessert</p>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="card">
                                    <img src={soup} alt="" />
                                    <p class ="text-center pt-3">Onion Soup</p>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="card">
                                    <img src={pecking} alt="" />
                                    <p class ="text-center pt-3">Pecking Duck</p>
                                </div>
                            </div>

                        </div>

                        <div class="row mb-5 pb-5">
                            <div class="col-md-3">
                                <div class="card">
                                    <img src={masala} alt="" />
                                    <p class ="text-center pt-3">Masala Dosa</p>
                                </div>
                            </div>

                            <div class="col-md-3">
                                <div class="card">
                                    <img src={paella} alt="" />
                                    <p class ="text-center pt-3">Seafood Paella</p>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="card">
                                    <img src={somtam} alt="" />
                                    <p class ="text-center pt-3">Somtam</p>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="card">
                                    <img src={rice} alt="" />
                                    <p class ="text-center pt-3">Chicken Rice</p>
                                </div>
                            </div>
                        </div>
                    </div>        </div>
                )
}
