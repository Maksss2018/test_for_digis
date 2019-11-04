import React from 'react';
import { ListGroup, ListGroupItem, Media } from 'reactstrap';

const PlaceList = ({ places }) => {
    const listItems = places
        .map((place)=>(<PlaceListItem key={place.id} place={place}/>));
    return(<PlaceListHTML list={listItems} />)
}

const PlaceListItem = ({ opening_hours,...props }) => {
    console.dir({props});
    const prepData = {
        opened : opening_hours || null,
        ...props
    }
    return(
        <PlaceListItemHTML {...prepData}/>
    )
}
const PlaceListItemHTML = ({ place:{ icon, name, vicinity } }) => (
    <ListGroupItem >
        <Media>
            <Media className=" p-3 " left href="#">
                <Media object src={`${icon}`} alt="Generic placeholder image" />
            </Media>
            <Media body>
                <Media heading>
                    {name}
                </Media>
                {vicinity}
            </Media>
        </Media>
    </ListGroupItem>
)


const PlaceListHTML = ({list}) => (
    <ListGroup>
        {list}
    </ListGroup>
);



export default PlaceList;