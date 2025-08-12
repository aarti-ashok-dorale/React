import TicketNum from "./TicketNum";
import "./Ticket.css";

export default function Ticket(){
    return(
        <div className="Ticket">
            <p>ticket</p>
            {Ticket.map((num, idx) => (
                <TicketNum num={num} key={idx} />
            ))}
        </div>
    )
}