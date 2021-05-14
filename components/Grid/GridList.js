function GridList({children}) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-3">
            {children}
        </div>
    )
}

export default GridList
