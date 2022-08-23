import React from 'react'

function Signup() {
    return (
        <div className='container'>
            <div className="row justify-content-center">
                <div className="col-md-4 signup">
                    <h2>&lt; signup /&gt;</h2>
                    <form>

                        <div className="mb-3">
                            <label for="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" />
                        </div>

                        <div className="mb-3">
                            <label for="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" />
                        </div>

                        <div className="mb-3">
                            <label for="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" />
                        </div>
                        
                        <div className="mb-3">
                            <label for="cpassword" className="form-label">Confirm Password</label>
                            <input type="password" className="form-control" id="cpassword" />
                        </div>

                        <div className="signup-btn">
                            <button type="submit" className="btn btn-success col-md-5">SignUp</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup