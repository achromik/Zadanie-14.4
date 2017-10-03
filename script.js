var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'film o czarodzieju',
        photo: 'https://unsplash.it/300/200?image=885'
    },
    {
        id: 2,
        title: 'Krol Lew',
        desc: 'film opowiadajacy historie krola sawanny',
        photo: 'https://unsplash.it/300/200?image=485'
    },
    {
        id: 3,
        title: 'Killer',
        desc: 'historia fajtulapy ktory zostaje wziętym płatnym zabójcą',
        photo: 'https://unsplash.it/300/200?image=125'
    },
    {
        id: 4,
        title: 'Titanic',
        desc: 'film o tragedii na oceanie',
        photo: 'https://unsplash.it/300/200?image=471'
    }

];

var Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired,
    },
    render : function() {
        return (
            React.createElement('li', {},
                React.createElement(MovieTitle, {movie: this.props.movie}),
                React.createElement(MovieDesc, {movie: this.props.movie}),
                React.createElement(MovieImage, {movie: this.props.movie})
            )   
        )
    }
});

var MovieDesc = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired,
    },
    render : function() {
        return React.createElement('p', {}, this.props.movie.desc)
    }
})

var MovieTitle = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired,
    },
    render: function() {
        return React.createElement('h2', {}, this.props.movie.title)
    }
})

var MovieImage = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired,
    },
    render: function() {
        return React.createElement('img', {src: this.props.movie.photo})
    }
})

var movie = movies.map(function(movie) {
    return (
        React.createElement(Movie, {key:movie.id, movie: movie})

    )
});

var MovieList = React.createClass({
   
    render: function() {
        return (
            
            React.createElement('ul', {}, movie)
        )
    }
});



var element = React.createElement('div', {}, 
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement(MovieList, {})
);
        

ReactDOM.render(element, document.getElementById('app'));