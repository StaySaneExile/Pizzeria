import React from "react";


const Categories = ({items}) => {

    const [activeItem, setActiveItem] = React.useState(null)

    const onSelectItem = (index) => {
        setActiveItem(index)
    }

    let names = items && items.map((i, index) =>
            <li onClick={() => onSelectItem(index)}
                className={activeItem === index ? 'active' : ''}
                key={`${i}_${index}`}>{i}</li>)


    return (
        <div className="categories">
            <ul>
                <li onClick={() => onSelectItem(null)}
                    className={activeItem === null ? 'active' : ''}>
                    Все
                </li>
                {names}
            </ul>
        </div>
    )
}


export default Categories;