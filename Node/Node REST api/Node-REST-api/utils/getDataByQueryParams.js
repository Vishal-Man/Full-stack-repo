export const getDataByQueryParams = (data, queryObj) => {
    const { continent, country, is_open_to_public } =  queryObj
    if(continent) {
        data = data.filter(destination=>
            destination.continent.toLowerCase() === continent.toLowerCase()
        )
    } else if(country) {
        data = data.filter(destination=>
            destination.country.toLowerCase() === country.toLowerCase()
        )
    } else if(is_open_to_public) {
        data = data.filter(destination=>
            destination.continent === JSON.parse(is_open_to_public.toLowerCase())
        )
    }
    return data
}