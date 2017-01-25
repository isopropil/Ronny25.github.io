import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchPopular, fetchGenres, fetchMovie } from '../../../redux/actions/HomeActions';
import Loading from '../../modules/Loading';
import MovieCard from '../../modules/MovieCard';
import SearchBox from '../../modules/SearchBox';

class Home extends Component {
	constructor(props, context) {
		super(props, context);
		
		this.state = {
			count: 2,
			hide: false
		};
		
		this.onChangeHandler = this.onChangeHandler.bind(this);
		this.loadMore = this.loadMore.bind(this);
	}
	
	componentDidMount() {
		this.props.pageActions.fetchPopular();
		this.props.pageActions.fetchGenres();
		
		if (!localStorage.getItem('favourite')) {
			let results = [];
			localStorage.setItem('favourite', JSON.stringify(results));
		}
	}
	
	onChangeHandler(e) {
		this.props.pageActions.fetchMovie(e.target.value);
		if (e.target.value) {
			return this.setState({
				hide: true
			});
		}
		
		return this.setState({
			hide: false
		});
	}
	
	loadMore() {
		this.setState({
			count: this.state.count + 1
		});
		this.props.pageActions.fetchPopular(this.state.count);
	}
	
	render() {
		const pageData = this.props.data;
		const allGenres = this.props.genres;
		
		return (
			<div className='page'>
				<SearchBox onChange={this.onChangeHandler} />
				{this.props.fetching && !!pageData &&
					<Loading />
				}
				{!this.props.fetching && pageData.length > 0 &&
					<div className='container'>
						<h1 className='home-title'>Popular Movies</h1>
						<Link to='/favourites' className='toFavouritesLink'>Go to Favourites</Link>
						<div className='movies-list'>
							{pageData.map((movie, index) => {
								return (
									<MovieCard
										key={index}
										data={movie}
										allGenres={allGenres}
									/>
								);
							})}
						</div>
						<div className='wrapper'>
							<button className='load-more'
									onClick={this.loadMore}
									disabled={this.state.hide}
							>More</button>
						</div>
					</div>
				}
			</div>
		);
	}
}

function mapStateToProps(state) {
	const { home } = state;
	const {
		fetching,
		data,
		genres
	} = home || {
		fetching: true,
		data: [],
		genres: []
	};

	return {
		data,
		genres,
		fetching
	}
}

function mapDispatchToProps(dispatch) {
	return {
		pageActions: bindActionCreators({ fetchPopular, fetchGenres, fetchMovie }, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);