import {
    Link
} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import './Logination.css';
import {setLogin} from "../../redux/actions/actions";

export function Logination() {
    let {login} = useSelector(state => state.loginReducer)
    let dispatch = useDispatch();

    let my_Form = (e) => {
        e.preventDefault();
    };
    let formChange = (e) => {
        dispatch(setLogin({...login, [e.target.name]: e.target.value}));
        localStorage.setItem('login', JSON.stringify({...login, [e.target.name]: e.target.value}))
    };
    return (
        <div className={'login'}>
            <form className={'form-login'} onSubmit={my_Form}>
                <h1>Log In</h1>
                <input onChange={formChange} name={'name'} value={login.name} placeholder={'Enter your name'}
                       type="text"/>
                <input onChange={formChange} name={'url'} value={login.url} placeholder={'Enter a link to the photo'}
                       type="url"/>
                <Link to={'/main-page'}>
                    <button>Save</button>
                </Link>
            </form>
        </div>
    )
}