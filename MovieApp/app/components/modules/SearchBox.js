import React, {Component, PropTypes} from 'react';

class SearchBox extends Component {
	
	render() {
		
		return (
			<div className='searchBox'>
				<input
					type='text'
					placeholder='search for a movie...'
					onChange={this.props.onChange} />
			</div>
		);
	}
	
}

SearchBox.propTypes = {
	onChange: PropTypes.func.isRequired
};

export default SearchBox;
