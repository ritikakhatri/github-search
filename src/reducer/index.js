

const initialState = {
	userData: {},
	isFetching: false,
	isError: false
}

const asyncReducer = (state= initialState, action)=>{
	switch(action.type) {
		case "fetch_post": 
			return Object.assign({}, state, {
				isFetching: true,
				data: {},
				isError: false
			})
		case "REC_USER": 
		console.log("action.data")
			return Object.assign({}, state, {
				isFetching: false,
				userData: action.data,
				isError: false
			})

		default :
			return state
	}
}

export default asyncReducer;