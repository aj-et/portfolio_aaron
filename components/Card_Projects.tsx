import {
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/card"
import Image from "next/image"

type Project = {
    id: number;
    name: string;
    description: string;
    image: string;
    html_link: string;
    github_link: string;
};

const Card_Projects = ({ project }: { project: Project }) => {
  return (
    <Card className="w-[400px]">
        <CardContent>
            <div className="relative mt-8">
                <div className="flex space-x-2 absolute right-0 p-2">
                    <a target="_blank" href={project.html_link}><Image src={"/images/chrome.png"} alt="Chrome Icon" width={28} height={28} /></a>
                    <a target="_blank" href={project.github_link}><Image src={"/images/github.png"} alt="Github Icon" width={28} height={28} /></a>
                </div>
                <Image src={project.image} alt="Project Image" width={400} height={400} priority/>
            </div>
        </CardContent>
        <CardFooter>
            <div className="flex flex-col">
                <p>{project.name}</p>
                <p>{project.description}</p>
            </div>
        </CardFooter>
    </Card>
  )
}

export default Card_Projects