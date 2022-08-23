import React from 'react'

function JoinRoom() {
  return (
    <div className='container'>
      <div className="row justify-content-center">
        <div className="col-md-4 join-room">
          <h2>&lt; Join Room /&gt;</h2>
          <form>

            <div className="mb-3">
              <label for="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" placeholder='John' />
            </div>

            <div className="mb-3">
              <label for="room-code" className="form-label">Room Code</label>
              <input type="text" className="form-control" id="room-code" placeholder='12345' />
            </div>

            <div className="join-room-btn">
              <button type="submit" className="btn btn-success col-md-5">Join</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default JoinRoom