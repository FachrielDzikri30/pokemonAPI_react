import React from "react"

const PokeList = ({pokemonList, setSelectedPokemon}) => {
    return (
        <div style={style.gridContent}>
            {pokemonList.map((item) => (
                <div 
                    key={item.name}
                    style={style.card}
                    onClick={() => setSelectedPokemon(item.name)}
                >
                    {item.name}
                </div>
            ) )}
        </div>
    )
}

const style = {
    gridContent: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gap: 16,
    },
    card: {
        padding:'16px 8px',
        backgroundColor: 'aquamarine',
        borderRadius: '8px',
        cursor: 'pointer',
    },
}

export default PokeList