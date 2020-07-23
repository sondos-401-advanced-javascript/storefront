import superagent from 'superagent';

let api = 'https://api401-todo.herokuapp.com/product';


export const getRemoteData = () => dispatch => {

    return superagent.get(api)
        .then(data => {
            dispatch(getAction(data.body))
        });
}

export const putRemoteData = (change, data,id) => async dispatch => {
    data.quantity = parseInt(change);
    return superagent.put(`${api}/${id}`)
    .send(data)
    .set('X-API-Key', 'foobar')
    .set('Accept', 'application/json')
    .then(response => {
        dispatch(putAction(response));
    });
}

export const deleteRemoteData = (product) => async dispatch => {
    await (await superagent.delete(`${api}/${product._id}`));
    dispatch(deleteAction(product));
}

export const postRemoteData = (data) => async dispatch => {

    data.quantity = 1;
    return superagent.post(api)
        .send(data)
        .set('X-API-Key', 'foobar')
        .set('Accept', 'application/json')
        .then(response => {
            dispatch(postAction(response.body));
        });

}



export const getAction = payload => {
    return {
        type: 'GET',
        payload: payload
    }
}

export const putAction = payload => {
    return {
        type: 'PUT',
        payload: payload
    }
}

export const postAction = payload => {
    return {
        type: 'POST',
        payload: payload
    }
}

export const deleteAction = payload => {
    return {
        type: 'DELETE',
        payload: payload
    }
}