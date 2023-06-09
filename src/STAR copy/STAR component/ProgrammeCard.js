

class ProgrammeCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            programme: {
                ...this.props,
                units: [],
            },
            displayedUnit: {},
        };
    }
    handledisplayUnitCallback = (unit) => {
        this.setState({ displayedUnit: unit });
        this.props.sendDisplayedUnitToProgrammList(unit);
    };
    refreshProgramm() {

        if (this.props.ProgrammeId) {
            const url =
                STARDashboardEndpoint +
                "GetUnitsByProgrammeId/" +
                this.props.ProgrammeId;

            fetch(url)
                .then((res) => res.json())
                .then((data) => {
                    this.setState({
                        programme: { ...this.props, units: data },
                    });
                });
        }
    }
    
    componentDidMount() {
        this.refreshProgramm();
    }

    componentDidUpdate(prevProps) {
        if (this.props.ProgrammeId !== prevProps.ProgrammeId) {
            this.refreshProgramm();
        }
    }

    render() {
        
            return this.props.ProgrammeId ? (
                <div>
                    <div className="card-header ">
                        <div className=" d-flex justify-content-between align-items-center">
                            <strong>
                                {this.props.ProgrammeName} 
                                <span className="badge bg-primary rounded-pill" data-toggle="tooltip" data-placement="top" title="Number of unit standards">
                                    {this.state.programme.units.length}
                                </span>
                            </strong>
                            <div
                                className="linkBtn"
                                onClick={this.props.onHide}
                            >
                                Edit
                                </div>
                        </div>
                    </div>
                    <div className="programmeCard card border-secondary mb-3 mb-3">
                      
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <div
                                    className={
                                        "badge bg-info location_" + this.props.LocationId
                                    }
                                >
                                    {this.props.LocationId === 4 ? "SIT2LRN" : this.props.Campus}
                                </div>
                                <div
                                    className="btn btn-outline-primary"
                                    onClick={() =>
                                        this.setState({
                                            showAddUnitModal: true,
                                        })
                                    }
                                >
                                    Add Unit Standard
                            </div>
                            </div>

                            <p className="card-text">{this.props.ProgrammeDesc}</p>
                            {this.state.programme.units.length > 0 ? (
                                <ul className=" list-group">
                                    {this.state.programme.units.map((unit) => {
                                        return (
                                            <Unit
                                                key={unit.UnitId}
                                                {...unit}
                                                displayUnitCallback={this.handledisplayUnitCallback}
                                            />
                                        );
                                    })}
                                </ul>
                            ) : (
                                <em className="text-info">
                                    There are no units under this programme.
                                </em>
                            )}
                        </div>
                    </div>
                    <AddUnit
                        onHide={() => this.setState({ showAddUnitModal: false })}
                        show={this.state.showAddUnitModal}
                        programme={this.state.programme}
                    ></AddUnit>
                </div>
            ) : (
                <div></div>
            )
        
    }
}
export default ProgrammeCard;