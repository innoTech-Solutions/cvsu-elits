
import Awards from "@/components/Landing Page/Awards";
import Events from "@/components/Landing Page/Events";
import HeroSection from "@/components/Landing Page/HeroSection";
import History from "@/components/Landing Page/History";
import JoinUs from "@/components/Landing Page/JoinUs";
import Updates from "@/components/Landing Page/Updates";
import Sidebar from "@/components/Sidebar";

export default function Home() {
    return (
            <div>

                {/**
                 *  Side Guide Navbar
                 */}
                <div className="fixed left-0 z-50 top-1/2 transform -translate-y-1/2">
                    <Sidebar/>
                </div>

                {/**
                 *  Landing Page
                 */}
                <div id="hero">
                    <HeroSection />
                </div>

                <div id="history">
                    <History />
                </div>

                <div id="awards">
                    <Awards />
                </div>

                {/* JULIAN: working on updates */}
                <div id="updates">
                    <Updates className="min-h-screen my-4" />
                </div>

                {/* JULIAN: working on events */}
                <div id="events">
                    <Events className="min-h-screen my-4"/>
                </div>

                <div id="joinus">
                    <JoinUs />
                </div>
            </div>
    );
}
