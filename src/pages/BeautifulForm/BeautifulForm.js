function BeautifulForm() {
    const handleSubmit = (event) => {
        /*
            1. Grab input values from the event object
            2. Validate inputs 
            3. If invalid input, change a state and update the DOM
            4. If valid inputs, send a POST request to your API via axios
            5. Handle successful submission + POST. Some possible options:
                a. Send a user to a new page using useNavigate hook
                b. Change state and show a success message
        */
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Form Field 1:
                <input type="text" name="form-field-1" />
            </label>
            <button>Submit</button>
        </form>
    );
}

export default BeautifulForm;