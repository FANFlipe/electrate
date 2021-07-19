import React from 'react';
const Greeting = (props) => {
    return (
        <>
            <h2>OLÁ {props.name} ouvi dizr que voce tem{props.age} anos</h2>
            <hr />
        </>
    )
}
export default Greeting