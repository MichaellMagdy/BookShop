import axios from 'axios'
import Book from '../components/Book';


export const getBooks = (state) => async dispatch => {

    const responce = await axios.get("https://gutendex.com/books/")
    var tempArr=[];
        if (state === 1) {
            for (let i = 0; i < 8; i++) {
                tempArr.push(<Book
                    title={responce.data.results[i]['title']}
                    author={responce.data.results[i]['authors'][0]['name']}
                    image={responce.data.results[i]['formats']['image/jpeg']}
                />)
            }

        } else {
            for (let i = 0; i < 32; i++) {
                tempArr.push(<Book
                    title={responce.data.results[i]['title']}
                    author={responce.data.results[i]['authors'][0]['name']}
                    image={responce.data.results[i]['formats']['image/jpeg']}
                />)
            }
        }
    dispatch({ type: 'GET_ALL_BOOKS', payload: tempArr})
}
