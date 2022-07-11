import React from "react";

export default function Card(props) {
    return (
        <div className={'card'}>
            <img src={props.imageUrl} className={'card--image'}/>
            <div className={'card--stats'}>
                <img className={'card--star'} src={require('../img/Fill 219.png')} alt=""/>
                <strong> {props.location}asd</strong>
                <a href={props.googleMapsUrl} className={'map_link'}>View on Google maps</a>
                <h1>{props.title}</h1>
                <p><strong>{props.startDate} - {props.endDate}</strong></p>
                <p>{props.description}</p>
            </div>
            <hr/>
        </div>
    )
}

