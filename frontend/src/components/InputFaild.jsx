import { Input } from "./ui/input";

const InputFaild = ({placeholder, icon: Icon,...props}) => {
	return (
		<div className='relative mb-6'>
			<div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-wh'>
				<Icon className='size-5 text-blue-500' />
			</div>
			<Input placeholder={placeholder} />
		</div>
	);
};
export default InputFaild;