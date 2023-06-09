
function Filter (props){
    
    const [text, setText] = useState("");
    const [search, setSearch] = useState("");


    useEffect(() => {
        //setSearch only when user stops typing
        const delayFn = setTimeout(() => setSearch(text.toLowerCase()), 500);
        //clean up whenever user start typing again
        return () => clearTimeout(delayFn);      
    }, [text])

    useEffect(() => {
        if (!search) {
            props.searchCallback();
        } else {
            console.log('Filter function is running ...');
            const programmes = props.programms.filter((programme) => {
                
                return (
                    programme.ProgrammeName.toLowerCase().includes(search) ||
                    programme.Campus.toLowerCase().includes(search) ||
                    programme.ProgrammeId.toString() === search
                );
            });
           
            props.searchCallback(programmes);
        }
       
    }, [search])

    const handleChange = (e) => {

        setText(e.target.value);

    };

    return (
        <div className="input-group">
            <input
                type="text"
                className="form-control"
                placeholder="Type in programme name or campus to search"
                name="searchText"
                onChange={handleChange}
            />
            {/* <button className="btn btn-primary" type="button" onClick ={()=>console.log()}>Search</button> */}
        </div>
    );
  }

export default Filter;

