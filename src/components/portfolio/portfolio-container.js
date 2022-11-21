import React, { Component } from "react";

import PortfolIoItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    render() {
        return (
            <div>
                <h2>Updated Items Goes HERE!</h2>

                <PortfolIoItem />
            </div>
        )
    }
}