import React from 'react'
import { BiSolidBadgeCheck } from 'react-icons/bi';
export default function BackEnd() {
  return (
    <div className='skillsContent'>
        <h3 className="skillsTitle">Back End</h3>
        <div className="skillsBox">
            <div className="skillsGroup">
                <div className="skillsData">
                    <BiSolidBadgeCheck className='Badge'/>
                    <div>
                        <h3 className="skillsName">FireBase</h3>
                        <span className="skillsLevel">Intermediate</span>
                    </div>
                </div>

                <div className="skillsData">
                <BiSolidBadgeCheck className='Badge'/>
                    <div>
                        <h3 className="skillsName">MangoDB</h3>
                        <span className="skillsLevel">Intermediate</span>
                    </div>
                </div>

                <div className="skillsData">
                <BiSolidBadgeCheck className='Badge'/>
                    <div>
                        <h3 className="skillsName">Express.Js</h3>
                        <span className="skillsLevel">Intermediate</span>
                    </div>
                </div>
            </div>

            <div className="skillsGroup">
                <div className="skillsData">
                <BiSolidBadgeCheck className='Badge'/>
                    <div>
                        <h3 className="skillsName">Node.Js</h3>
                        <span className="skillsLevel">Beginner</span>
                    </div>
                </div>

                <div className="skillsData">
                <BiSolidBadgeCheck className='Badge'/>
                    <div>
                        <h3 className="skillsName">Larvel</h3>
                        <span className="skillsLevel">Begineer</span>
                    </div>
                </div>

                <div className="skillsData">
                <BiSolidBadgeCheck className='Badge'/>
                    <div>
                        <h3 className="skillsName">PHP</h3>
                        <span className="skillsLevel">Begineer</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
