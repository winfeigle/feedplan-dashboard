import React from "react";

export default function FormatAddress({ rawAddress }){
    return(
        <span className="restaurant-address">
            <p>
            {`${rawAddress}`}
            </p>
        </span>
    );
}