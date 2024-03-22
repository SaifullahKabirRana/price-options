import PropTypes from 'prop-types';

const PriceOption = ({option}) => {
    const {name, price, features} = option;
    return (
        <div className='bg-stone-200 p-8 rounded-xl shadow-lg' >
            <h2>
                <span className='text-5xl font-extrabold'>{price}</span>
                <span className='text-2xl'>/mon</span>
            </h2>
            <h4 className='text-3xl my-4 md:my-6 font-medium'>{name}</h4>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object.isRequired,
};

export default PriceOption;