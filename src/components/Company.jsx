import React from 'react';
// import hp_cpy_image from '../images/hp_cpy_image.jpg';
import { useNavigate } from 'react-router-dom';
import waltonbd_logo from '../images/waltonbd_logo.jpg'
// import boeing_logo from '../images/boing_space/Spring_Airlines_Logo.png';
import s7 from '../images/boing_space/s7.jpg';



const Company = () => {
    const navigate = useNavigate();
    return (
        <div className='bg-[rgb(48,177,49)] h-full p-4'>
            {/* [#2e9afe] */}
            <div className="options text-center text-white text-lg pt-2 font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" onClick={() => navigate('/home')} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute left-2  storke-white top-5 cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                </svg>
                Company Profile
            </div>

            <div className="hp_company mt-10">
                <img src={s7} alt="hp" className='sm:w-3/6 md:w-2/6 mx-auto' />
            </div>

            <div className=" cpy_info sm:w-4/5 lg:w-3/4 mx-auto mt-5">

                {/*  [#2e9afe]*/}
                <div className='shadow-lg text-center bg-white h-10 flex justify-center items-center text-lg font-medium rounded-lg shadow-red-300 text-red-600'>Company Profile</div>
            </div>

            <div className="part sm:w-4/5 lg:w-3/4 mx-auto text-white mt-4">
                <div className="heading font-bold mb-1">Spring Airlines Introduction</div>
                <hr />
                <div className="data text-sm mt-2">

                    <ul className='list-disc'>

                        <li>
                            Spring Airlines is the first private airline in China to earn CAAC’s (Civil Aviation Administration of China) top safety award.
                        </li>
                        <li>
                            In OAG's on-time performance report of 2017, Spring Airlines has been ranked No.1 among Chinese mainland airlines.
                        </li>
                        <li>
                            Spring Airlines 3S logo symbolizes Safety, Sincerity and Smile.
                        </li>
                        <li>
                            Spring Airlines slogan “Don't think, Just fly!” is expressed by sliding right palm up to the top of the left shoulder, symbolizing ideal wings flying freely flying high.
                        </li>
                    </ul>
                </div>
            </div>

            <div className="part sm:w-4/5 lg:w-3/4 mx-auto text-white mt-4">
                <div className="heading font-bold mb-1">Our History</div>
                <hr />
                <div className="data text-sm mt-2">
                    Spring Airlines is one of the first private airlines in China. Headquartered in Shanghai, the airline has domestic bases at both of the city’s airports – Hongqiao and Pudong, as well as Shenyang, Shijiazhuang, Shenzhen, Yangzhou, Ningbo and Jieyang. Overseas bases include Tokyo and Osaka in Japan, Bangkok in Thailand and Jeju in South Korea. In October 2018, Spring Airlines officially established Hebei branch, which is the first branch company of Spring Airlines.
                    <br />
                    <br />
                    After its inaugural flight on 18 July 2005, Spring now owns a fleet of 81 aircraft flying over 130 domestic routes, such as Shanghai, Guangzhou, Shenzhen, Xiamen, Sanya, Shenyang, Harbin, Dalian, Qingdao, Shijiazhuang, Chongqing, Xi'an, Urumqi, Hohhot and more.  In July 2010, Spring Airlines launched Shanghai Pudong – Ibaraki charter flight, marking the first time that Chinese private airline flew abroad. Nowadays Spring operates more than 80 international and regional routes in Asia, offering great number of connections from Shanghai and other cities in China to the popular destinations in Japan including Tokyo, Osaka, Sapporo, Nagoya, Takamatsu and Saga; destinations in South Korea including Seoul and Jeju. Growing number of scheduled flights to destinations in Southeast Asia including Singapore, Phnom Penh and Siem Reap in Cambodia, Kota Kinabalu in Malaysia, as well as flights to Bangkok, Phuket, Krabi, Chiang Mai and Surat Thani in Thailand. Spring Airlines Greater China network offers passengers flights to Hong Kong, Macau, as well as Taipei and Kaohsiung in Taiwan.
                </div>
            </div>
            {/* 
            <div className="part sm:w-4/5 lg:w-3/4 mx-auto text-white mt-4">
                <div className="heading font-bold mb-1">Our Production Facilities</div>
                <hr />
                <div className="data text-sm mt-2">The Manufacturing Plant & Headquarters of WHIPLC is located at Chandra, Kaliakoir, Gazipur, Bangladesh. The plant is treated as one of the sophisticated manufacturing plants in Bangladesh as well as in South Asia. Walton innovates to build a more advanced, sustainable and environment friendly society through the combination of sophisticated technologies and expertise. The manufacturing plant of WHIPLC is approx. 5,000,000 sft. of working space consisting of 19 Buildings and Shades.
                </div>
            </div>

            <div className="part sm:w-4/5 lg:w-3/4 mx-auto text-white mt-4">
                <div className="heading font-bold mb-1">Awards</div>
                <hr />
                <div className="data text-sm mt-2">Walton is the No. 1 Manufacturer and Exporter of Refrigerator, Air Conditioner, LED TV, Mobile Phone, Walton has achieved many international & national awards and recognitions like some recent prestigious and best business awards are: The Golden Globe Tiger Award 2015 in the category of Excellence & Leadership Brand, DHL-Daily Star Bangladesh 15th Business Award 2014 for Best Enterprise in Bangladesh, Asia Best Employer Brand Awards in 2015, Six times 1st Prize for Highest VAT Payer at DITF-2015, 2014, 2013, 2012, 2011 & 2010 respectively, Second Prize for Premier Pavilion Category at DITF-2015, Best Refrigerator Brand Award-2014, Best Television Brand Award-2014, Best Local Brand Award-2014, 1st Prize for Premier Pavilion Category at DITF-2014, The Global Brand excellence Award in 2014 for brand excellence in consumer electronics, 1st Prize for Premier Pavilion Category at DITF-2013, Best Sponsor Award-2012, Creative Media Ltd. BABISAS Award-2012, Best Brand (Refrigerator) Award-2011, 2nd Prize for Premier Pavilion Category at DITF-2011, 2nd Prize for Premier Pavilion Category at DITF-2010, 1st Prize for Premier Pavilion Category at DITF-2009, 1st Prize for Premier Pavilion Category at CITF-2005.
                </div>
            </div>

            <div className="part  sm:w-4/5 lg:w-3/4 mx-auto text-white mt-4">
                <div className="heading font-bold mb-1">Our Vision</div>
                <hr />
                <div className="data text-sm mt-2">Along the way, Walton has earned domestic and global recognition for its experience and proven track record in a variety of electronics fields. Walton is the pioneer of developing state of the art designs and modern technology having leading market share specializing in Multi-Stored Refrigerators, Freezers, Air Conditioners, LED/ LCD televisions, Motorcycles, Smart Phones and Home Appliances.Walton is working on carrying the flag of red and green into the global market presence from the present 40 countries to more than 200 countries to dominate Go Global and the top five Electronics Brand of the Globe within 2030.</div>
                <br />
                <br />
            </div> */}

        </div>
    )
}

export default Company