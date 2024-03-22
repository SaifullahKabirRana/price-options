import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({ option }) => {
    const { name, price, features } = option;
    return (
        <div className='bg-stone-200 p-8 rounded-xl shadow-lg flex flex-col' >
            <h2 className='text-center'>
                <span className='text-5xl font-extrabold'>{price}</span>
                <span className='text-2xl'>/mon</span>
            </h2>
            <h4 className='text-3xl my-4 md:my-6 font-medium text-center'>{name}</h4>

            <div className='pl-6 flex-grow'>
                {
                    features.map((feature, idx) => <Feature
                        key={idx}
                        feature={feature}
                    ></Feature>)
                }
            </div>
            <button className='btn bg-green-400 mt-6 w-full  rounded-full border-none '>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object.isRequired,
};

export default PriceOption;