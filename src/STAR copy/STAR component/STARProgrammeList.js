
class STARProgrammeList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            programmes: [],
            filterdProgrammes: [],
            displayedUnit: {},
            displayedProgrammeId: 0,
            displayedProgramme: {},
            showEditProgrammeModal: false,
            showAddProgrammeModal: false,
            showDeleteUnitModal: false,
        };

        //this.displayedUnit = this.displayedUnit.bind(this)
    }
    updateDisplyedProgramme = (editProgramme) => {
        this.setState({
            displayedUnit: {},
            displayedProgramme: editProgramme,
        });
    };

    displayedUnit = (unit) => {
        this.setState({
            displayedUnit: unit,
        });
    };
    handleSearchCallback = (programmes) => {
        let filterdProgrammes;
        if (!programmes) {
            filterdProgrammes = this.state.programmes;
        } else {
            filterdProgrammes = programmes.length === 0 ? [] : programmes;
        }

        this.setState({
            displayedUnit: {},
            displayedProgramme: {},
            filterdProgrammes: filterdProgrammes,
        });
    };

    refreshProgrammeList() {
       
        let programmeId = window.location.pathname.split("programme/")[1];
        if (programmeId && programmeId !== 0) {
            axios
                .get(STARDashboardEndpoint + "programmes/" + programmeId)
                .then((res) => {
                    this.setState({
                        displayedProgramme: (res.data) ? res.data : {},
                        displayedProgrammeId: programmeId,
                    });
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        //Get All programmes
        axios
            .get(STARDashboardEndpoint + "programmes")
            .then((res) => {
                this.setState({
                    programmes: res.data,
                    filterdProgrammes: res.data,
                });
            })

            .catch((error) => {
                console.log(error);
            });
    }

    componentDidMount() {
        this.refreshProgrammeList();
    }

    render() {


        return (
            <div className="container">
                <nav className="mb-2">
                    <Filter
                        programms={this.state.programmes}
                        searchCallback={this.handleSearchCallback}
                    />
                </nav>
                {/*<Footer favcol="yellow"/>*/}
                {this.state.filterdProgrammes.length === 0
                    ? "No record"
                    : (
                        <div className="row">

                            <div className="col-lg-4">

                                <AddProgramme
                                    // editeProgramme ={this.updateDisplyedProgramme}
                                    show={this.state.showAddProgrammeModal}
                                    onHide={() => this.setState({ showAddProgrammeModal: false })}

                                />
                                <div className="card-header bold">

                                    <div className=" d-flex justify-content-between align-items-center">
                                        <strong>
                                            Programme List
                                            <span className="badge bg-primary rounded-pill" data-toggle="tooltip" data-placement="top" title="Number of programmes">
                                                {this.state.filterdProgrammes.length}
                                            </span>
                                        </strong>
                                        <div
                                            type="button"
                                            className=" linkBtn"
                                            onClick={() => {
                                                this.setState({
                                                    //displayedUnit: {},
                                                    //displayedProgramme: {},
                                                    showAddProgrammeModal: true,
                                                });

                                            }}
                                        >
                                            Add programme
                                        </div>
                                    </div>



                                </div>
                                <div className="programmList border-secondary">

                                    <ul className=" list-group">
                                        {this.state.filterdProgrammes.map((programme) => {
                                            return (
                                                <li
                                                    key={programme.ProgrammeId}
                                                    className="list-group-item d-flex justify-content-between align-items-center"
                                                >
                                                    <div>
                                                        <div>{programme.ProgrammeName}</div>
                                                        <div
                                                            className={
                                                                "badge bg-info mb-1 location_" + programme.LocationId
                                                            }
                                                        >
                                                            {programme.LocationId === 4 ? "SIT2LRN" : programme.Campus}
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <button
                                                            type="button"
                                                            className="btn btn-outline-primary"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="right"
                                                            title="View the programme"
                                                            // href={`/edit-programmes/${programme.STAR_Programme_ID}`}
                                                            onClick={() => {
                                                                this.setState({
                                                                    displayedUnit: {},
                                                                    displayedProgramme: programme,
                                                                });
                                                                window.history.pushState(
                                                                    {},
                                                                    null,
                                                                    "/STAR/programme/" + programme.ProgrammeId
                                                                );
                                                            }}
                                                        >
                                                            View
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className="btn btn-outline-primary"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="right"
                                                            title="Edit the programme"
                                                            // href={`/edit-programmes/${programme.STAR_Programme_ID}`}
                                                            onClick={() =>
                                                                this.setState({
                                                                    showEditProgrammeModal: true,
                                                                    displayedProgramme: programme,
                                                                    displayedUnit: {},
                                                                })
                                                            }
                                                        >
                                                            Edit
                                                        </button>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <ProgrammeCard
                                    {...this.state.displayedProgramme}
                                    sendDisplayedUnitToProgrammList={this.displayedUnit}
                                    show={!this.state.showEditProgrammeModal}
                                    onHide={() =>
                                        this.setState({
                                            showEditProgrammeModal: true,

                                            /*displayedUnit: {}*/
                                        })
                                    }
                                />
                            </div>
                            <div className="col-lg-4">
                                {this.state.displayedUnit ? (
                                    <EditUnit
                                        displayedSTARProgrammeID={
                                            this.state.displayedProgramme.ProgrammeId
                                        }
                                        {...this.state.displayedUnit}
                                    />
                                ) : (
                                    ""
                                )}
                            </div>
                            {this.state.displayedProgramme ? (
                                <EditProgramme
                                    // editeProgramme ={this.updateDisplyedProgramme}
                                    show={this.state.showEditProgrammeModal}
                                    onHide={() => this.setState({ showEditProgrammeModal: false })}
                                    editProgramme={this.state.displayedProgramme}
                                />
                            ) : (
                                ""
                            )}
                        </div>)}
                <footer >
                    <hr />
                    <ul>
                        <li class="mb-1">
                            <a href="https://www.sit.ac.nz/" target="_blank">Southern Institute technology </a>

                        </li>
                        {
                            (ENV === "Development") ?
                            <li class="mb-1">
                                <a href="https://sitwebdev.sit.ac.nz/Fees-Enrolments/STAR-Gateway#dnn_ctr6931_ContentPane" target="_blank">Dev STAR Gateway </a>
                            </li>:""
                        }

                        <li class="mb-1">
                            <a href="https://www.sit.ac.nz/Fees-Enrolments/STAR-Gateway#dnn_ctr6931_ContentPane" target="_blank">STAR Gateway </a>

                        </li>
                     
                    </ul>

                </footer>
            </div>)
    }
}
const root = ReactDOM.createRoot(document.getElementById('starDashboard'));
root.render(React.createElement(STARProgrammeList));