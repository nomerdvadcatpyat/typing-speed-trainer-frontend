import React, {useState} from 'react';
import {Link} from "react-router-dom";
import '../AuthForm.scss'
// import {maxLengthCreator, requiredField} from "../../../../utils/validators/loginFormValidator";

// const maxLength10 = maxLengthCreator(10);

export function LoginForm(props) {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');


	console.log(props);

	const submitHandler = (e) => {
		console.log('onSubmit', email, password)
		e.preventDefault();
		props.tryLogin({email, password});
	}

	return (
		<form onSubmit={submitHandler} className="auth-form login">

			<div className="input-field form-control">
				<i className="material-icons prefix">email</i>
				<input
					id="login-email-input"
					name="email"
					onChange={e => setEmail(e.target.value)}
					value={email}
					type="text"
				/>
				<label htmlFor="login-email-input">Email</label>
			</div>

			<div className="input-field form-control">
				<i className="material-icons prefix">lock_outline</i>
				<input
					id="login-password-input"
					name="password"
					onChange={e => setPassword(e.target.value)}
					value={password}
					type="password"
				/>
				<label htmlFor="login-password-input">Password</label>
			</div>


			<button className="btn waves-effect">
				Submit
			</button>

			<Link to="/auth/registration" className="link-to-register"> Нет аккаунта? Зарегистрироваться </Link>

		</form>
	);
}


// export const LoginReduxForm = ({ tryLogin }) => {
// 	const handleSubmit = (inputUser) => {
// 		console.log(inputUser);
// 		tryLogin(inputUser);
// 	}
//
// 	return withReduxForm(LoginForm, 'login', handleSubmit)
// }
