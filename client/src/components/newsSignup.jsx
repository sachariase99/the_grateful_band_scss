import React from 'react'

const NewsSignup = () => {
  return (
    <div className='news'>
      <form action="">
        <p>
          By entering your email address, you agree to Grateful Band's <span>Terms of Use</span> and <span>Privacy Policy</span>. You understand Grateful Band and it's <span>affiliates</span> may use your address to send updates, ads and offers.
        </p>
        <br />
        <br />
        <input type="email" placeholder='email' />
        <br />
        <input type="submit" value="Sign up" />
        <br />
        <br />
        <p>
          You can opt out or learn more about your rights via the <span>Privacy Policy</span>.
        </p>
      </form>
    </div>
  )
}

export default NewsSignup
