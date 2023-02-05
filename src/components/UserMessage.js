import React from 'react'

function UserMessage(props ) {
  return (
    <div>
            {
                props.isLoggedIn ? (
        <div>
            <p> Welcome to the site! Please complete the steps below:</p>
            <ol>
                <li>Confirm your email</li>
                <li>Complete your Profile</li>
                <li>Subcribe to the newsletter</li>
            </ol>
        </div>
                ) : 
                (<p>please sign in</p>
                )
                 }
    </div>
  )
}

export default UserMessage