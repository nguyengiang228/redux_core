import React from "react"
import { useSelector } from "react-redux"
// import casual from 'casual-browserify'
import HobbyList from "../Home/HobbyList/HobbyList"
import { useDispatch } from "react-redux"
import { addNewHobby, setActiveHobby } from "../action/hobby"
HomePage.propTypes = {

}

const randomNumber = () => {
    return 1000 + Math.trunc((Math.random() * 9000))
}

function HomePage(props) {
    const hobbyList = useSelector(state => state.hobby.list)
    const activeId = useSelector(state => state.hobby.activeId)
    const dispatch = useDispatch();

    console.log("Hobby list: ", hobbyList)

    const handleAddHobbyClick = () => {
        const newid = randomNumber()
        //Random a hobby object: id + title
        const newHobby = {
            id: newid,
            title: `Hobby ${newid}`
        }

        //Dispatch action to add a new hobby to redux store
        const action = addNewHobby(newHobby);
        dispatch(action);
    }

    const handleHobbyClick = (hobby) => {
        const action = setActiveHobby(hobby)
        dispatch(action)
    }
    return (
        <div>
            <h2>REDUX HOOKS - Home Page</h2>

            <button onClick={handleAddHobbyClick}>Random hobby</button>

            <HobbyList
                hobbyList={hobbyList}
                activeId={activeId}
                onHobbyClick={handleHobbyClick}
            />

        </div>
    )
}
export default HomePage