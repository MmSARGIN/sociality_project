import React, { useState } from "react";

const Postcard = (props) => {

    const [info, setinfo] = useState(props.data.posts_by_date['2021-07-01']);
    console.log('props', info);

    return <div className="flex items-center w-6/12 h-full ">

        {info.map((i) => (<div className="flex w-full h-5/6 rounded-lg m-2 bg-white">
            <div className="flex items-center bg-green-400 w-1/12 rounded-l-lg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="w-7 h-7"><path fill="white" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg>
            </div>
            <div className="flex p-5 h-3/5 w-full flex-col">
                <div className="flex w-full h-1/4 justify-end">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>


                </div>
                {/* <div className="flex items-center">
                <div className="flex flex-col justify-end items-end w-24 h-24">
                    <div className=" absolute p-2 w-24">
                        <div className="border">
                            <img className="" src="data:image/png;base64,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" alt="" />
                        </div>
                    </div>
                    <span className="relative flex items-center justify-center bg-blue-500 w-7 h-7 rounded-full">
                        <div className="">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-4 h-4 bg-blue-500 "><path fill="white" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" /></svg>
                        </div>
                    </span>
                </div>
                <div>
                    <p className="font-bold font-sans">
                        Social Orientation
                    </p>
                    <p className="text-gray-500 font-base">
                        12 September 2022 20:30
                    </p>
                </div>
            </div> */}
                <div className="flex justify-center h-4/5 rounded-lg mt-3 items-center w-full">
                    <img className="w-3/5 rounded-lg h-full" alt="" src={i.entry.image} />
                </div>
                <div className="mt-2 ml-3">
                    <p className="text-gray-600 font-medium">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, molestiae.</p>
                </div>
                <div className="flex h-2/6 w-full justify-start items-end">
                    <div className="flex m-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                        </svg>
                        <span className="ml-1">0</span>
                    </div>
                    <div className="flex m-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                        </svg>
                        <span className="ml-1">0</span>
                    </div>
                    <div className="flex m-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                        </svg>
                        <span className="ml-1">0</span>
                    </div>
                    <div className="flex m-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="ml-1">0</span>
                    </div>

                </div>
            </div>
        </div>))}
    </div>;
};

export default Postcard;