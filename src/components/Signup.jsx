const Signup = () => {
    

    return (
        <div className="container">
            <div className="row d-flex justify-content-center align-items-center mt-2">
                <div className="col-sm-4">
                    <h2>Register now</h2>
                </div>
                <div className="col-sm-4 mt-5">
                    <form className="form-inline" action="">
                        <div className="form-group">
                            <label htmlFor="userType">User Type</label>
                            <select name="user_type" class="form-select" aria-label="Default select example">
                                <option>Please select</option>
                                <option value="researcher">Researcher</option>
                                <option value="investor">Investor</option>
                                <option value="institution_stuff">Institution Stuff</option>
                                <option value="service_provider">Service Provider</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input className="form-control" type="text" id="firstName" name="first_name" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input className="form-control" type="text" id="lastName" name="last_name" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="userName">Username</label>
                            <input className="form-control" type="text" id="userName" name="username" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input className="form-control" type="email" id="email" name="email" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input className="form-control" type="password" id="password" name="password" />
                        </div>
                        <br/>
                        <button type="submit" className="btn btn-primary btn-lg">Signup</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;