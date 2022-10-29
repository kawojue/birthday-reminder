

const List = ({ data }) => {
    return (
        <section>
            {data.map(people => (
                <div key={people.id}>
                    <img src={people.image} />
                </div>
            ))}
        </section>
    )
}

export default List