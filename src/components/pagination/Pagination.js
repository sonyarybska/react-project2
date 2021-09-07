import {useDispatch, useSelector} from "react-redux";
import {setCurrentPage} from "../../redux/actions";
import {createRef} from "react";
import './Pagination.css';
import {createPages} from "./createPages";


export function Pagination({totalCount, perPage, currentPage}) {
    let dispatch = useDispatch();
    let numberOfPages = [];
    let pagesCount = Math.ceil(totalCount / perPage)
    let {theme} = useSelector(state => state.themeReducer);
    let ref = createRef()
    createPages(pagesCount, perPage, currentPage, numberOfPages)

    return (
        <div className={`pages ${theme}-pages`}>
            <button
                onClick={() => currentPage > 1 ? dispatch(setCurrentPage(--currentPage)) : setCurrentPage(setCurrentPage(1))}>Prev
            </button>
            <div ref={ref}>
                {
                    numberOfPages.map((value, index) => {
                        return <button key={index} onClick={() => {
                            return dispatch(setCurrentPage(value))
                        }}>{value}</button>
                    })
                }
            </div>
            <button
                onClick={() => currentPage < pagesCount ? dispatch(setCurrentPage(++currentPage)) : dispatch(setCurrentPage(pagesCount))}>Next
            </button>
            <div>
                Page:{currentPage}
            </div>
        </div>
    )
}