class DataAPI {
    constructor()  {
        this.url = "http://localhost:3000"
    }

    loadDataAPI() {
        return this._fetch()
    }

    addOrdersAPI(data) {
        const options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        return this._fetch(options, `/orders`)
    }

    loadProductsAPI(){
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        return this._fetch(options, `/products`)
    }

    _fetch(options, additionalPath=""){
        const url =`${this.url}${additionalPath}`
        return fetch(url, options)
                .then(resp=>{
                    if (resp.ok) {
                        return resp.json();
                    }
                    return Promise.reject(resp)
                })
    }
}

export default DataAPI;