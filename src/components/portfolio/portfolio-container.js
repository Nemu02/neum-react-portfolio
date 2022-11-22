import React, { Component } from "react";
import PortfolioItem from "./portfolio-item";

import PortfolIoItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super()
        console.log("Portfolio Container rendered");
    }

    portfolioItems() {
        const data = ["Diner Menu", "Nav BAr CSS", "UML"];

        return data.map(item => {
            return <PortfolioItem title={item} />;
        })
    }

    render() {
        return (
            <div>
                <h2>Updated Items Goes HERE!</h2>

                {this.portfolioItems()}
            </div>
        )
    }
}