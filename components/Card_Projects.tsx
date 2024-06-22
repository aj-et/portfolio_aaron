import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card"
import Image from "next/image"

const Card_Projects = () => {
  return (
    <Card className="w-[400px]">
        <CardHeader>
            <div className="relative">
                <div className="flex space-x-2 absolute right-0">
                    <a target="_blank" href={"/"}><Image src={"/images/chrome.png"} alt="Chrome Icon" width={28} height={28} /></a>
                    <a target="_blank" href={"/"}><Image src={"/images/github.png"} alt="Github Icon" width={28} height={28} /></a>
                </div>
            </div>
        </CardHeader>
        <CardContent>
            <Image src={"/"} alt="Project Image" width={150} height={150} />
        </CardContent>
        <CardFooter>
            <div className="flex flex-col">
                <p>Project Name</p>
                <p>Project Description</p>
                <p>Project Tags</p>
            </div>
        </CardFooter>
    </Card>
  )
}

export default Card_Projects