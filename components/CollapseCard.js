import {Accordion, Card} from "react-bootstrap";

export default function CollapseCard({name}) {
    return (

        <Accordion style={{marginBottom: '15px'}}>
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
                + {name}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
                <Card.Body>Smoky</Card.Body>
            </Accordion.Collapse>
        </Card>
        </Accordion>
    )
}