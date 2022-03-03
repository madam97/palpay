import React from 'react';

type LoginProps = {

};

export default function Login({}: LoginProps) {
  return (
    <section className="container container-full container-center">
      <div className="row row-center">
        <form className="col xs-4">
          <div className="form-row">
            <div className="input-group">
              <input id="username" className="input" name="username" type="text" />
              <label htmlFor="username">Username</label>
            </div>
          </div>
          <div className="form-row">
            <div className="input-group">
              <input id="password" className="input" name="password" type="password" />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div className="form-row text-center">
            <button className="btn-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}