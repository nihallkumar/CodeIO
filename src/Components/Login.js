import React from 'react'

function Login() {
  return (
    <div className='container'>
      <div className="row justify-content-center">
        <div className="col-md-4 login">
          <h2>&lt; login /&gt;</h2>
          <form>

            <div className="mb-3">
              <label for="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="name" />
            </div>

            <div className="mb-3">
              <label for="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password"  />
            </div>

            <div className="login-btn">
              <button type="submit" className="btn btn-success col-md-5">Login</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Login