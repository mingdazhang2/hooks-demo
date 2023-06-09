
class EditProgramme extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMsgAlert: false,
            ifUpdated: false,
            msg: "",
            editProgramme: {},
        };
        this.showAlert = showAlert.bind(this);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let editProgramme = {

            ProgrammeDesc: e.target.ProgrammeDesc.value,
            ProgrammeId: this.props.editProgramme.ProgrammeId,
            ProgrammeName: e.target.ProgrammeName.value,
            LocationId: e.target.LocationId.value,
        };

        axios
            .post(STARDashboardEndpoint + "AddOrUpdateProgramme", editProgramme)
            .then((res) => {
             
                    if (res.data) {
                        this.showAlert(true, "Updated.", STARDashboardEndpoint + "programme/" + this.props.editProgramme.ProgrammeId)

                    } else {
                        this.showAlert(false, "Failed, the programme is already existed with the seleted campus.")

                    }            
            })
            .catch((err) => {
                console.log(err);
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
                        <div className="lead">Edit Programme</div>
                    </Modal.Header>
                    <Modal.Body>
                       
                        <Form.Group controlId="StarProgrammeId" className="mb-3">
                            <Form.Label>STAR Programme ID</Form.Label>
                            <Form.Control
                                type="Number"
                                name="StarProgrammeId"
                                disabled
                                placeholder="STAR Programme ID"
                                defaultValue={this.props.editProgramme.ProgrammeId}
                            />
                        </Form.Group>
                        <Form.Group controlId="ProgrammeName" className="mb-3">
                            <Form.Label>Programme Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="ProgrammeName"
                                required
                                placeholder="Programme"
                                defaultValue={this.props.editProgramme.ProgrammeName}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Campus</Form.Label>
                            <Form.Select
                                aria-label="Default select example"
                                name="LocationId"
                            >
                                <option value={this.props.editProgramme.LocationId}>
                                    {this.props.editProgramme.Campus}
                                </option>
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
                                defaultValue={this.props.editProgramme.ProgrammeDesc}
                            />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer className="d-flex justify-content-between">
                        <Button variant="primary" type="submit">
                            Update
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
export default EditProgramme;
