import Container from "@/components/Container";
import HomeDescription from "@/components/HomeDescription";
import Photo from "@/components/Photo";
import SocialLinks from "@/components/SocialLinks";
import Statistics from "@/components/Statistics";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Script from "next/script";
export default function Home() {
    return (
        <div>
            <div className="bg-bodyColor  text-white/80">
                <Container className="py-10 grid grid-cols-1 md:grid-cols-2 gp-10">
                    <div className="flex flex-col items-center md:items-start gap-5 md:gap-7 text-center md:text-start">
                        <div>
                            <h3 className="font-semibold tracking-wider mb-1">
                                Computer Civil Engineer
                            </h3>
                            <h2 className="text-3xl md:text-5xl mb-2 text-white">
                                Hello I&apos;m
                            </h2>
                            <h1 className="text-lightSky text-5xl md:text-7xl tracking-normal ">
                                Marcelo Loyola
                            </h1>
                        </div>
                        <div className="w-full h-[340px] md:h-[170px] relative">
                            <div className="absolute top-0 left-0 w-full h-full">
                                <HomeDescription />
                            </div>
                        </div>
                        <Button className="bg-transparent rounded-full border border-lightSky/50 text-lightSky hover:bg-hoverColor hover:text-black hoverEffect h-11">
                            Download cv <Download />
                        </Button>
                        <SocialLinks />
                        <Statistics />
                    </div>
                    {/*Photo*/}
                    <Photo />
                </Container>

                <Script
                    id="anythingllm-widget" // id único en la página
  data-embed-id="ce36cd4c-99bf-4483-a1b2-f7184a6d56b9"
  data-base-api-url="http://localhost:3001/api/embed"
  src="http://localhost:3000/embed/anythingllm-chat-widget.min.js">


                </Script>
            </div>
        </div>
    );
}
