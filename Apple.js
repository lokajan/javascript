
import React from "react";



class Apple extends React.Component {
    render() {

        const { Appleingo } = this.props;
        const { color, type } = Appleingo;

        return (
            <>
                <h2>apple...</h2>
                <h2>apple {color} anf {type}</h2>
            </>
        )
    }
};
export default Apple;