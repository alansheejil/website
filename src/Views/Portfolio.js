import React from 'react';

//Styles
import './Portfolio.scss';

//SVG icons
import Dots from '../Icons/Dots';
import Square from '../Icons/Square';

//Components
import PortfolioItemSlider from '../Components/PortfolioItemSlider';

function Portfolio(){
    return(
        <div className="portfolioView">
            <div className="container">
                <div className="intro section">
                    <h2>Portfólio <Dots /></h2>
                    <Square />

                    <div className="container-inner">
                        <div className="text">
                            <p>Bear claw lemon drops jujubes gingerbread jelly chupa chups caramels biscuit soufflé. Marzipan gummi bears cupcake. Tootsie roll gummies sweet croissant liquirice. Jelly jujubes fruitcake cake candy sugar plum.</p>

                            <p>Oat cake drageé cake cupcake soufflé brownie gingerbread tiramisu. Chocolate cake pudding cake ice cream jujubes gingerbread donut jelly marzipan. Halvah wafer drageé caramels chupa chups jelly-o dessert lemon drops croissant. Bear claw marzipan donut soufflé tiramisu.</p>
                        </div>
                    </div>
                </div>

                <div className="portfolio section">
                    <div className="container-inner">
                        <div className="portfolio-container">
                            <div className="portfolio-item">
                                <h3>Most v Narnii <Square /> </h3>

                                <p>Powder halvah macaron tiramisu poweder drageé donut. Sugar plum gummies dessert pudding carrot cake dessert oat cake fuitcake gummi bears. Brownie cotton candy jelly beans chocolate cake. Powder halvah macaron tiramisu poweder drageé donut.</p>

                                <PortfolioItemSlider />
                            </div>

                            <div className="portfolio-item">
                                <h3>Most v Narnii <Square /> </h3>

                                <p>Powder halvah macaron tiramisu poweder drageé donut. Sugar plum gummies dessert pudding carrot cake dessert oat cake fuitcake gummi bears. Brownie cotton candy jelly beans chocolate cake. Powder halvah macaron tiramisu poweder drageé donut.</p>

                                <PortfolioItemSlider />
                            </div>

                            <div className="portfolio-item">
                                <h3>Most v Narnii <Square /></h3>

                                <p>Powder halvah macaron tiramisu poweder drageé donut. Sugar plum gummies dessert pudding carrot cake dessert oat cake fuitcake gummi bears. Brownie cotton candy jelly beans chocolate cake. Powder halvah macaron tiramisu poweder drageé donut.</p>

                                <PortfolioItemSlider />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;