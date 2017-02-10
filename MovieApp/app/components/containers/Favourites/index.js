//Libraries
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
//Actions
import { getFavourites, fetchGenres, removeFromFavourites } from '../../../redux/actions/FavouritesActions';
//Modules
import Loading from '../../modules/Loading';
import MovieCard from '../../modules/MovieCard';

class FavouritesPage extends Component {
	constructor(props, context) {
		super(props, context);
		
		this.state = {};
		
		this.onStarClick = this.onStarClick.bind(this);
	}
	
	componentDidMount() {
		this.props.pageActions.getFavourites();
		this.props.pageActions.fetchGenres();
	}
	
	onStarClick(index) {
		this.props.pageActions.removeFromFavourites(index);
	}
	
	render() {
		const pageData = this.props.data;
		const allGenres = this.props.genres;
		
		return (
			<div className='favourite-page'>
				<Link to='/' className='backToMainLink'>Search for new movie</Link>
				<h1 className='favourite-title'>Favourite Movies</h1>
				{this.props.fetching && !!pageData &&
					<Loading />
				}
				{!this.props.fetching && pageData.length === 0 &&
					<h3 className='favourite-noMovie'>You didn't add any movie to your favourites yet</h3>
				}
				{!this.props.fetching && pageData.length > 0 &&
					<div className='movies-list'>
						{pageData.map((movie, index) => {
							return (
								<MovieCard
									key={index}
									data={movie}
									allGenres={allGenres}
									favourites={true}
									favFunc={this.onStarClick}
									index={index}
								/>
							);
						})}
					</div>
				}
			</div>
		);
	}
}

function mapStateToProps(state) {
	const { favourites } = state;
	const {
		fetching,
		genres,
		data
	} = favourites || {
		fetching: true,
		genres: [],
		data: []
	};
	
	return {
		genres,
		fetching,
		data
	}
}

function mapDispatchToProps(dispatch) {
	return {
		pageActions: bindActionCreators({
			getFavourites,
			fetchGenres,
			removeFromFavourites}, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(FavouritesPage);