import PropTypes from 'prop-types';

const Link = ({ route }) => {
    const { name, path } = route;
    return (
        <div>
            <li className='hover:bg-slate-200 hover:rounded-lg px-2'>
                <a href={path}>{name}</a>
            </li>
        </div>
    );
};

Link.propTypes = {  
    route: PropTypes.object.isRequired
};

export default Link;