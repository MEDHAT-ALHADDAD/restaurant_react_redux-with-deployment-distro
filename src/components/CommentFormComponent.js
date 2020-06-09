import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Label, Row, Col} from 'reactstrap';
import {LocalForm, Control, Errors } from 'react-redux-form'

const  required = (val) => val && val.length;
const  maxLength = (len) => (val) => !(val) || (val.length <= len );
const  minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isModalOpen:false
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    handleSubmit(values) {
        this.toggleModal();
        this.props.postComment(this.props.dishId, values.rating, values.author, values.comment); 
    }


    render() {
        return(
            // <React.Fragment> short format
            <>
            <Button outline onClick={this.toggleModal}>
                <span className="fa fa-pencil fa-lg"></span> Submit Comment
            </Button>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                        <Label htmlFor="rating" >Rating</Label>
                        <Row className='form-group'>
                            <Col md={12}>
                                <Control.select model=".rating" 
                                    className="form-control"
                                    name="contactType" 
                                >
                                    <option disabled selected hidden>Choose rating</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                            </Col>
                        </Row>
                        <Label htmlFor="author" >Your Name</Label>
                        <Row className='form-group'>
                            <Col md={12}>
                                <Control.text model=".author" className="form-control"
                                    id="author" 
                                    name="author" 
                                    placeholder="Your Name"
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                    }}
                                />
                            <Errors 
                                className="text-danger"
                                model=".author"
                                show="touched"
                                messages={{
                                    required: 'Required',
                                    minLength: 'must be grater than 2 char',
                                    maxLength: 'must be less than 16 char'
                                }}
                            />
                            </Col>
                        </Row>
                        <Label htmlFor="comment">Comment</Label>
                        <Row className='form-group'>
                            <Col md={12}>
                                <Control.textarea 
                                    model=".comment" 
                                    id="comment" 
                                    name="comment" 
                                    rows="6"
                                    className="form-control"
                                    validators={{
                                        required
                                    }}
                                />
                            <Errors 
                                className="text-danger"
                                model=".comment"
                                show="touched"
                                messages={{
                                    required: 'Required'
                                }}
                            />
                            </Col>
                        </Row>
                        <Row className='form-group'>
                            <Col md={{size:10, offset:0}}>
                                <Button type="submit" color="primary">
                                    Submit
                                </Button>
                            </Col>
                        </Row>
                    </LocalForm>
                </ModalBody>
            </Modal>
            </>
        );
    }
}


export default CommentForm ;