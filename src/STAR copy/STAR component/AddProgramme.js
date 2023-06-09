class AddProgramme extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMsgAlert: false,
            ifUpdated: false,
            msg: "",
        };

        this.showAlert = showAlert.bind(this);
    }

    handleSubmit = (e) => {
        e.preventDefault();

        let programme = {
            ProgrammeDesc: e.target.ProgrammeDesc.value,
            ProgrammeName: e.target.ProgrammeName.value,
            LocationId: e.target.LocationId.value,
        };

        axios
            .post(STARDashboardEndpoint + "AddOrUpdateProgramme", programme)
            .then((res) => {
               
                    if (res.data) {
                        this.showAlert(true, "Programme added.", STARDashboardEndpoint)
                    } else {
                        this.showAlert(false, "Failed, the programme is already existed with the seleted campus.")
                    }
                
            })
            .catch((err) => {
                this.showAlert(false, "Failed, something went wrong.")
            });
    };
    render() {
        return (

            <Modal
                show={this.props.show}
                size="lg"
                onHide={this.props.onHide}
                centered
            >

                <Toast className="alerMsgBox"
                    autohide
                    bg={this.state.ifUpdated ? "success" : "danger"}
                    onClose={() => this.setState({ showMsgAlert: false })}
                    show={this.state.showMsgAlert} delay={2000}

                >

                    <div>{this.state.msg}</div>
                </Toast>

                <Form onSubmit={this.handleSubmit}>

                    <Modal.Header closeButton>
                        <div className="lead">Add Programme</div>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group controlId="ProgrammeName" className="mb-3">
                            <Form.Label>Programme </Form.Label>
                            <Form.Control
                                type="text"
                                name="ProgrammeName"
                                required
                                placeholder="Programme"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Campus</Form.Label>
                            <Form.Select aria-label="Default select example" name="LocationId">
                                <option value="1">Invercargill</option>
                                <option value="4">SIT2LRN Distance Learning</option>
                                <option value="21">Telford</option>
                                <option value="7">Queenstown</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group controlId="ProgrammeDesc" className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                name="ProgrammeDesc"
                                placeholder="Description"
                            />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer className="d-flex justify-content-between">
                        <Button variant="primary" type="submit">
                            Create
                </Button>
                        <Button variant="danger" onClick={this.props.onHide}>
                            Close
                </Button>
                    </Modal.Footer>
                </Form>
            </Modal>

        );
    }
}
export default AddProgramme;
