import Container from "@/components/Container";
import Photo from "@/components/Photo";
import SocialLinks from "@/components/SocialLinks";
import Statistics from "@/components/Statistics";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
export default function Home() {
    return (
        <div className="bg-bodyColor text-white/80">
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
                    <p className="w-auto md:max-w[500px] text-white/50 font-thin leading-6 ">
                        Civil Engineer in Computer Science with experience in
                        technical support, web development, and digital platform
                        management. Known for proactivity, analytical skills,
                        and a continuous improvement mindset. I aim to join as a
                        trainee, junior, or in a related role that allows me to
                        apply my knowledge and grow professionally in a
                        collaborative and challenging environment.
                    </p>
                    <Button className="bg-transparent rounded-full border border-lightSky/50 text-lightSky hover:bg-hoverColor hover:text-black hoverEffect h-11">
                        Download cv <Download />{" "}
                    </Button>
                    <SocialLinks />
                    <Statistics />
                </div>
                {/*Photo*/}
                <Photo />
            </Container>
        </div>
    );
}
