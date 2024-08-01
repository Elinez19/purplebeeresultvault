"use client"
import React from 'react';
import Link from 'next/link';
import ReactPlayer from 'react-player';
import Image from 'next/image';
import fileDownload from 'react-file-download';

const handleDownloadAdmin = () => {
    fileDownload('/school-admin-manual.pdf', 'school-admin-manual.pdf'); 
};

const handleDownloadTeacher = () => {
    fileDownload('/teacher-manual.pdf', 'teacher-manual.pdf'); 
};

const handleDownloadStudent = () => {
    fileDownload('/school-admin-manual.pdf', 'student-manual.pdf'); 
};

const Provide = () => {
    return (
        <div id="Features" className="mx-auto max-w-7xl px-4 my-10">
            <div className="bg-white rounded-3xl shadow-lg p-10 hover:shadow-xl transition-shadow duration-300">
                <div className='flex flex-col items-center'>
                    {/* Video Section */}
                    <div className='w-full rounded-3xl bg-gray-100 shadow-md hover:shadow-xl transition-shadow duration-300 p-4 mb-10' style={{ height: '700px', width: '1200px' }}>
                        <ReactPlayer 
                            url='https://youtu.be/FqBm5PK9yWE?si=ZEbSNi0to4z2SKzQ' 
                            className='rounded-3xl' 
                            width='100%' 
                            height='100%' 
                            controls 
                        />
                    </div>
                    <p className="text-xl lg:text-2xl font-semibold text-center mb-10">
                        Watch the video to learn how to use Pbresultvault software Step by Step
                    </p>

                    {/* Sub-sections */}
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch'>
                        {/* School Admin Section */}
                        <div className='flex flex-col items-center'>
                            <Image src="/Dashboard.jpg" alt="School Admin Software" width={300} height={200} className="mb-4 rounded" />
                            <h2 className="text-3xl lg:text-4xl font-semibold text-center">School Admin Software</h2>
                            <p className="text-lg lg:text-xl pt-4 font-normal text-center text-bluegray">
                                Manage and streamline all school administrative tasks efficiently with our admin software.
                            </p>
                            <div className='flex flex-col items-center mt-4'>
                                <Link href="https://ekschool.pbresultvault.com/login">
                                    <button className="bg-purple text-white font-medium py-2 px-4 rounded w-full sm:w-auto mb-2">
                                        Admin Login
                                    </button>
                                </Link>
                                <button
                                    onClick={handleDownloadAdmin}
                                    className="bg-purple text-white font-medium py-2 px-4 rounded w-full sm:w-auto"
                                >
                                    Get Manual
                                </button>
                            </div>
                        </div>

                        {/* Teacher Section */}
                        <div className='flex flex-col items-center'>
                            <Image src="/School-Admin2.jpg" alt="Teacher Software" width={300} height={200} className="mb-4 rounded" />
                            <h2 className="text-3xl lg:text-4xl font-semibold text-center">Teacher Software</h2>
                            <p className="text-lg lg:text-xl pt-4 font-normal text-center text-bluegray">
                                Simplify grading and report generation with our easy-to-use teacher software.
                            </p>
                            <div className='flex flex-col items-center mt-4'>
                                <Link href="https://ekteacher.pbresultvault.com/login">
                                    <button className="bg-purple text-white font-medium py-2 px-4 rounded w-full sm:w-auto mb-2">
                                        Teacher Login
                                    </button>
                                </Link>
                                <button
                                    onClick={handleDownloadTeacher}
                                    className="bg-purple text-white font-medium py-2 px-4 rounded w-full sm:w-auto"
                                >
                                    Get Manual
                                </button>
                            </div>
                        </div>

                        {/* Student Section */}
                        <div className='flex flex-col items-center'>
                            <Image src="/School-Admin2.jpg" alt="Student Software" width={300} height={200} className="mb-4 rounded" />
                            <h2 className="text-3xl lg:text-4xl font-semibold text-center">Student Software</h2>
                            <p className="text-lg lg:text-xl pt-4 font-normal text-center text-bluegray">
                                Access grades, track academic progress, and communicate with teachers easily using our student-friendly software.
                            </p>
                            <div className='flex flex-col items-center mt-4'>
                                <Link href="https://ekstudent.pbresultvault.com/login">
                                    <button className="bg-purple text-white font-medium py-2 px-4 rounded w-full sm:w-auto mb-2">
                                        Student Login
                                    </button>
                                </Link>
                                <button
                                    onClick={handleDownloadStudent}
                                    className="bg-purple text-white font-medium py-2 px-4 rounded w-full sm:w-auto"
                                >
                                    Get Manual
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Provide;
