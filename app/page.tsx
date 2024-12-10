import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
export default function Home() {
    return (
        <div className="bg-bodyColor text-white/80">
            <Container>
                <h1>my portfolio nextjs</h1>
                <Button>click me</Button>
            </Container>
        </div>
    );
}
