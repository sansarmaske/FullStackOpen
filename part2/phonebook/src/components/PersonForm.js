
const PersonForm = ({ handleNameChange, handleNumberChange, handleOnSubmit }) => {
    return (
        <form onSubmit={handleOnSubmit}>
            <div>
                name: <input onChange={handleNameChange} />
            </div>
            <div>
                number: <input onChange={handleNumberChange} />
            </div>
            {/* <div>debug: {newNumber}</div> */}
            <div>
                <button type="submit" >add</button>
            </div>
        </form>
    )
}

export default PersonForm