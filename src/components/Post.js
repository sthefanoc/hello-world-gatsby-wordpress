import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Post =(props) => {
    return (
        <div className="p-3 ">
            <Card >
            {props.image
            ? <Card.Img variant="top" src={props.image} />
            : <br />}
            
            <Card.Body>
                <Card.Title dangerouslySetInnerHTML={{__html: props.title}} />
                <Card.Text dangerouslySetInnerHTML={{__html: props.excerpt}}/>
                <Button href={props.readMore} variant="primary">Read more...</Button>
            </Card.Body>
            </Card>
        </div>
    )
}

export default Post;