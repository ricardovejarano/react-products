import React, { useState } from 'react';
import { ModalHeader, Modal, ModalBody, ModalFooter, Button } from 'reactstrap';


function ModalRegister(props: any) {

    return (
        <Modal isOpen={props.modal} toggle={props.toggle}>
            <ModalHeader toggle={props.toggle}>Modal title</ModalHeader>
            

        </Modal>
    );
}

export default ModalRegister;