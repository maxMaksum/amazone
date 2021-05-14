
import CardContact from '../Card/CardContact';
import CardSocial from '../Card/CardSocial';
function ContactForm() {

    return (

        <div className="flex w-full min-h-screen justify-center items-center sm:p-12 p-8 rounded"> 
        <div className="">
            <div className="flex flex-col md:flex-row md:space-x-6 md:space-y-6 space-y-6 bg-teal-700 w-full max-w-4xl p-8 rounded-xl shadow-lg text-gray-50 overflow-hidden">

                <div className="flex md:flex-grow flex-col justify-between space-y-8">
                    <div>
                        <h1 className="text-4xl font-bold tracking-wide">Contact Us</h1>
                        <p className="pt-2 text-cyan-100 text-sm ">You could leave us message by filling the contact form below or you could message us by Whatsapp, facebook, or messenger</p>    
                    </div>

                    <CardContact/>
                    <CardSocial/>
                </div>

                <div className="relative z-10">
                    <div className="absolute z-0 w-40 h-40 bg-teal-400 rounded-full -right-28 -top-28 z-0"></div>
                    <div className="absolute z-0 w-40 h-40 bg-teal-400 rounded-full -left-28 -bottom-16 z-5"></div>
                    <div className="glass2 p-6 rounded">
                    <div className="relative z-10 bg-gray-50 rounded-xl shadow-lg p-8 text-gray-700 md:w-80 ">
                        <form className="flex flex-col space-y-4">
                            <div>
                                <label for="" className="text-sm "> Your Name </label>
                          
                           
                                <input type="text" placeholder="Your Name" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 mt-2"/>
                            </div>

                            <div>
                                <label for="" className="text-sm "> Your Email </label>
                            
                                <input type="email" placeholder="Email Address" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 mt-2"/>
                            </div>
                            <div>
                            <label for="" className="text-sm "> Message </label>
                            
                            <textarea type="email" placeholder="Message " className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 mt-2">
                            </textarea>

                            </div>

                            <button className="inline-block self-end bg-cyan-700 font-bold rounded-lg px-6 py-2 uppercase text-gray-50"> Send Message</button>

                        </form>
                        </div>
                    </div>
                </div>

            </div>
            </div>
        </div>
    )
}

export default ContactForm
