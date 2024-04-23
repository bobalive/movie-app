import s from './Header.module.css'
import Search from "antd/es/input/Search";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export const Header = () => {
    const [search ,setSearch ] = useState<string>('')
    const navigate = useNavigate()
    return(
        <div className={s.header}>
            <h1 onClick={()=> {
                navigate('/')
            }}>My movies</h1>
            <div className={s.searchContainer}>
            <Search variant={'outlined'}
                    onSearch={()=> {
                        setSearch('')
                        navigate('search/'+search)
                    }}
                    value = {search}
                    onChange = {(e)=> setSearch(e.target.value)}
                    className = {s.search}
                    placeholder = {'Search'}
            /></div>
        </div>
    )
}