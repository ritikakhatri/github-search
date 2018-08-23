import store from "../store/index"

export const fetch_post =()=>({
	type: "FETCH_USER"
})

export const receive_post = (post)=>{
	return {
	type: "REC_USER",
	data: post 
}}
export const receive_error = ()=>({
	type: "Err" 
})

export const thunk_action_creator = (user)=>{
	console.log('thunk')
	store.dispatch(fetch_post());

	return (dispatch , getState)=>{
		return fetch(`https://api.github.com/users/${user}`)
			   .then(data => data.json())
			   .then(data=>{
			   	if(data.message === ' Not Found') {
			   		throw new Error('user not found')
			   	} else {
			   		dispatch(receive_post(data))
			   	}
			   })
			   .catch(err => dispatch(receive_error()))
	} 
}