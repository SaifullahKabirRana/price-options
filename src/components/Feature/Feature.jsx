import PropTypes from 'prop-types';
import { FaCheckCircle } from "react-icons/fa";
const Feature = ({feature}) => {
    return (
        <div>
            <div className='flex items-center gap-2 '>
            <FaCheckCircle className='text-green-500'></FaCheckCircle>
            <p>{feature}</p>          
            </div>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.string.isRequired
};

export default Feature;