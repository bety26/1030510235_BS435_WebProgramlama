import {Alert} from "react-bootstrap";
import React from "react";

function Anasayfa(){
    return(
        <div>
            <Alert variant="success" className="mt-3">
                <Alert.Heading>Hey, nice to see you</Alert.Heading>
                <p>
                    Aww yeah, you successfully read this important alert message. This
                    example text is going to run a bit longer so that you can see how
                    spacing within an alert works with this kind of content.
                </p>
                <hr />
                <p className="mb-0">
                    Whenever you need to, be sure to use margin utilities to keep things
                    nice and tidy.
                </p>
            </Alert>
        </div>
    )
}
export default Anasayfa