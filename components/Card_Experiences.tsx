import {
    Card,
    CardContent
} from "@/components/ui/card"
import { VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import React from 'react'

type Experience = {
    id: number,
    positionName: string,
    employeeName: string,
    dateStarted: string,
    dateEnded: string,
    description1: string,
    description2: string,
    description3: string,
    imageUrl: string,
};

const Card_Experiences = ({ experience }: { experience: Experience }) => {
    return (
        <VerticalTimelineElement
            visible={true}
            contentStyle={{ background: 'rgb(250, 250, 250)', color: '#000' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
            date={`${experience.dateStarted} - ${experience.dateEnded}`}
            iconStyle={{ background: 'rgb(250, 250, 250)'}}
            icon={
                <div className="flex justify-center items-center w-full h-full">
                    <img 
                        src={experience.imageUrl}
                        alt={experience.employeeName}
                        className="w-[100%] h-[100%] object-contain rounded-full"
                    />
                </div>
            }
        >
            <div>
                <h2 className="text-lg font-bold mb-2">{experience.positionName}</h2>
                <p className='font-semibold'>{experience.employeeName}</p>
            </div>
    
            <ul className='list-disc'>
                <li>{experience.description1}</li>
                <li>{experience.description2}</li>
                <li>{experience.description3}</li>
            </ul>
        </VerticalTimelineElement>
    )
}

export default Card_Experiences