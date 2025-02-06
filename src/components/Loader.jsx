import { SpinnerDotted } from 'spinners-react';

export default function Loader (){
    return <div className='flex justify-center mt-40'><SpinnerDotted size={62} thickness={100} speed={100} color="rgba(172, 57, 159, 1)" /> </div>;
}