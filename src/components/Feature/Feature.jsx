import PropTypes from 'prop-types';
import { AiFillCheckCircle } from 'react-icons/ai';

const Feature = ({feature}) => {
    return (
        <div className='flex items-center gap-1'>
            <AiFillCheckCircle ></AiFillCheckCircle>
            <h1 className='text-sm'>{feature}</h1>
        </div>
    );
};

Feature.propTypes={
    feature: PropTypes.string
}
export default Feature;