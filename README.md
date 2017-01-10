Using React, React Router, Mongoose, MongoDB and Axios. Search and retrieve articles from the NYT, save and delet from db. 

Roadmap
Public - index.html id='root', stylesheet and images.
src - 
	components:
		Header (prev. Home ES5)
		Navbar
		----------
		Results ({props.handleSubmit}){props.handleChange} ({props.search})
		Saved	({props.handleSubmit}){props.handleChange} ({props.search})
		Search ({props.handleSubmit}){props.handleChange} ({props.search})
		-------------------------
		Footer
		Giphy - ignore
		Home - ignore

	containers:
		Home.js 'bundles'
				<Header />
                <Navbar />
                <Results />
                <Saved />
                <Footer />
        Search.js handles axios query

    models:	Article Schema

    	App.js 	routes for Home.js & Search.js
    	App.css -stylesheet 
    	index.js takes everything from App and renders to root (index.html)
    	completing the circle.

	server.js: imports dependencies, db set up and includes the app.get/app.post to add/save and delete the articles. (still in ES5)

	What's missing - 
	currently the app.get app.posts are in the server.js NOT ES6
	not convinced this is the correct placement

	webpack -- is it really necessary?

	Search - currently set up for Giphy but needs to be set up for NYI with multiple params.

	In current state - unable to view.

