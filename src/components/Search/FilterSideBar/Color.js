import React from 'react'
import { useNavigate } from 'react-router-dom'
const Colorr = (props) => {
	const navigate = useNavigate()
	return (
		<div class="colorr tw-w-5 tw-p-3">
			<button class={`tw-w-5 tw-h-5 tw-rounded-full tw-content-center ${props.color}  tw-text-white color tw-justify-content-center tw-absolute`}
				onClick={() => navigate({
					pathname: '',
					search: `?query=${props.color}`,
				})}
			>
				<i class={props.cancel}></i>
			</button>
		</div>

	)
}

export default Colorr
