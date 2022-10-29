

const List = ({ data }) => {
    return (
        <section className="flex flex-col gap-5 my-5">
            {data.map(people => (
                <article key={people.id} className="flex gap-6 items-center">

                    <img src={people.image} className="rounded-full w-[90px] h-[90px] object-cover" />
                    <div className="flex flex-col gap-2 font-medium">
                        <h4 className="text-pry-clr-1">{people.name}</h4>
                        <p className="text-pry-clr-2">{people.age} years</p>
                    </div>
                </article>
            ))}
        </section>
    )
}

export default List