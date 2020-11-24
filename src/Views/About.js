import React from 'react';

//Styles
import './About.scss';

//Icons
import Building from '../Icons/about/Building';
import Excavator from '../Icons/about/Excavator';
import Wrench from '../Icons/about/Wrench';
import Painter from '../Icons/about/Painter';
import Spray from '../Icons/about/Spray';
import Shield from '../Icons/about/Shield';
import Standard1 from '../Icons/about/Standard1';
import Standard2 from '../Icons/about/Standard2';
import Standard3 from '../Icons/about/Standard3';
import Standard4 from '../Icons/about/Standard4';

//SVG icons
import Dots from '../Icons/Dots';
import Square from '../Icons/Square';
import Circle from '../Icons/Circle';
import Triangle from '../Icons/Triangle';

function About(){
    return(
        <div className="about">
            <div className="container">
                <div className="aboutUs">
                    <h2>O nás <Dots /></h2>
                    <h3>Company name</h3>
                    
                    <div className="text">
                        <p>Naša spoločnosť bola založená v roku 2004. Od svojho vzniku sme realizovali desiatky stavebných projektov rôžneho charakteru. Cieľom všetkých našich činností je vždy plné uspokojenie požiadaviek a potrieb zákazníka</p>

                        <p>Pri všetkých činnostiach v spoločnosti prijímame opatrenie k obmedzeniu vznikov odpadov a uplatňujeme technologické postupy šetrné z hľadiska životného prostredia a z hľadiska energetickej nárošnosti. Komunikujeme a spolupracujeme s verejnosprávnymi orgánmi a ďalšími zainteresovanými stranami v záležitostiach týkajúcich sa problematiky životného prostredia a BOZP.</p>

                        <p>Snažíme sa vždy zabezpečiť všetky naše činnosti v súlade s požiadavkami noriem ISO a STN. Pre všetky odborné činnosti disponujeme potrebnými certifikátmi, oprávneniami a osvedčeniami. V rámci prípravy stavieb postupujeme tak, aby všetky riziká a nebezpečenstvo bolo vopred identifikované a realizujeme také opatrenia, aby nedochádzalo k ohrozeniu zdravia zamestancov.</p>
                    </div>

                    <Triangle />
                    <Square />
                </div>

                <div className="whatWeDo">
                    <h2>Čo robíme <Dots /></h2>

                    <div className="card-container">
                        <div className="card">
                            <Building />
                            <p>Realizácia a rekonštrukcia stavieb</p>
                        </div>

                        <div className="card">
                            <Excavator />
                            <p>Prípravné, zemné a búracie práce</p>
                        </div>

                        <div className="card">
                            <Wrench />
                            <p>Sanácia a oprava inžinierskych stavieb</p>
                        </div>

                        <div className="card">
                            <Painter />
                            <p>Hydroizolačné nástreky</p>
                        </div>

                        <div className="card">
                            <Spray />
                            <p>Odstraňovanie grafitov a antigrafitové nátery</p>
                        </div>

                        <div className="card">
                            <Shield />
                            <p>Komplexná antikorózna ochrana</p>
                        </div>
                    </div>

                    <Square />
                    <Circle />
                </div>

                <div className="ourStandards">
                    <h2>Naše štandardy <Dots /> </h2>
        
                    <div className="text">
                        <p>Pri všetkých činnostiach v spoločnosti prijímame opatrenia k obmedzeniu vzniku odpadov, uplatňujeme postupy šetrné k životnému prostrediu a ochrany života a zdravia pri práci.
                        </p>
                    </div>

                    <div className="standard-container">
                        <div className="standard">
                            <Standard1 />
                            <div className="standard-text">
                                <h3>Skvelé služby</h3>
                                <p>Môžete sa spoľahnúť na vysokú kvalitu našich prác a dodržiavanie dohodnutých termínov a cien.</p>
                            </div>
                        </div>

                        <div className="standard">
                            <Standard2 />
                            <div className="standard-text">
                                <h3>Vysoké štandardy</h3>
                                <p>Pri poskytovaní našich služieb sa vždy snažíme postupovať v súlade s požiadavkami noriem ISO a STN</p>
                            </div>
                        </div>

                        <div className="standard">
                            <Standard3 />
                            <div className="standard-text">
                                <h3>Tím profesionálov</h3>
                                <p>Naši zákazníci môžu vždy rátať s vysokou odbornosťou a profesionalitou našich pracovníkov.</p>
                            </div>
                        </div>

                        <div className="standard">
                            <Standard4 />
                            <div className="standard-text">
                                <h3>Kreatívne riešenia</h3>
                                <p>Od svojho vzniku sme realizovali desiatky stavebných projektov rôžneho charakteru.</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default About;