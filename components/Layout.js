import CardSocialLogo from "./Card/CardSocialLogo";
import Header from "./Header/Header";


function Layout({children}) {
    return (
        <div className="relative h-screen">
            <Header className="fixed top-0"/>
               <div className="relative top-16">
                {children}
            </div>
            <div style={{
            backgroundImage: `url("/linen3.jpg")`}} className="fixed bottom-0 left-0 z-50 w-full flex items-center justify-center p-2">
               <div className="glass2 mx-2 py-2 px-6 w-full">
                <CardSocialLogo />
                </div>
            </div>
            
        </div>
    )
}

export default Layout
