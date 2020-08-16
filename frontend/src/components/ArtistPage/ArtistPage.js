import React from 'react'

export default function ArtistPage({categories}) {
    console.log(categories)
    function classNamePicker(object){
        if (Object.keys(object).toString() === "writing"){
            return "blue"
        } else if(Object.keys(object).toString() === "acting"){
            return "orange"
        } else { return "yellow"}}
    
    return (
        <div className="artist-page">
            <div className="section-line"></div>
            <div className="artists-main d-flex justify-content-center align-items-center">
                {
                    categories.map((category, index) => (
                        <div key={index} className={classNamePicker(category)}>{Object.keys(category)}</div>
                    ))
                }
            </div>
        </div>
    )
}
