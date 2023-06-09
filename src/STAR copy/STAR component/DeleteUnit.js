class DeleteUnit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMsgAlert: false,
      ifUpdated: false,
      msg: "",
    };
      this.showAlert = showAlert.bind(this);
  }
  deleteUnit = (e) => {
    let params = {
      unitId: this.props.unitId,
      UnitStandardCode: this.props.unitStandardCode,
      ProgrammeID: this.props.displayedSTARProgrammeID,
    };
 
     
    axios
      .post(STARDashboardEndpoint + "DeleteUnitByUnitId", params)
      .then((res) => {
        if (res.status === 200) {         
           this.showAlert(true, "Unite has been deleted.", STARDashboardEndpoint + "programme/" + this.props.displayedSTARProgrammeID)  
        } else {
            this.showAlert(false, "Failed.")
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
        size="md"
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

        <Modal.Header closeButton>
          <div className="lead">Are you sure?</div>
        </Modal.Header>
        <Modal.Body>
          <div>
            <strong>
              You can try to switch off the unit standard instead of deleting it.
            </strong>
          </div>
   
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between">
                <Button variant="danger" type="submit" onClick={this.deleteUnit}>
            Delete
          </Button>

          <Button variant="primary" onClick={this.props.onHide}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
export default DeleteUnit;
