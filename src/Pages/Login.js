import React from 'react'

function Login() {
    return (
        <section className="container text-dark m-4 w-100 mx-auto">
            <div className='m-3 text-light lead text-center'>
                <h4 className='display-3 lead'>HikeWithMe</h4>
            </div>

            <form className='container w-75 p-5 border rounded-3 shadow bg-success'>
                <h5 className='text-center display-6 pb-3 text-light'>Log in here</h5>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="@username" />
                    <label for="floatingInput">@username</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Password</label>
                </div>
                <div className='mt-4 text-center justify-content-center'>
                    <button className='btn btn-md btn-light w-50'>Log in</button>
                </div>
            </form>
        </section>
    )
}

export default Login