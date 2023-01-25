
const Filter = ({ handleFilterChange }) => {
    //console.log(handleFilterChange)
    return (
        <div>
            filter shown with: <input onChange={handleFilterChange} />
        </div>
    )
}

export default Filter