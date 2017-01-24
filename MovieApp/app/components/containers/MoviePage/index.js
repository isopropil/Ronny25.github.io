import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchMovie, fetchRecommendations, fetchGenres, fetchSimilar } from '../../../redux/actions/MoviePageActions';
import { imageBaseUrl, noPosterUrl } from '../../../redux/constants/App';
import MovieCard from '../../modules/MovieCard';
import Loading from '../../modules/Loading';

class MoviePage extends Component {
	
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
	
	componentWillReceiveProps(nextProps) {
		if (this.props.params.id !== nextProps.params.id) {
			this.props.pageActions.fetchMovie(nextProps.params.id);
			this.props.pageActions.fetchRecommendations(nextProps.params.id);
			this.props.pageActions.fetchSimilar(nextProps.params.id);
		}
	}
	
	componentDidMount() {
		this.props.pageActions.fetchMovie(this.props.params.id);
		this.props.pageActions.fetchGenres();
		this.props.pageActions.fetchRecommendations(this.props.params.id);
		this.props.pageActions.fetchSimilar(this.props.params.id);
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
		const pageData = this.props.data;
		const allGenres = this.props.genres;
		const recommendations = this.props.recommendations;
		const similar = this.props.similar;
		
		return (
			<div className='movie-page' >
				<Link to='/' className='backToMainLink'>Search for new movie</Link>
				<Link to='/favourites' className='toFavouritesLink'>Go to Favourites</Link>
				{this.props.fetching && !!pageData &&
					<Loading />
				}
				{!this.props.fetching && !!pageData.id &&
					<div className='movie-content'>
						<div className='movie-content__poster'>
							{!!pageData.poster_path &&
							<a href={`${imageBaseUrl}/original${pageData.poster_path}`} target='_blanc'>
								<img src={`${imageBaseUrl}/w500${pageData.poster_path}`} alt={`${pageData.title} poster`}/>
							</a>
							}
							{pageData.poster_path === null &&
							<img src={`${noPosterUrl}`} alt='no poster found'/>
							}
						</div>
						<h1 className='movie-content__title'>{pageData.title}</h1>
						<h2 className='movie-content__tagline'>{pageData.tagline}</h2>
						<div className='movie-content__ratings'>
								<span
									className={
										this.state[pageData.id] ?
											'movie-content__star added' :
											'movie-content__star'
									}
									onClick={this.onStarClick}
								>☆</span>
							<span className='movie-content__grade'>{pageData.vote_average}</span>
						</div>
						<h6 className='movie-content__genres'><span>Genres: </span>{
							pageData.genres.map((genre, index) => {
								return <p key={index}>{genre.name}</p>
							})
						}</h6>
						<h6 className='movie-content__budget'>Budget: ${pageData.budget}</h6>
						<h6 className='movie-content__revenue'>Revenue: ${pageData.revenue}</h6>
						<p className='movie-content__description'>{pageData.overview}</p>
						<p className='movie-content__homeLink'>Homepage:
							<a href={pageData.homepage} target='_blanc'>{pageData.homepage}</a>
						</p>
						<h2 className='movie-header'>Recommendations</h2>
						<div className='movies-list'>
							{recommendations.map((movie, index) => {
								if (index >= 4) {
									return true;
								}
								return (
									<MovieCard
										key={index}
										data={movie}
										allGenres={allGenres}
									/>
								);
							})}
						</div>
						<h2 className='movie-header'>Similar</h2>
						<div className='movies-list'>
							{similar.map((movie, index) => {
								if (index >= 4) {
									return true;
								}
								return (
									<MovieCard
										key={index}
										data={movie}
										allGenres={allGenres}
									/>
								);
							})}
						</div>
					</div>
				}
			</div>
		);
	}
}

function mapStateToProps(state) {
	const { moviePage } = state;
	const {
		fetching,
		data,
		genres,
		recommendations,
		similar
	} = moviePage || {
		fetching: true,
		data: [],
		genres: [],
		recommendations: [],
		similar: []
	};

	return {
		data,
		genres,
		recommendations,
		similar,
		fetching
	}
}

function mapDispatchToProps(dispatch) {
	return {
		pageActions: bindActionCreators({ fetchMovie, fetchGenres, fetchRecommendations, fetchSimilar }, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);