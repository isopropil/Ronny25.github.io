import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';
import { imageBaseUrl, noPosterUrl } from '../../redux/constants/App';

class MovieCard extends Component {
	constructor(props, context) {
		super(props, context);
		
		this.state = {};
		
		this.onStarClick = this.onStarClick.bind(this);
	}
	
	componentWillMount() {
		let localData = JSON.parse(localStorage.getItem('favourite')) ? JSON.parse(localStorage.getItem('favourite')) : [];
		if (localData.length >= 1) {

			localData.map(item => {
				return this.setState({
					[item.id]: true
				});
			});
		}
	}
	
	checkGenres(genre, allGenres) {
		let movieGenres = [];
		
		genre.map(id => {
			allGenres.map((item) => {
				if ([id] == item.id) {
					return movieGenres.push(item.name);
				}
			});
		});
		
		return (
			<p>{movieGenres.join(', ')}</p>
		);
	}
	
	onStarClick() {
		let localData = JSON.parse(localStorage.getItem('favourite')) ? JSON.parse(localStorage.getItem('favourite')) : [];
		
		if (this.state[this.props.data.id]) {
			this.setState({
				[this.props.data.id]: false
			});
			
			localData.map((item, index) => {
				if (item.id === this.props.data.id) {
					return localData.splice(index, 1);
				}
			});
			
		} else {
			this.setState({
				[this.props.data.id]: true
			});
			
			localData.push(this.props.data);
		}
		
		localStorage.clear('favourite');
		localStorage.setItem('favourite', JSON.stringify(localData));
	}
	
	render() {
		const {
			data,
			allGenres,
			favourites
		} = this.props;
		
		return (
			<div className='movie-card'>
				<div className='movie-poster'>
					{!!data.poster_path &&
						<Link to={`/movie/${data.id}`} >
							<img src={`${imageBaseUrl}/w185${data.poster_path}`} alt={`${data.title} poster`} />
						</Link>
					}
					{data.poster_path === null &&
						<img src={`${noPosterUrl}`} alt='no poster found'/>
					}
				</div>
				<div className='movie-info'>
					<h3 className='movie-info__title'>{data.title}</h3>
					<h6 className='movie-info__genres'>{
						this.checkGenres(data.genre_ids ? data.genre_ids : data.genres, allGenres)
					}</h6>
					{!!data.vote_average &&
						<div className='movie-info__ratings'>
							<span
								className={
									this.state[data.id] !== null && this.state[data.id] ||
									favourites ?
									'movie-info__star added' :
									'movie-info__star'
								}
								onClick={favourites ? this.props.favFunc.bind(this, this.props.index) : this.onStarClick}
							>☆</span>
							<span className='movie-info__grade'>{data.vote_average}</span>
						</div>
					}
					<p className='movie-info__description'>{data.overview}</p>
					<Link to={`/movie/${data.id}`} className='movie-details'>Show more</Link>
				</div>
			</div>
		);
	}
	
}

MovieCard.propTypes = {
	data: PropTypes.object.isRequired,
	allGenres: PropTypes.array.isRequired,
	favourites: PropTypes.bool,
	favFunc: PropTypes.func,
	index: PropTypes.number
};

MovieCard.defaultProps = {
	data: {},
	allGenres: [],
	favourites: false,
	index: 0
};

export default MovieCard;
