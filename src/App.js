import React, { Fragment, useState } from 'react'
import { createUser } from '../sdk';
import './styles.scss'
import Input from './components/Input';
import Select from './components/Select';

export default function App() {
    const [finishFirstStep, setFinishFirstStep] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isSuccess, setIsSuccess] = useState(false);
    const [userData, setUserData] = useState({
        name: '',
        age: '',
        email: '',
        newsletter: 'daily'
    });
    const newLetterTypes = [
        'daily',
        'weekly',
        'monthly'
    ]

    const onChangeInput = (e) => {
        const { name, value } = e.currentTarget;
        setUserData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const onChangeAgeInput = (e) => {
        const { value } = e.currentTarget;
        setUserData(prevState => ({
            ...prevState,
            age: +value
        }));
    }

    const onClickStepTwo = () => {
        if (userData.name == '' || (userData.age == '' || userData.age === 0)) {
            setError('Enter your name & age');
        } else {
            setError(null)
            setFinishFirstStep(true);
        }

    }

    const onSubmit = () => {
        setIsLoading(true)
        createUser(userData).then(response => {
            setIsLoading(false);
            setIsSuccess(true);
        })
    }

    return (
        <div className="container">
            {isLoading && (<div className='loading' />)}
            <h1>Subscribe to Newsletter</h1>
            {error && <div className='error'>{error}</div>}
            {isSuccess && (<div className='success'>you are add to Newsletter list</div>)}
            {!finishFirstStep ? (
                <Fragment>
                    <Input label={'Your Name'} name='name' value={userData.name} handleOnchange={onChangeInput} />
                    <Input label={'Your Age'} type='number' name='age' value={userData.age} handleOnchange={onChangeAgeInput} />
                    <button onClick={onClickStepTwo}>Next Step</button>
                </Fragment>
            ) : (
                    <Fragment>
                        <Input label={'Email'} name='email' value={userData.email} handleOnchange={onChangeInput} />
                        <Select label={'Choose Newsletter type'} name='newsletter' options={newLetterTypes} value={userData.newsletter} handleOnchange={onChangeInput} />
                        <button onClick={onSubmit}>Submit Data</button>
                    </Fragment>
                )}


        </div>
    )
}
