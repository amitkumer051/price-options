import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
    const {name,price,features}=option;
    return (
        <div className=' bg-blue-600 text-white p-6 rounded-xl flex flex-col space-y-3'>
            <p className='text-5xl font-bold text-center'>{price}/Month</p>
            <h3 className='text-2xl  text-center'>{name}</h3>
            <div className='flex-grow'>
            {
                features.map((feature,idx) => <Feature key={idx} feature={feature}></Feature>)
            }
            </div>
            <button className='bg-green-500 text-white font-bold w-full p-2 rounded-lg hover:bg-green-900'>Buy Now</button>
        </div>
    );
};
PriceOption.propTypes={
    option: PropTypes.object
}
export default PriceOption;