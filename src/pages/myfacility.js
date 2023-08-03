import React from "react";
import FileUpload from "./FileUpload";



const MyFacility = () => {
    return (
        <div>
            <h1>Welcome to the My Facility Page</h1>
            <h2> On this page, you will be able to upload your residential data to run the drill simulations.</h2>
            <FileUpload></FileUpload>
        
        </div>
    );
};

export default MyFacility;