import React from 'react'

function Register() {
    return (
        <section className="container text-dark m-4 w-100 mx-auto">
            <div className='m-3 text-light lead text-center'>
                <h4 className='display-3 lead'>HikeWithMe</h4>
            </div>

            <form action="#" className='container w-75 p-5 border rounded-3 shadow bg-success'>
                <h5 className='text-center display-6 pb-3 text-light'>Register here</h5>
                <article class="col">
                    <div class="form-floating mb-3">
                        <input type="text" name="firstName" class="form-control" placeholder="First name"
                            required />
                        <label class="form-label">First Name</label>
                    </div>

                    <div class="form-floating mb-3">
                        <input type="text" name="lastName" class="form-control" placeholder="Last name"
                            required />
                        <label class="form-label">Last Name</label>
                    </div>

                    <div class="form-floating mb-3">
                        <input type="text" name="userName" class="form-control" placeholder="@username"
                            required />
                        <label class="form-label">@username</label>
                    </div>

                    <div class="form-floating mb-3">
                        <input type="password" name="password" class="form-control " placeholder="Password"
                            required />
                        <label class="form-label">Password</label>
                    </div>
                </article>

                <div className='mt-4 text-center justify-content-center'>
                    <button className='btn btn-md btn-light w-50'>Register</button>
                </div>
            </form>

        </section>
    )
}

export default Register