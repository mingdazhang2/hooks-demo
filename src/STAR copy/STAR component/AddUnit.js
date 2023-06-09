class AddUnit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMsgAlert: false,
            ifUpdated: false,
            msg: "",
            unitEditDisabled: false,
            Unit: {},
        };
        this.showAlert = showAlert.bind(this);
    }

    checkUnit = (e) => {
        e.preventDefault();

        let unitStandardCode = e.target.value;
        axios
            .get(
                STARDashboardEndpoint +
                "GetUnitByUnitStandardCode/" +
                unitStandardCode
            )
            .then((res) => {
                if (res.status === 200) {
                    if (res.data) {
                        this.setState({
                            Unit: {
                                ...res.data[0],
                            },
                            unitEditDisabled: true,
                        });
                    } else {
                        this.setState({
                            Unit: {},
                            unitEditDisabled: false,
                        });
                    }
                } else {
                    this.setState({
                        Unit: {},
                        unitEditDisabled: false,
                    });
                }
            })
            .catch((err) => { });
    };
    handleChange = (e) => {
        console.log("Credit", e.target.value);
        this.setState({
            Unit: {},
        });
    };
    handleClose = (e) => {
        this.props.onHide();
        this.setState({
            unitEditDisabled: false,
            Unit: {},
        });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        let newUnit = {
            //"Campus":this.props.editProgramme.Campus,
            UnitStandardCode: e.target.UnitStandardCode.value,
            Description: e.target.Description.value,
            Cost: e.target.Cost.value,
            Credits: Number(e.target.Credits.value),
            UnitLevel: Number(e.target.UnitLevel.value),
            Version: Number(e.target.Version.value),
            Field: e.target.Field.value,
            Subfield: e.target.Subfield.value,
            TargetHours: e.target.TargetHours.value ? Number(e.target.TargetHours.value) : null,
            LearningHours: e.target.LearningHours.value ? Number(e.target.LearningHours.value) : null,
            // UnitId: this.props.ID,
            disable: false,
            ProgrammeId: this.props.programme.ProgrammeId,
        };

        axios
            .post(STARDashboardEndpoint + "AddUnit", newUnit)
            .then((res) => {
                
                    if (!res.data) {
                        this.showAlert(true, "You have added an existing unit in this programme.", STARDashboardEndpoint + "programme/" + this.props.programme.ProgrammeId)
                    } else {
                        this.showAlert(true, "Unit added.", STARDashboardEndpoint + "programme/" + this.props.programme.ProgrammeId)
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
                onHide={this.handleClose}
                centered
            >
                <Form onSubmit={this.handleSubmit}>
                    <Toast className="alerMsgBox"
                        autohide
                        bg={this.state.ifUpdated ? "success" : "danger"}
                        onClose={() => this.setState({ showMsgAlert: false })}
                        show={this.state.showMsgAlert} delay={2000}

                    >
                        <div>{this.state.msg}</div>
                    </Toast>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Unit Standard</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <div className="lead mb-3">
                            {this.props.programme.ProgrammeName} (ID:
              {this.props.programme.ProgrammeId})
            </div>
                        <em className= "text-info">Note: You can't change the unit standard code once created, however you are able to delete the unit standard code and recreate it.</em>
                        <Form.Group controlId="UnitStandardCode" className="mb-1">
                            <Form.Label>Unit Standard Code</Form.Label>
                            <Form.Control
                                type="text"
                                name="UnitStandardCode"
                                required
                                onChange={this.checkUnit}
                                placeholder="Unit Standard Code"
                            />
                            <em
                                className={
                                    "text-info msgTip " +
                                    (this.state.unitEditDisabled ? "show" : "")
                                }
                            >
                                The unit is existed already, you can't change the values in this
                window. You are going to add the existing unit to
                                {this.props.programme.ProgrammeName}.
              </em>
                        </Form.Group>

                        <Form.Group controlId="UnitDesc" className="mb-1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                name="Description"
                                required
                                disabled={this.state.unitEditDisabled}
                                defaultValue={this.state.Unit.Description}
                                key={this.state.Unit.UnitId}
                                placeholder="Description"
                            />
                        </Form.Group>
                        <div className="row">
                            <Form.Group controlId="UnitCost" className="mb-1 col-md-6">
                                <Form.Label>Cost</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="Cost"
                                    placeholder="Unit Cost"
                                    disabled={this.state.unitEditDisabled}
                                    defaultValue={
                                        this.state.Unit.Cost ? this.state.Unit.Cost.trim() : ""
                                    }
                                    key={this.state.Unit.UnitId}
                                />
                            </Form.Group>
                            <Form.Group controlId="UnitCredits" className="mb-1 col-md-6">
                                <Form.Label>Credits</Form.Label>
                                <Form.Control
                                    type="Number"
                                    name="Credits"
                                    placeholder="Unit Credits"
                                    required
                                    disabled={this.state.unitEditDisabled}
                                    defaultValue={this.state.Unit.Credits}
                                    key={this.state.Unit.UnitId}
                                />
                            </Form.Group>
                        </div>
                        <div className="row">
                            <Form.Group controlId="UnitLevel" className="mb-1  col-md-6">
                                <Form.Label>Unit level</Form.Label>
                                <Form.Control
                                    type="Number"
                                    name="UnitLevel"
                                    placeholder="Unit level"
                                    required
                                    disabled={this.state.unitEditDisabled}
                                    defaultValue={this.state.Unit.UnitLevel}
                                    key={this.state.Unit.UnitId}
                                />
                            </Form.Group>
                            <Form.Group controlId="UnitVersion" className="mb-1 col-md-6">
                                <Form.Label>Unit Version</Form.Label>
                                <Form.Control
                                    type="Number"
                                    name="Version"
                                    placeholder="Unit Version"
                                    required
                                    disabled={this.state.unitEditDisabled}
                                    defaultValue={this.state.Unit.Version}
                                    key={this.state.Unit.UnitId}
                                />
                            </Form.Group>
                        </div>
                        <div className="row">
                            <Form.Group controlId="UnitField" className="mb-1 col-md-6">
                                <Form.Label>Field</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="Field"
                                    placeholder="Field"
                                    disabled={this.state.unitEditDisabled}
                                    defaultValue={this.state.Unit.Field}
                                    key={this.state.Unit.UnitId}
                                />
                            </Form.Group>
                            <Form.Group controlId="UnitSubfield" className="mb-1 col-md-6">
                                <Form.Label>Subfield</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="Subfield"
                                    placeholder="Subfield"
                                    disabled={this.state.unitEditDisabled}
                                    defaultValue={this.state.Unit.Subfield}
                                    key={this.state.Unit.UnitId}
                                />
                            </Form.Group>
                        </div>
                        <div className="row">
                            <Form.Group
                                controlId="UnitLearningHours"
                                className="mb-1 col-md-6"
                            >
                                <Form.Label>Learning hours</Form.Label>
                                <Form.Control
                                    type="Number"
                                    name="LearningHours"
                                    placeholder="Learning hours"
                                    disabled={this.state.unitEditDisabled}
                                    defaultValue={this.state.Unit.LearningHours}
                                    key={this.state.Unit.UnitId}
                                />
                            </Form.Group>
                            <Form.Group controlId="UnitTargetHours" className="mb-1 col-md-6">
                                <Form.Label>Target hours</Form.Label>
                                <Form.Control
                                    type="Number"
                                    name="TargetHours"
                                    placeholder="Target hours"
                                    disabled={this.state.unitEditDisabled}
                                    defaultValue={this.state.Unit.TargetHours}
                                    key={this.state.Unit.UnitId}
                                />
                            </Form.Group>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className="d-flex justify-content-between">
                        <Button variant="success" type="submit">
                            Create
            </Button>
                        <Button variant="danger" onClick={this.handleClose}>
                            Close
            </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        );
    }
}
export default AddUnit;
