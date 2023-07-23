import React from 'react';
import './CustomInput.scss';

const CustomInput = ({
	value = '',
	onChange = () => {},
	error = false,
	errorMessage = '',
	placeHolder = '',
	label = '',
	labelOnTop = true,
	id = '',
	name = '',
	type = 'text',
	style = {},
	className = '',
	labelStyle = {},
	inputStyle = {},
	labelClass = '',
	inputClass = '',
	disabled = false,
	autoComplete = false,
	required = true,
	...props
}) => {
	return (
		<div
			className={
				'custom-input-container ' + className + (labelOnTop && 'label-on-top')
			}
		>
			{label.length > 0 ? (
				<label
					htmlFor={id}
					className={
						'custom-input-label font-16 ' +
						labelClass +
						(required ? 'custom-input-required' : '')
					}
					style={labelStyle}
				>
					{label}
				</label>
			) : (
				<></>
			)}
			<input
				id={id}
				name={name}
				placeholder={placeHolder}
				value={value}
				type={type}
				className={`custom-input font-16 ${inputClass} ${
					error && 'red-border'
				}`}
				style={inputStyle}
				onChange={onChange}
				autoComplete={autoComplete ? 'on' : 'off'}
				disabled={disabled}
				required={required}
				{...props}
			/>
			{error && <div className='custom-input-error'>{errorMessage}</div>}
		</div>
	);
};

export default CustomInput;
