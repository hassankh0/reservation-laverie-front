import { useParams } from 'react-router-dom';


function Reservation() {
    let { id } = useParams();
    //get laverie by id
    //make reservation
    return (<><h1>Reservation</h1></>);
}

export default Reservation;