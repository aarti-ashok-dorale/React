import "./TicketNum.css";

export default function TicketNum({num}){ //ticket components(ticketNum) = props => none
    return(
        <span className="TicketNum">{num}</span>
    );
}