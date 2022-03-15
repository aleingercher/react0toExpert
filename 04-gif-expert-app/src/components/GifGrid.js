import useFetchGifs from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

/**
 * Este componente es un item individual. Recibe la categoria y crea la card
 * @component
 * @see GifGridItem
 * @see Documented
 * @param {Object} props
 * @param {string} props.category categoria bla bla
 * @param {number} [props.index] index oidfa
 * @param {string} props.key key para el map 
 * @example
 * //GifGrid
 * <GifGrid category="dragon ball" index={3} />
 * 
 * @example
 * Mapeamos la lista que devuelve la api y renderizamos
 * <GifGridItem key={key} {...img} />;
 */
export const GifGrid = ({ category, key, index }) => {
	/**\
	 * @const loading un estado
	 */
	const { loading, data: images } = useFetchGifs( category);

	return (
		<>
			<h3 className='animate__animated animate__fadeIn'>{category}</h3>

			{loading && <p className='animate__animated animate__flash'>El componente esta cargando</p> }
			<div className='card-grid'>
				{images.map((img) => {
					return <GifGridItem key={key} {...img} />;
				})}
			</div>
		</>
	);
};

// GifGrid.propTypes = {
// 	/**
// 	 * categoria del gif
// 	 */
// 	category: PropTypes.string.isRequired,
// 	/**
// 	 * key para el map
// 	 */
// 	key: PropTypes.string.isRequired,
// 	/**
// 	 * User's age
// 	 */
// 	index: PropTypes.number,
//   }
  
//   GifGrid.defaultProps = {
// 	category: "dragon ball",
// 	index: 3,
//   }
