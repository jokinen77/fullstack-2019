import React from 'react'
import PropTypes from 'prop-types'
import  { useField } from '../hooks/index.js'

const LoginForm = ({ handleLogin }) => {
    //const [username, setUsername] = useState('')
    //const [password, setPassword] = useState('')

    const username = useField('text')
    const password = useField('password')

    const handleLoginSubmit = async (event) => {
        event.preventDefault()
        handleLogin({
            username: username.value,
            password: password.value
        })

        username.reset
        password.reset
    }

    return (
        <div>
            <form onSubmit={handleLoginSubmit}>
                <div>
                    käyttäjätunnus
                    <input {...username} />
                </div>
                <div>
                    salasana
                    <input {...password} />
                </div>
                <button type="submit">kirjaudu</button>
            </form>
        </div>
    )
}

LoginForm.propTypes = {
    handleLogin: PropTypes.func.isRequired
}

export default LoginForm
