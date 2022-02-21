import React, { useState } from 'react'
import { userLogin } from '../state/action-creators/users'
import { useAppDispatch } from '../state/hook'
const LogIn: React.FunctionComponent = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useAppDispatch()
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(userLogin({ email, password }))
        setEmail('')
        setPassword('')
    };
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <label>
                Email
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>
                Password
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default LogIn