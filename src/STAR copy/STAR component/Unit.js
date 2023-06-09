

class Unit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayedUnit: { ...this.props },
        };
        //this.onClick = this.onClickF.bind(this);
    }
    displayUnit = () => {
        this.setState({
            editModalShow: true,
            displayedUnit: { ...this.state.displayedUnit },
        });
        this.props.displayUnitCallback(this.state.displayedUnit);
    };
    changeUnitStates = () => {
        let toggleUnit = Object.assign({}, this.state.displayedUnit);
        toggleUnit.disable = !this.state.displayedUnit.disable;
        let editUnit = {
            UnitId: this.state.displayedUnit.UnitId,
            disable: !this.state.displayedUnit.disable,
        };

        axios.put(STARDashboardEndpoint + "UpdateUnit", editUnit).then((res) => {
            if (res.status === 200) {
                this.setState({
                    displayedUnit: { ...toggleUnit },
                });
                this.props.displayUnitCallback(toggleUnit);
            } else {
                this.showAlert(false, "Failed.")
            }
        }).catch((err) => {
            console.log(err);
            this.showAlert(false, "Failed, something went wrong.")
        });
      
   
    };
    render() {
        return (
            <li
                className={
                    "list-group-item d-flex justify-content-between align-items-center disable-unit-" +
                    this.state.displayedUnit.disable.toString()
                }
            >
                <div>
                    <div className="form-check form-switch ">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            onChange={this.changeUnitStates}
                            defaultChecked={!this.state.displayedUnit.disable}
                        />

                    </div>
                    <div>
                        <span
                            className={
                                "unitStatus " +
                                (this.state.displayedUnit.disable ? "inactive" : "active")
                            }
                        ></span>
            Unit standard: {this.props.UnitStandardCode}
                    </div>
                </div>

                <div
                    type="button"
                    className="btn btn-outline-primary"
                    title="View the unit"
                    onClick={this.displayUnit}
                >
                    View
        </div>

            </li>
        );
    }
}

