
class EditUnit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDeleteUnitModal: false,
            editUnit: { },
            showMsgAlert: false,
            ifUpdated: false,
            msg: "",
            erroMsg: "",
            unitEditDisabled: false
        };
        this.showAlert = showAlert.bind(this);
    }
    componentDidUpdate(prevProps, prevState) {     
        if (this.props.UnitId !== prevProps.UnitId) {
            this.setState({              
                    unitEditDisabled: false,
            });

        }
    }
    handleChange = (e) => {
        let originalUnitStandardCode = this.props.UnitStandardCode
        if (e.target.name === 'UnitStandardCode') {
            // Check if the UnitStandardCode equals the original UnitStandardCode, the unit can update state directly
            if (e.target.value === originalUnitStandardCode) {
                this.setState({
                    unitEditDisabled: false,
                    editUnit: {
                        ...this.state.editUnit,
                        
                        [e.target.name]: (e.target.value) ? e.target.value : null,
                    },

                });
            }

            //Else UnitStandardCode is not equal to the original UnitStandardCode, check if the UnitStandardCode is existed
            else {
                let unitStandardCode = e.target.value
                axios
                    .get(
                        STARDashboardEndpoint +
                        "GetUnitByUnitStandardCode/" +
                        unitStandardCode
                    )
                    .then((res) => {
                        if (res.status === 200) {
                            if (res.data) {
                                // Also need to set save changes button to disable
                                this.setState({    
                                    editUnit: {
                                        ...this.state.editUnit,
                                       
                                        [e.target.name]: (e.target.value) ? e.target.value : null,

                                    },
                                    unitEditDisabled: true,
                                    erroMsg: "You can't change the unit standard code to " + e.target.value + " because it is existed."
                                })
                          
                                console.log(e.target.value + " is existed, you can't update it to an existed unit, however you can add a existed unit instead")
                            } else {


                                this.setState({
                                    unitEditDisabled: false,
                                    editUnit: {
                                        ...this.state.editUnit,
                                        
                                        [e.target.name]: (e.target.value) ? e.target.value : null,

                                    },
                                })
                            }
                        }
                    })
                    .catch((err) => { });



            }

        } else {
            this.setState({
                editUnit: {
                    ...this.state.editUnit,
                   
                    [e.target.name]: (e.target.value) ? e.target.value : null,
                },
                unitEditDisabled: false,
            });
        }
        };

        handleSubmit = (e) => {
            e.preventDefault();

            if (Object.keys(this.state.editUnit).length !== 0) {
                let editUnit = {
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
                    UnitId: this.props.UnitId,
                    ProgrammeId: this.props.displayedSTARProgrammeID,
                    UnitEditDisabled: this.state.unitEditDisabled,
                };

                axios
                    .put(STARDashboardEndpoint + "UpdateUnit", editUnit)
                    .then((res) => {
                       
                            if (res.data == true) {
                                this.showAlert(true, "Unit updated.", STARDashboardEndpoint + "programme/" + this.props.displayedSTARProgrammeID)
                            } else {
                                this.showAlert(false, "Failed. The unite name is existed")
                            }
                            
                      
                    })
                    .catch((err) => {
                        console.log(err);
                        this.showAlert(false, "Failed, something went wrong.")
                    });
            } else {
                this.showAlert(false, "You haven't changed anything.")
            }
        };
        render() {
            return this.props.UnitId ? (
                <Form onSubmit={this.handleSubmit}>

                    <Toast className="alerMsgBox"
                        autohide
                        bg={this.state.ifUpdated ? "success" : "danger"}
                        onClose={() => this.setState({ showMsgAlert: false })}
                        show={this.state.showMsgAlert} delay={2000}

                    >
                        <div>{this.state.msg}</div>
                    </Toast>
                    <div className="card-header d-flex justify-content-between">
                        <div className="bold">
                            <span
                                className={
                                    "unitStatus " + (this.props.disable ? "inactive" : "active")
                                }
                            ></span>
                            Unit standard ID: {this.props.UnitId}
                        </div>
                    </div>
                    <div className="unitCard card border-secondary">

                        <div className="card-body">
                            <Form.Group controlId="UnitStandardCode" className="mb-1">
                                <Form.Label>Unit standard code</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="UnitStandardCode"
                                    required
                                    disabled
                                    placeholder="Unit standard code"
                                    defaultValue={this.props.UnitStandardCode}
                                    key={this.props.UnitId}
                                    onChange={this.handleChange}
                                    className={this.state.unitEditDisabled ? "is-invalid":"" }
                                />
                                <div className="invalid-feedback">{this.state.erroMsg}</div>
                            </Form.Group>

                            <Form.Group controlId="UnitDesc" className="mb-1">
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    type="text"
                                    as="textarea"
                                    rows={3}
                                    name="Description"
                                    required
                                    placeholder="Description"
                                    defaultValue={this.props.Description}
                                    key={this.props.UnitId}
                                    onChange={this.handleChange}
                                />
                            </Form.Group>
                            <div className="row">
                                <Form.Group controlId="UnitCost" className="mb-1 col-md-6">
                                    <Form.Label>Cost</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="Cost"
                                        placeholder="Unit Cost"
                                        defaultValue={this.props.Cost ? this.props.Cost.trim() : ""}
                                        key={this.props.UnitId}
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>
                                <Form.Group controlId="UnitCredits" className="mb-1 col-md-6">
                                    <Form.Label>Credits</Form.Label>
                                    <Form.Control
                                        type="Number"
                                        name="Credits"
                                        placeholder="Unit Credits"
                                        required
                                        defaultValue={this.props.Credits}
                                        key={this.props.UnitId}
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>
                            </div>
                            <div className="row">
                                <Form.Group controlId="UnitLevel" className="mb-1 col-md-6">
                                    <Form.Label>Unit level</Form.Label>
                                    <Form.Control
                                        type="Number"
                                        name="UnitLevel"
                                        placeholder="Unit level"
                                        required
                                        defaultValue={this.props.UnitLevel}
                                        key={this.props.UnitId}
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>
                                <Form.Group controlId="UnitVersion" className="mb-1 col-md-6">
                                    <Form.Label>Unit Version</Form.Label>
                                    <Form.Control
                                        type="Number"
                                        name="Version"
                                        placeholder="Unit Version"
                                        required
                                        defaultValue={this.props.Version}
                                        key={this.props.UnitId}
                                        onChange={this.handleChange}
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
                                        defaultValue={this.props.Field}
                                        key={this.props.UnitId}
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>
                                <Form.Group controlId="UnitSubfield" className="mb-1 col-md-6">
                                    <Form.Label>Subfield</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="Subfield"
                                        placeholder="Subfield"
                                        defaultValue={this.props.Subfield}
                                        key={this.props.UnitId}
                                        onChange={this.handleChange}
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
                                        defaultValue={this.props.LearningHours}
                                        key={this.props.UnitId}
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>
                                <Form.Group controlId="UnitTargetHours" className="mb-1 col-md-6">
                                    <Form.Label>Target hours</Form.Label>
                                    <Form.Control
                                        type="Number"
                                        name="TargetHours"
                                        placeholder="Target hours"
                                        defaultValue={this.props.TargetHours}
                                        key={this.props.UnitId}
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>
                            </div>
                        </div>
                        <div className="card-footer d-flex justify-content-between ">
                            <Button variant="primary" type="submit" disabled={this.state.unitEditDisabled} >
                                Save changes
                            </Button>
                            <Button
                                variant="danger"
                                onClick={() =>
                                    this.setState({
                                        showDeleteUnitModal: true,
                                       
                                    })
                                }
                            >
                                Delete
                            </Button>
                        </div>
                    </div>
                    <DeleteUnit
                        show={this.state.showDeleteUnitModal}
                        onHide={() => this.setState({ showDeleteUnitModal: false })}
                        unitId={this.props.UnitId}
                        displayedSTARProgrammeID={this.props.displayedSTARProgrammeID}
                        unitStandardCode={this.props.UnitStandardCode}
                    />
                </Form>
            ) : (
                ""
            );
        }
    }
    export default EditUnit;
