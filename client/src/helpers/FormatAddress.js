import React from "react";

export default function FormatAddress({ rawAddress }){
    let street = rawAddress.split(", ", 1)+ ","
    let city = rawAddress.match(/([^,]+)/g)[1]
    let state = rawAddress.match(/([^,]+)/g)[2]

    return(
        <span className="restaurant-address">
            <p>
                <b>{street}</b>
            {`${city}, ${state}`}
            </p>
        </span>
    );
}