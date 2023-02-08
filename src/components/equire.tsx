const Enquire = () => {
    return (
        <div className="enquire _section py-12 bg-black">
            <div className="container mx-auto px-12 font-inter">
                <h3 className="lg:text-5xl text-3xl font-extrabold text-center">
                    Lets build your<br />
                    <span className="text-themeColor"> project together</span></h3>
                <div className="enquire_form py-8">
                    <form className="lg:w-2/4 md:w-full mx-auto text-end">
                        <input type="test" placeholder="Enter Your Name" className="w-full h-10 px-2 bg-slate-600 rounded-md" />
                        <input type="number" placeholder="Enter Your Phone Number" className="w-full h-10 px-2 bg-slate-600 rounded-md mt-3" />
                        <select className="w-full h-10 px-2 bg-slate-600 rounded-md mt-3">
                            <option>Select option</option>
                            <option>Website</option>
                            <option>Marketing</option>
                            <option>Advertisment</option>
                        </select>
                        <textarea rows={4} className="w-full px-2 bg-slate-600 rounded-md mt-3 py-1" placeholder="Enter Your Phone Number">

                        </textarea>
                        <button className="mt-3 lg:py-5 lg:px-16 py-2 px-7 bg-white text-black font-bold rounded-full">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Enquire;