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
                <div className="flex space-x-1 absolute right-0 p-1 ">
                    <a target="_blank" href={project.html_link} className="icon-container"><Image src={"/images/chrome.png"} alt="Chrome Icon" width={28} height={28} /></a>
                    <a target="_blank" href={project.github_link} className="icon-container"><Image src={"/images/github.png"} alt="Github Icon" width={28} height={28} /></a>
                </div>
                <Image src={project.image} alt="Project Image" width={400} height={400} priority/>
                <div className="flex flex-col mt-5">
                    <h2 className="text-lg font-bold mb-2">{project.name}</h2>
                    <p>{project.description}</p>
                </div>
            </div>
        </CardContent>
    </Card>
  )
}

export default Card_Projects