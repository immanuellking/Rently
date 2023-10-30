
const Spaces = () => {
    return <section>
        <div className="w-full bg-white mt-24">
            <div>
                <h3>Explore Rently</h3>
                <h1>Available Spaces</h1>
            </div>
            <div className="bg-white">
                <div>
                    <label htmlFor="spaces-search">LOCATION</label>
                    <input type="search" name="" id="spaces-search" placeholder="Where would you love to Stay" />
                </div>
                <div>
                    <label htmlFor="spaces-search">TYPE OF SPACE</label>
                    <select name="" id="" placeholder="Select Space Type">
                        <option value="entire">
                            <input type="checkbox" name="" id="" />
                            <div>
                                <h2>Entire space</h2>
                                <p>Have a whole space to yourself</p>
                            </div>
                        </option>
                        <option value="entire">
                            <input type="checkbox" name="" id="" />
                            <div>
                                <h2>Shared space</h2>
                                <p>Enjoy separate rooms & common spaces</p>
                            </div>
                        </option>
                    </select>
                </div>
            </div>
        </div>
    </section>
}

export default Spaces