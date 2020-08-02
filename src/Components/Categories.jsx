import React from "react";


const Categories = React.memo(({activeCategory, items, clickSetCategory}) => {

        const onSelectItem = (index) => {
            clickSetCategory(index)
        }

        let names = items && items.map((i, index) =>
            <li onClick={() => onSelectItem(index)}
                className={activeCategory === index ? 'active' : ''}
                key={`${i}_${index}`}>{i}</li>)

        return (
            <div className="categories">
                <ul>
                    <li onClick={() => onSelectItem(null)}
                        className={activeCategory === null ? 'active' : ''}>
                        Все
                    </li>
                    {names}
                </ul>
            </div>
        )
    }
)


export default Categories;