import React from "react";
import ReactDOM from "react-dom";
import ImageList from "./components/image_list";
//Create component
const App = () => {
    return (
        <div>
            <h1>Image List</h1>
            <ImageList></ImageList>
        </div>
    );
};

//Render this component to the screen

Meteor.startup(()=>{
    ReactDOM.render(<App/>,document.querySelector('.container'))
});