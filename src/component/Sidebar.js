import axios from "axios";
import React, { useEffect, useState } from "react";
import Postcard from "./Postcard";
import data from './data.json'

const Page = () => {

    const [list, setlist] = useState([]);
    const [list1, setlist1] = useState([]);


    useEffect(() => {
        setlist(data.posts_by_date["2021-06-17"])
        setlist1(data.posts_by_date["2021-07-01"])
    }, []);



    return <div className="flex w-full h-full">


        <div className="flex flex-col w-2/12 h-full">
            <div className="flex h-14 bg-gray-700">
                <div className="w-full flex items-center justify-center"><h1 className="text-xl font-bold">sociality</h1><h3>.io</h3></div>
            </div>
            <div className="flex w-full h-full bg-gray-600 ">
                <div className="flex flex-col w-1/5 bg-gray-800 h-full">
                    <div className="w-full opacity-20 hover:opacity-80">
                        <div className="flex items-center h-full rounded-5xl w-full">
                            <div className="bg-rose-500 h-10 rounded-r-xl w-1/5">

                            </div>
                            <img className="p-2 w-11/12 h-12 rounded-xl" src="data:image/png;base64,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" alt="" />
                        </div>
                    </div>
                    <div className="w-full opacity-20 hover:opacity-80">
                        <div className="flex items-center h-full rounded-5xl w-full">
                            <div className="bg-rose-500 h-10 rounded-r-xl w-1/5">

                            </div>
                            <img className="p-2 w-11/12 h-12 rounded-xl" src="data:image/png;base64,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" alt="" />
                        </div>
                    </div>
                    <div className="w-full opacity-20 hover:opacity-80">
                        <div className="flex items-center h-full rounded-5xl w-full">
                            <div className="bg-rose-500 h-10 rounded-r-xl w-1/5">

                            </div>
                            <img className="p-2 w-11/12 h-12 rounded-xl" src="data:image/png;base64,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" alt="" />
                        </div>
                    </div>
                    <div className="w-full opacity-20 hover:opacity-80">
                        <div className="flex items-center h-full rounded-5xl w-full">
                            <div className="bg-rose-500 h-10 rounded-r-xl w-1/5">

                            </div>
                            <img className="p-2 w-11/12 h-12 rounded-xl" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABDlBMVEUALl/////1VmFHzrYALF4AKl0AIlkAHlcAG1YAJFoAJ1v5V2EAIFhI0bgAJlsAK1/8V2EAF1QAEVIAGVXy8/UAFFNK1bqAip8zS3Hn6e34+fqeqLg7zLNlepbL09xBXH/Z3OL1TVl1h58ANGQebX9YaIVlc42wt8MAAE4qRW3mU2G1SmD4kJdR0LoyU3rX8+2I3s5v2MQ2pJ0WWnVBwa8ZOmaqsb67wcvf4uceMl9QN1/RT2HgU2GCQGAwMl9DNF/6tbn82tz3eIGw59wSS2wpiI4wlpU7sKMngosVV3MdaX0LP2ePmatcbIgAClCVnq90PGCZRWC+TGCQRGC6S2B2PmBOOGDMT2H4jZT81dfNhWKHAAAKI0lEQVR4nO2dbVvaSBfHJzDkyYAKQSCUBEIBwd7YWiKoVVfXrdsWS+3Ddvf7f5F7AqKggcwkYznD1f+L9uqbvea358w5Z87MCUia1/6fr9/8Lxmiq00EUnWvWynbj4jQHN7r5IsXL8L4kjtv9VWzLBLWDVWr2AsI999Q0I0JX2ZWTbJMWFMcO4DQek3JRwj/kldNsVzEkq75mJAYkJIvmUy/N1bNECqlW50n3E/SAybTB8qqAcKl1+1Zwn16PJ/wWl31+imUwvYD4X5ofhCQEKXq1SmhxbAHBSJEetG8I3zNBigMIVLcCeE+I6AYkWYswx4TMvqony2A58N76Y5PyGzC5M7f2qqXTims2ISQdReCr9pmpVUIISufX3mnVr1yWmFNQuxOSk5PwhAi1UZ/MhOmr+t41QunllFG7NswfQC/8L5XpoLesAIKFEqJcBexlaRjwg/ibEOE6ogZMNnzxNmGvpgB0weiVDR3Yibc+ShMvp+ImTApUK4Yi5VPnLJ7KlbCHYEKmolYTXitCeakrIQCnSumYjRhzxDNhIyEApqQjTDdE6QHNSs2Qri3TovFBHiQW/VyI4jJR0UrZ8ZiIfwo0MHwQfSAO+9F9FEGwvS1LKKP0hOme59EK0jvRAuY/CBerp+IFvCtkFHGFyWgmGF0rLUHpCEU2UURDWG6dyUyYDjhzgESsNyeUaiH/p0TM9HfK8SAvStR7uwXKsyAghYyM1rCl37vCVqKzmmhf6YPrgzxDYgWEKZ3eu8/yWvBF0CYTu8kr19662E/X+k5OELXO3j5Sc6swf6bqtfznXInnU72er3rv15e1ZXM2phvok9Xbz8Svf1w5WVUY93ofKVSKZ2I/IXXyDV/67d+67fWUiRiZzR5Ii2TIbF71SviJ6xraj7rOY1mYapm0+l62WyOpF/RMxTWjWy94R7aJdOam5mzLNOs9ofNopoTuMjAuqI6Q7s0zzYvc9BqFvPCve8YC8uGMxosgXugtCueKpwhsYLcx9OcS1QqFxWxGI36kMp8D7JaIjHqilti4xurjEV5MqcUq+E4QTKb+VWvnUZ4dxiNz1f/M/z+ui4zBJgAMxahd6Az7Sg7cEZWZRt0ctSKMQGJhipgxAwHQIIId2LlbvI2thpgw43S4gIotaC+gFQKfAAle3vVKMFKtc3wxVNpCLS2yR1yAjTbMAvUVHHZOZBBVhNoLFXLfADNBtg4w2cXWl2gFkSZJh/AItAoQ5yUS5yxinAfJ2V5lDOQAbHKI5I2oO5B5OcKOgaTaKEFm1CjqC+9QUHXd51iu11suK1BgMVhA6JMOGGrndf8q+aUruUyTvnJOasAtBq9k1YJAxxmZ2sxXc248/1G4IDhXmrvPjq5Y1ktzPjqEHqbLZTQDcjk6kNLYAS5dTGW/zWfpWoGZTrNu/PUEXAXRX4DI4RwFDhSlFLGpdAQPiBCuyGFt+UFZnOspm5uFCFGb0OrNquyG/jaEWcEGcahOB5WC+2sosE8v1MoPCH6dqyWm46cNXQRvPKxsEdZelsle9RAOQHfd2ZZbmRKraaXE81hNcZuaanfbKtCvcPAiPnOwuw3PVUgd43U8i71b7AqSuDBiPFxwhTy0DHAtp/mJUdut1ULihgPMfLR+23WCIE/XRDhVJyGWzkF/QqfSI91i28WPsN3Vc2J1du32/DNqDmxbvItF/ZLDF9aO17z+xD+wJWe6sdC7CPwiHiuh8YuG/7LaKwWY738aglQ4ei5SM8vpxqCbu9PhOXUMIarOiK0brCKypFz40CMp+1Y3S5E9dUh/Mw/kZx1+pGc1RRnFlJXsGtHgCwIEE+nwrLsuX3WLTn4vOp1swhjTfEa5SqTKYvQKxucmq9MsK7qRbdPH3mgu6mBnOKTW4qUliempGzmgH1jOhY23IFl9QOe3RNTZhqHNJuyml3BwqmVm/QVzUqgHfQcoijNrd1fvWoGqfc9t3LwSBpWvPANCfgorMw0Fe168DMuLexSXJKAPqMlMubeLFiNbKAtdkONCJbQeGydPgqqMXdDQypUwieAxIwF9cnHmLTwZ3BACWUnKEqWCtrs7QvOZClma2ASLhx7KpUb+W1DkxVD3c56TZpeFcjfCVk611Xqj1x3NDrsD+iqcIj5kM9c1/R/CMDDhe7xmeuaqA/vmRRfQGkEro/BazJvKnATev7v8PGUmYcWSrPxLiue6BDa8ZDimTebwDkpn4mZB9ngcgVvwga4tr7mcgWMmAyxr82pxv/iF68UjuWMZLK3EgkZPjr+cnq79/XkXafTeXfyc+/22+mXc26E2g1HwgJbtieWOjo+/d7pJLa2tjZ8JRL+n/6/Oh1uiCqvQW5JarEAEj88Pv3Z2djyuQK0wY0Qb484AVYR9ebx8W7fJRbRjcWNEKEcH8RBmzYVYnz27YQYbzEdZ0K0zcNRS23KRIHx+V4iDI8zIc41Y49ZDjw6QIyPv1LgcSYkOaMbM2nYBpWLYvzPTzo+3oQoo8WqwEePB9wWAB59p+XjTohwNrqnDopUpQzGt8ti53MTIiSjaGa0hiqVh24ev9ui53sOQoRVJ8Jp+DB48uvJf5zNgM9DSHaj3GRjNA8pP7iHz0+YDPhchKRM1Rz6xwnVgkf5jh3/SLAZ8PkI/VHmdsEOh7QGZUemHD/EiNVDn5UQoZScL1ZaS75eapX6BUemiy9jwK+sHvrMhMh/m5AzHLf8+Au0lmUO+qOmk8nL9O0YfMa8BX8Boa+UpuTznnPjFgrlcnlUKLjNRhF/3mactcRnbEniFxJO1jf+ELRC5H8JWmd/BUwA2bfgrySMK3zUiQgoCCFGkQEFIYwBKAYhPokOKAQh3osWRYUhxKdxAAUgxMdx+AQgxEdRE6EwhLE2oQCE+Es8C4InjFHLiEIY10ehE8aNowIQxilmRCDEP2L7KHBCFDMVgifEpxwAYRPGzhTACfEPHoCQCTd57ELIhPiYQyAFTbi5x8WEgAkRH0C4hDFP9iIQ/lx3GyJOJgRLyM1J4RJ+5+SkYAlRhxMgVEJ8zstJwRJ+W3vCr7y2IVRCLmdf0IRn3ACBEuJ/uG1DqITc8j1YQk4nJ8CE/EIpUELE62ABl5BDr/uesL5qmCDFvRWdI/RWTROkM251d6KDutCmUZH/xIsbYOISVcBN+vknC25OuvEvKoObCud6dqr9gWxoI8WIL+EFkgB+hJGnl0pIqsD7uTp8zguw9ooQ2go8I3KLpbULQig50EbfScbncnNIfPRS8gltgD86yKlqIyb0CSUXXsLgU3mTXTghNLvQ/JTP6al2ad0RStU6sK9OcTkBbyQupCmhZGNYiDy6GBuJ/6QHQsmugypPOdxw1+4Ap4RStQsp3OCzuIS1ywtpnlCyXFC/FRbvCLxRe3U/aHVPSDzVUcDUqLGCae3BgPOEhLGiqTAsiW8juulGrbbx6mIWao7QhyxXugAaG1Gb3pev/vjvEdH/ATo2CJhYd3VwAAAAAElFTkSuQmCC" alt="" />
                        </div>
                    </div>
                    <div className="w-full opacity-20 hover:opacity-80">
                        <div className="flex items-center h-full rounded-5xl w-full">
                            <div className="bg-rose-500 h-10 rounded-r-xl w-1/5">

                            </div>
                            <img className="p-2 w-11/12 h-12 rounded-xl" src="data:image/png;base64,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" alt="" />
                        </div>
                    </div>
                </div>
                <div className="w-4/5 h-full">
                    <div className="flex flex-col w-full h-full">
                        <div className="flex hover:bg-rose-400  h-12 items-center justify-around w-full">
                            <div className=" flex items-center justify-start w-8/12 ">
                                <div className="flex items-center mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="red" class="w-5 h-5 opacity-70">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                                    </svg>



                                </div>
                                <div className="flex items-center">
                                    <h1 className="text-gray-300 text-sm">
                                        NOTIFICATIONS
                                    </h1>
                                </div>
                            </div>
                            <div className="flex items-center justify-center  w-2/12 h-3/5">
                                <span className="flex justify-center items-center align-middle text-sm text-white rounded-sm border-teal-600 border w-3/4 h-3/6">29</span>
                            </div>
                        </div>
                        <div className="flex hover:bg-rose-400  h-12 items-center justify-around w-full">
                            <div className=" flex items-center justify-start w-8/12 ">
                                <div className="flex items-center mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="red" class="opacity-70 w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                                    </svg>


                                </div>
                                <div className="flex items-center">
                                    <h1 className="text-gray-300 text-sm">
                                        SUMMARY
                                    </h1>
                                </div>
                            </div>
                            <div className="flex items-center justify-center  w-2/12 h-3/5">
                                <span className="flex justify-center items-center align-middle text-xl text-white  w-3/4 h-3/6">+</span>
                            </div>
                        </div>
                        <div className="flex hover:bg-rose-400  h-12 items-center justify-around w-full">
                            <div className=" flex items-center justify-start w-8/12 ">
                                <div className="flex items-center mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="red" class="opacity-70 w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                    </svg>


                                </div>
                                <div className="flex items-center">
                                    <h1 className="text-gray-300 text-sm">
                                        PUBLISH
                                    </h1>
                                </div>
                            </div>
                            <div className="flex items-center justify-center  w-2/12 h-3/5">
                                <span className="flex justify-center items-center align-middle text-xl text-white  w-3/4 h-3/6">+</span>
                            </div>
                        </div>
                        <div className="flex hover:bg-rose-400  h-12 items-center justify-around w-full">
                            <div className=" flex items-center justify-start w-8/12 ">
                                <div className="flex items-center mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="red" class="opacity-70 w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                                    </svg>


                                </div>
                                <div className="flex items-center">
                                    <h1 className="text-gray-300 text-sm">
                                        ENGAGE
                                    </h1>
                                </div>
                            </div>
                            <div className="flex items-center justify-center  w-2/12 h-3/5">
                                <span className="flex justify-center items-center align-middle text-xl text-white  w-3/4 h-3/6">+</span>
                            </div>
                        </div>
                        <div className="flex hover:bg-rose-400  h-12 items-center justify-around w-full">
                            <div className=" flex items-center justify-start w-8/12 ">
                                <div className="flex items-center mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="red" class="opacity-70 w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 19.5v-.75a7.5 7.5 0 00-7.5-7.5H4.5m0-6.75h.75c7.87 0 14.25 6.38 14.25 14.25v.75M6 18.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                    </svg>


                                </div>
                                <div className="flex items-center">
                                    <h1 className="text-gray-300 text-sm">
                                        LISTEN
                                    </h1>
                                </div>
                            </div>
                            <div className="flex items-center justify-center  w-2/12 h-3/5">
                                <span className="flex justify-center items-center align-middle text-xl text-white  w-3/4 h-3/6">+</span>
                            </div>
                        </div>
                        <div className="flex hover:bg-rose-400  h-12 items-center justify-around w-full">
                            <div className=" flex items-center justify-start w-8/12 ">
                                <div className="flex items-center mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="red" class="opacity-70 w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                                    </svg>


                                </div>
                                <div className="flex items-center">
                                    <h1 className="text-gray-300 text-sm">
                                        REPORT
                                    </h1>
                                </div>
                            </div>
                            <div className="flex items-center justify-center  w-2/12 h-3/5">
                                <span className="flex justify-center items-center align-middle text-xl text-white  w-3/4 h-3/6">+</span>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
        <div>

        </div>
        <div className="flex flex-col bg-gray-300 w-10/12">
            <div className="flex h-3/6">
                {
                    <Postcard data={data} />
                }
            </div>
            <div className="flex h-3/6">
                {
                    <Postcard data={data} />
                }
            </div>
        </div>


    </div >;
};

export default Page;
