import React from 'react'

function Compiler() {
  return (
    <div className="container-fluid">
      <div className="row">

        <div className="col-md-7 compiler-code">
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Language
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="25"></textarea>
        </div>

        <div className=" col-md-5 compiler-io">

          <div className="row compiler-input">

          </div>

          <div className="row compiler-output">

          </div>

        </div>

      </div>
    </div>
  )
}

export default Compiler