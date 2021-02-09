import './AuthInput.scss'
import {Field} from "formik";
import React from "react";


export const AuthInput = ({errors, icon, id, name, labelText, ...fieldProps}) => {

	return (
		<div className={"auth-input input-field"}>
			<i className="auth-input__icon small material-icons">{icon}</i>
			<Field
				id={id}
				name={name}
				{...fieldProps}
			/>
			<label htmlFor={id}>{labelText}</label>
			{
				errors ? (
					<span className="auth-input__error-message"> {errors} </span>
				) : null
			}
		</div>
	);
}