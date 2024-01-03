import React from 'react';
import PropTypes from 'prop-types'
import './HobbyList.css'

HobbyList.propTypes = {
    hobbyList: PropTypes.array,
    activeId: PropTypes.number,
    onHobbyClick: PropTypes.func
}

HobbyList.defaultProps = {
    hobbyList: [],
    active: null,
    onHobbyClick: null
}

function HobbyList(props) {
    const { hobbyList, activeId, onHobbyClick } = props
    console.log(props)
    const handleClick = (hobby) => {
        
        if(onHobbyClick) {
            onHobbyClick(hobby)
        }
    }

    return (
        <ul className='hobby-list'>
            {hobbyList.map((hobby, index) => {
                console.log('ABC', hobby)
                return (
                
                <li
                    key={index}
                    className={hobby.id === activeId ? 'active' : ''}
                    onClick ={() => handleClick(hobby)}
                >
                    {console.log(hobby)}
                    {hobby.title}
                </li>
            )
            })}
        </ul>
    )
}
export default HobbyList